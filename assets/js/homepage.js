var _hmt = window._hmt || [];

(function loadBaiduAnalytics() {
  var script = document.createElement("script");
  var firstScript = document.getElementsByTagName("script")[0];

  script.src = "https://hm.baidu.com/hm.js?0c9a7ae10846194abdf9a4ac82c8a92e";
  firstScript.parentNode.insertBefore(script, firstScript);
}());

window.dataLayer = window.dataLayer || [];

function gtag() {
  window.dataLayer.push(arguments);
}

gtag("js", new Date());
gtag("config", "UA-159825357-1");

document.addEventListener("DOMContentLoaded", function loadPublications() {
  fetch("./publications.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      var publicationsList = document.getElementById("publications-list");

      if (publicationsList) {
        publicationsList.innerHTML = html;
      }
    });
});
