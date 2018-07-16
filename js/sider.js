let iconfont_src = "//at.alicdn.com/t/font_707735_zkldynd6m8.js"

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
        
    })
}