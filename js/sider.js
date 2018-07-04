(function loadsider() {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/sider.css"
    $("head").append(link);
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
})()
