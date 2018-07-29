$("button").click(function () {
    // add class, alternative to having css in the js
    $('h1').addClass("red");
    $("p").removeClass("big");
    // adds to those who don't, remove from those who have
    $("p").toggleClass("big");
});