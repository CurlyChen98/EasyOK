let iconfont_src = "//at.alicdn.com/t/font_707735_7yv2zfewto2.js"

$(document).ready(function () {
    loadsider();
});

function loadsider() {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/sider.css"
    $("head").append(link);
    let script = document.createElement("script");
    script.src = iconfont_src;
    $("head").append(script);
    $.ajax({
        type: "post",
        url: "sider.html",
        // data: "data",
        // dataType: "dataType",
        success: function (response) {
            $("#sider").html(response);
        }
    }).then((result) => {
        $(".button_ico").click(function () {
            $("#sider").css({
                left: '0'
            });
            $(".button_ico").stop().slideUp();
        });
        $("#sider").mouseleave(function () {
            $("#sider").css({
                left: '-250px'
            });
            $(".button_ico").stop().slideDown();
        });
    })
}