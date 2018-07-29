// Stopping an animation midway
$("h1").fadeIn(2000, function () {
    $(this).addClass("blue")
})
//stop the animation before completion
$("img").on("click", function () {
    $("h1").stop;
});