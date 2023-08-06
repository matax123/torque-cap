new WOW().init()

window.onload = function () {
    console.log("Hello World!");
    $("#loading").fadeOut(1000);
    $("body").removeClass("preload");

    $("#wsp").click(function () {
        window.open("https://wa.me/56991353540");
    });
}