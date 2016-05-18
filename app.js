$(document).ready(function() {

    $("#container").fadeIn(3000);

    $("p").on({
        mouseenter: function() {
            $(this).addClass("yellow-bg");
        },
        mouseleave: function() {
            $(this).removeClass("yellow-bg");
        }
    });

    $(document).on("click", "h2", function() {

        $("h2").animate({
            "margin-left": "20px",
            "opacity": "0.25",
        }, 1000);
        $(".speech").animate({
            "opacity": "0.25",
        }, 1000);
    });

    $(document).on("click", "#switcher-large", function() {
        $(".speech").removeClass("small-text").addClass("large-text");
    });

    $(document).on("click", "#switcher-small", function() {
        $(".speech").removeClass("large-text").addClass("small-text");
    });

    $(document).on("click", "#switcher-default", function() {
        $(".speech").removeClass("large-text small-text");
    });

});
