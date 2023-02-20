jQuery(document).ready(function ($) {
  (function initPlayVideo() {
    var $videoCover = $(".f-video-cover");
    var $videoPlayerIframe = $(".f-video-player iframe");
 
    $videoCover.on("click", function () {
      $videoCover.fadeOut();
      $videoPlayerIframe[0].src += "?feature=oembed&autoplay=1";
    });
  })();
});