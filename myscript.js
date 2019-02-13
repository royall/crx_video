(function ($) {
  let flag = false;
  // let url = 'https://www.1717yun.com/jx/ty.php?url=';
  let url = 'http://jqaaa.com/jq3/?url=';
  let $vip = $('.mark_vip_text');
  if (!$vip.length) {
    return
  }
  $vip.text('免费观看');
  $vip.on('click', () => {
    if (flag) {
      layer.open({
        btn: '关闭',
        title: '切换接口',
        content: opts
      });

    } else {
      flag = true;
      $('.txp_video_container video').get(0).pause();
      let $player = $('#tenvideo_player');
      $player.html(`<iframe id="vip-iframe" width="100%" height="100" style="width: 100%;height: 100%;" frameborder="0" src="${url}${encodeURIComponent(window.location.href)}"></iframe>`);
      $vip.text('切换接口');
    }
  });

  $vip.click();
  $('.tvip_layer').hide();

  let opts = `<ul id="opts">
            <li value="http://www.ibb6.com/jx/?url=">万能接口1</li>
			      <li value="http://jqaaa.com/jx.php?url=">万能接口2</li>	
            <li value="http://jiexi.071811.cc/jx2.php?url=">万能接口3</li>
            <li value="http://jqaaa.com/jq3/?url=">万能接口4</li>
            <li value="http://yun.baiyug.cn/vip/index.php?url=">万能接口5</li>
            <li value="https://jiexi.071811.cc/jx2.php?url=">万能接口6</li>
			      <li value="https://www.myxin.top/jx/api/?url=">腾讯视频接口1</li>	
			      <li value="https://vip.hackmg.com/jx/index.php?url=">爱奇艺超清接口1</li>
            <li value="http://api.baiyug.cn/vip/index.php?url=">爱奇艺超清接口2</li>
            <li value="http://jiexi.92fz.cn/player/vip.php?url=">爱奇艺超清接口3</li>
            <li value="http://jx.ovov.cc/?url=">芒果TV超清接口</li>
            <li value="http://jx.618ge.com/?url=">芒果TV手机接口</li>
            <li value="http://vip.jlsprh.com/?url=">优酷超清接口</li>
			      <li value="http://vip.jlsprh.com/index.php?url=">搜狐视频接口</li>
            <li value="http://jx.598110.com/?url=">乐视视频接口</li>
        </ul>`;

  $('body').on('click', '#opts li', function () {
    let url = $(this).attr('value');
    $('#vip-iframe').attr('src', `${url}${encodeURIComponent(window.location.href)}`);
    layer.closeAll();
  });


})(window.jQuery);