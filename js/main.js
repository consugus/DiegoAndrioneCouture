$(document).ready(function(){
    console.log("se cargó correctamente jQuery");

    var windowHeight = $(window).height();
    console.log("Window Heigth: " + windowHeight);

    var windowWidth = $(window).width();
    console.log("Window Width: " + windowWidth);

    $(window).scroll(function () {

        var scrollTop = $(window).scrollTop();
        var barraHeight = $(".barra").innerHeight();

        // console.log(scrollTop);
        if(scrollTop > (windowHeight-60) ){
            $('#bar').addClass("fixed");
            $("body").css({"margin-top": barraHeight + "px"});
        } else{
            $(".bar").removeClass("fixed");
            $("body").css({"margin-top": "0px"});
        };
    });





});