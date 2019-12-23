$(document).ready(function() {

    var elementsCount = $("#main-carousel-block>div>ul").find('li').length;
    var positionNegative = "-"+elementsCount*300/2+"px";
    var flag = false;

/// Left arrow/////

    $(document).on("click", "#left-arrow", function() {

        if ($("#block-images-carousel").css("left") == 0+"px" ){
            return false
        }else{
            if (flag){
                return false;
            }
            flag=true;
            $("#block-images-carousel").animate({left: '+=300px'}, 500,function () {flag = false});
        }
    });

/// Right arrow/////

    $(document).on("click", "#right-arrow", function() {

        if (positionNegative == $("#block-images-carousel").css("left")){
            $("#block-images-carousel").animate({left: '0px'}, 700);
        }else{
            if (flag){
                return false;
            }
            flag=true;
            $("#block-images-carousel").animate({left: '+=-300px'}, 500,function () {flag = false});
        }
    });

/// Full-Size img/////

    $(document).on("click", "img , .zoom-img", function() {
        var div = document.createElement("div");
        var closeIcon = document.createElement("div");
        $(closeIcon).addClass("close-icon");
        $(div).addClass("full-size-img");
        var $bgi = $(this).attr("src") || $(this).next("img").attr("src"); //click on image or zoom icon
        $(div).css("background", "url("+$bgi+")");
        $("body").prepend(div);
        $(div).prepend(closeIcon);
        $("#black-layer-background").css("display", "block")
    });

/// Close full size image/////

    $(document).on("click", ".close-icon", function() {
        $(".full-size-img").animate({bottom : 0,opacity : 0.5},200);
        setTimeout(function(){$(".full-size-img").remove()},200);
        $("#black-layer-background").animate({opacity : 0.5},200);
        setTimeout(function(){$("#black-layer-background").css("display", "none")},200);
    });

});