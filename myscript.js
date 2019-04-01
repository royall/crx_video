class VideoParse {

  flag = false;
  lines = [
    {"name": "万能接口1", "value": "http://www.ibb6.com/jx/?url="},
    {"name": "万能接口2", "value": "http://jqaaa.com/jx.php?url="},
    {"name": "万能接口3", "value": "http://jiexi.071811.cc/jx2.php?url="},
    {"name": "万能接口4", "value": "http://jqaaa.com/jq3/?url="},
    {"name": "万能接口5", "value": "http://yun.baiyug.cn/vip/index.php?url="},
    {"name": "万能接口6", "value": "https://jiexi.071811.cc/jx2.php?url="},
    {"name": "腾讯视频接口1", "value": "https://www.myxin.top/jx/api/?url="},
    {"name": "爱奇艺超清接口1", "value": "https://vip.hackmg.com/jx/index.php?url="},
    {"name": "爱奇艺超清接口2", "value": "http://api.baiyug.cn/vip/index.php?url="},
    {"name": "爱奇艺超清接口3", "value": "http://jiexi.92fz.cn/player/vip.php?url="},
    {"name": "芒果TV超清接口", "value": "http://jx.ovov.cc/?url="},
    {"name": "芒果TV手机接口", "value": "http://jx.618ge.com/?url="},
    {"name": "优酷超清接口", "value": "http://vip.jlsprh.com/?url="},
    {"name": "搜狐视频接口", "value": "http://vip.jlsprh.com/index.php?url="},
    {"name": "乐视视频接口", "value": "http://jx.598110.com/?url="}];

  init() {
    let $vip = $('.btn_vip_normal');
    if (!$vip.length) {
      return
    }
    this.initEvents();
    $vip.text('免费观看');
    $vip.click();
  }

  initEvents() {
    let $vip = $('.btn_vip_normal');

    $vip.on('click', () => {
      if (this.flag) {
        this.showSwitchLine();
      } else {
        this.createPlayer();
      }
    });

    $('body').on('click', '#opts li', this.switchLine);
  }

  createPlayer() {
    this.flag = true;
    let $vip = $('.btn_vip_normal');
    try {
      $('.txp_video_container video').get(0).pause();
    } catch (e) {
      console.log(e);
    }

    let $player = $('#tenvideo_player');
    $player.html(`<iframe id="vip-player" width="100%" height="100" style="width: 100%;height: 100%;" frameborder="0" src="${this.lines[3]}${encodeURIComponent(window.location.href)}"></iframe>`);
    $vip.text('切换接口');
  }

  showSwitchLine() {

    let opts=this.lines.map((value)=>{
      return `<li value="${value.value}">${value.name}</li>`
    });
    let content = `<ul id="opts">${opts.join('')}</ul>`;

    layer.open({
      btn: '关闭',
      title: '切换接口',
      content: content
    });
  }

  switchLine() {
    let url = $(this).attr('value');
    $('#vip-player').attr('src', `${url}${encodeURIComponent(window.location.href)}`);
    layer.closeAll();
  }


}

new VideoParse().init();