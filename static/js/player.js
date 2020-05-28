
var channels = document.querySelectorAll('.channel')

var streams = {
  mksix: "http://103.199.160.85/Content/mktv6/Live/Channel(MKTV6)/index.m3u8",
  mktv: "http://103.199.160.85/Content/mktv/Live/Channel(MKTV)/index.m3u8",
  sirippoli: "http://103.199.161.254:80/Content/kalaignarsirippoli/Live/Channel(Kalaignarsirippoli)/index.m3u8",
  krishna : "http://bsk.livebox.co.in/srikrishnatverdhls/srikrishnatverd.m3u8",
  ragam : "http://account12.livebox.co.in/ntvhls/ntv.m3u8",
  ee:"http://live.streamjo.com:1935/eetlive/eettv/playlist.m3u8",
  jsptv :"http://7starcloud.com:1935/jsptv/jsptv/playlist.m3u8",
  agaram_mix :"http://akaram.zecast.net/akaram-live/akarammix1/index.m3u8",
  agaram_tv :"http://akaram.zecast.net/akaram-live/akaramnew2/index.m3u8",
  comedy:"http://akaram.zecast.net/akaram-live/ngrp:akaramgalatta1_all/index.m3u8",

};

function choosechannel(){

  console.log(this.name);
  var d = this.name;

  Basic_player(d);
    //  player(d);


};

function player(i){
  jwplayer('players').setup({
    'file':streams[i]
  });
};


for (var i = 0; i < channels.length; i++) {
  channels[i].addEventListener('click',choosechannel);
}

function Basic_player(i){

  var g = streams[i];

  if(Hls.isSupported()) {
    var video = document.getElementById('players');
    var hls = new Hls();
    hls.loadSource(g);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
        //video.play();
        // Show loading animation.
      var playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Automatic playback started!
          // Show playing UI.

        })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
        });
      }
    });
  }else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = g;
    video.addEventListener('canplay',function() {
      video.play();
    });
  }

};

