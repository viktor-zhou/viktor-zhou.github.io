var _hmt = window._hmt || [];

(function loadBaiduAnalytics() {
  var script = document.createElement("script");
  var firstScript = document.getElementsByTagName("script")[0];

  script.src = "https://hm.baidu.com/hm.js?0c9a7ae10846194abdf9a4ac82c8a92e";
  firstScript.parentNode.insertBefore(script, firstScript);
}());

document.addEventListener("DOMContentLoaded", function loadPublications() {
  var publicationsList = document.getElementById("publications-list");
  var isChinese = document.documentElement.lang.toLowerCase().startsWith("zh");

  if (!publicationsList) {
    return;
  }

  fetch("./publications.html", { cache: "no-cache" })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Unable to load publications: HTTP " + response.status);
      }

      return response.text();
    })
    .then(function (html) {
      publicationsList.innerHTML = html;
    })
    .catch(function (error) {
      publicationsList.innerHTML = "<p class=\"publication-status publication-error\" role=\"alert\">" +
        (isChinese ? "论文列表加载失败，请稍后刷新页面重试。" :
          "Publications could not be loaded. Please refresh the page and try again.") +
        "</p>";
      console.error(error);
    });
});
