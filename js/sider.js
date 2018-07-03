$(document).ready(function () {
    loadsider();
});

function loadsider() {
    let bgnumran = 3;
    bgnumran = parseInt(Math.random() * bgnumran) + 1;
    let url = "url(img/bg/blurry/" + bgnumran + ".jpg)";
    $("body").css("background", url);
    $("body").css("background-size", "cover");
    $.ajax({
        type: "post",
        url: "sider.html",
        // data: "data",
        // dataType: "dataType",
        success: function (response) {
            $("body").html(response);
        }
    }).then((result) => {
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "css/sider.css"
        $("head").append(link);
    }).catch((err) => {

    });
}