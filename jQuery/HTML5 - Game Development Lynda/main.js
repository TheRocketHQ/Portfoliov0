var queue = new createjs.loadQueue();

function init() {

    queue.on("progress", handleFileProgress);
    queue.on("fileload", handleFileLoad);
    queue.on("complete", handleComplete);
    queue.loadManifest([{
            id: "myImage",
            src: "./assets1.jpg"
        },
        {
            id: "myImage2",
            src: "./assets2.jpg"
        },
        {
            id: "myImage3",
            src: "./assets3.jpg"
        },
    ]);

    function handleFileProgress(e) {
        console.log("Progress: " + queue.progress * 100 + "%");
    }

    function handleFileProgress(e) {
        var image = queue.getResult(e.item.id);
        document.body.appendChild(image);
    }

    function handleComplete(e) {
        console.log("Loading Completed");
    }

    // var stage1 = new createjs.Stage("demoCanvas1");
    // var circle = new createjs.Shape();

    // circle.graphics.beginFill("Crimson").drawCircle(0, 0, 50);
    // circle.x = 100;
    // circle.y = 100;
    // stage1.addChild(circle);

    // List of things added to our circle, in this case animations like loop, x movement, y movement, and transperency
    // createjs.Tween.get(circle, {
    //         loop: true
    //     })
    //     .to({
    //         x: 400
    //     }, 1000, createjs.Ease.getPowInOut(4))
    //     .to({ 
    //         alpha: 0,
    //         y: 75
    //     }, 500, createjs.Ease.getPowInOut(2))
    //     .to({
    //         alpha: 0,
    //         y: 125
    //     }, 100)
    //     .to({
    //         alpha: 1,
    //         y: 100
    //     }, 500, createjs.Ease.getPowInOut(2))
    //     .to({
    //         x: 100
    //     }, 800, createjs.Ease.getPowInOut(2));
    // createjs.Ticker.setFPS(60);
    // createjs.Ticker.addEventListener("tick", stage1);

    // // createjs.Sound.alternateExtensions = ["mp3"];
    // function loadSound() {
    //     createjs.Sound.registerSound("assets/hit.ogg", "hit");
    // }

    // function playSound() {
    //     createjs.Sound.play("hit");
    // }


}