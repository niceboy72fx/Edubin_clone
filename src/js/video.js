const open = document.querySelector(".elementor3-widget1-play");
const close = document.querySelector(".close-btn");
const video = document.querySelector(".elementor3-video");

open.addEventListener("click", function () {
  video.style.display = "block";
});

window.onclick = (e) => {
  if (e.target === video) {
    video.style.display = "none";
    stopVideo();
  }
};

var stopVideo = function (element) {
  var iframe = document.querySelector("iframe");
  var video = document.querySelector("video");
  if (iframe) {
    var iframeSrc = iframe.src;
    iframe.src = iframeSrc;
  }
  if (video) {
    video.pause();
  }
};
