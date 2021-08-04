try {
    $("<link>").attr({href: "/live2d/waifu.css?v=1.4.2", rel: "stylesheet", type: "text/css"}).appendTo('head');
    $("<link>").attr({href: "https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css", rel: "stylesheet", type: "text/css"}).appendTo('head');
    $('body').append('<div id="waifu-toggle" class=""><span>看板娘</span></div><div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fa fa-lg fa-home"></span> <span class="fa fa-lg fa-paper-plane"></span><span class="fa fa-lg fa-comment"></span> <span class="fa fa-lg fa-user-circle"></span> <span class="fa fa-lg fa-street-view"></span> <span class="fa fa-lg fa-camera-retro"></span> <span class="fa fa-lg fa-info-circle"></span> <span class="fa fa-lg fa-times"></span></div></div>');
    $.ajax({url: "/live2d/waifu-tips.js?v=1.4.2", dataType:"script", cache: true, success: function() {
        $.ajax({url: "/live2d/live2d.min.js?v=1.0.5", dataType:"script", cache: true, success: function() {
                $.ajax({url: "/live2d/jquery-ui.min.js", dataType:"script", cache: true, success: function() {
                    
                    live2d_settings['hitokotoAPI'] = "hitokoto.cn";  // 一言 API 可选 'lwl12.com', 'hitokoto.cn', 'jinrishici.com'(古诗词)
                    live2d_settings['modelId'] = 1;                  // 默认模型 ID
                    live2d_settings['modelTexturesId'] = 1;          // 默认材质（服装） ID
                    live2d_settings['modelStorage'] = false;         // 不储存模型 ID
                    /* 在 initModel 前添加 */
                    initModel("/live2d/waifu-tips.json");
            }});
        }});
    }});
} catch(err) { console.error("[错误] 请检查JQuery是否引入") }




