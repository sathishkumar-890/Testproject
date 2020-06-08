
var channels = document.querySelectorAll('.channel')

var streams = {
  mksix: "http://103.199.160.85/Content/mktv6/Live/Channel(MKTV6)/index.m3u8",
  mktv: "http://103.199.160.85/Content/mktv/Live/Channel(MKTV)/index.m3u8",
  sirippoli: "http://103.199.161.254:80/Content/kalaignarsirippoli/Live/Channel(Kalaignarsirippoli)/index.m3u8",
  krishna : "http://bsk.livebox.co.in/srikrishnatverdhls/srikrishnatverd.m3u8",
  ragam : "http://account12.livebox.co.in/ntvhls/ntv.m3u8",
  eet:"http://live.streamjo.com:1935/eetlive/eettv/playlist.m3u8",
  jsptv :"http://7starcloud.com:1935/jsptv/jsptv/playlist.m3u8",
  agaram_mix :"http://akaram.zecast.net/akaram-live/akarammix1/index.m3u8",
  agaram_tv :"http://akaram.zecast.net/akaram-live/akaramnew2/index.m3u8",
  comedy:"http://akaram.zecast.net/akaram-live/ngrp:akaramgalatta1_all/index.m3u8",

  mktunes:"http://103.199.160.85/Content/mktunes/Live/Channel(MKTunes)/Stream(02)/index.m3u8",
  murasu:"http://103.199.160.85:80/Content/kalaignarmurasu/Live/Channel(KalaignarMurasu)/Stream(02)/index.m3u8",
  kalaignar:"http://103.199.161.254/Content/kalaignartv/Live/Channel(KalaignarTV)/stream(02)/index.m3u8",
  pudhuyugam:"http://103.199.160.85/Content/puthuyugam/Live/Channel(Puthuyugam)/stream(02)/index.m3u8",
  vasanth:"http://vasanth.live-s.cdn.bitgravity.com/cdn-live/_definst_/vasanth/secure/live/feed01/playlist.m3u8?e=0&h=54e44f64b2e6d5122acdf77d01ab7f9f",
  discovery_tamil:"https://streamidvo.multitvsolution.in/live/DiscoveryTamil-a/p4.m3u8",
  vadhanam_tv:"http://95.216.167.183:5080/LiveApp/streams/443106610169904881506470.m3u8",
  suriya_tv:"http://account16.livebox.co.in/suriyatvcglhls/live.m3u8",
  jcv_tv:"http://account27.livebox.co.in/jcvtvhls/live.m3u8",
  vidiyal_tv:"http://account7.livebox.co.in/vidiyaltvhls/live.m3u8",
  aara_tv:"http://arratv.livebox.co.in/arratvhls/admin.m3u8",
  aasai_tv:"http://osaitv.livebox.co.in/osaihls/live.m3u8",
  bama_tv:"http://livematrix.in:1935/bamahd/bamahd/playlist.m3u8",
  anbu_tv:"http://livestream.5centscdn.com/cinthamani/159b134a543fa8f70b3e0eff376e820c.sdp/index.m3u8",
  csk_tv:"http://185.105.4.244:1935/livesp/csktv1/playlist.m3u8",

};

function choosechannel(){

  console.log(this.name);
  var d = this.name;
//  player(d);

  Basic_player(d);
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
          video.pause()
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

