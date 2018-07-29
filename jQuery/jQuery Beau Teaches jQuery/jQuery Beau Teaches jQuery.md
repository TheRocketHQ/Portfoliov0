# jQuery Beau Teaches jQuery	

Note to self generate contents of md

***

## Getting Started with jQuery 

main.js

``` javascript
// Load when document is ready
$(document).ready(function() {
    // Selects button class and run on click 
    $("button").click(function(){
        // Select the p Tags
        $("p").hide();
        // Another Example would be replacing it with the id
        $("#cereal").hide();
        // Another Example would be replacing it with the class
        $(".cereal").hide();
    });

    // Anexing to parent element
    $("button").click(function(){
        $("button").hide();
    });

});
```

index.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>jQuery - Beau Teaches jQuery Notes</title>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
</head>

<body>
    <h3>Getting Started with jQuery - Beau Teaches JavaScript</h3>
    <p id="cereal">This paragraph has the
        <b>class</b>'cereal'.</p>
    <p class="unicycle">This paragraph has the
        <b>class</b>'unicycle'.</p>
    <div class="unicycle">This div has the
        <b>class</b>'unicycle'.</div>
    <button>Click Me!! :D</button>
</body>

</html>
```

***



## jQuery Events

replacing document.ready with events

index.html

``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>jQuery - Beau Teaches jQuery Notes</title>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
</head>

<body>
    <p>Just your Normal one-sentence Paragraph</p>
    <input type="text">
</body>

</html>
```



main.js

``` javascript
 // jQuery Events
 // NOTE CHECK JQ SNIPPETS
 // Putting the function inside the jquery

 //  Multiple Events with on as long as it's separated with a space character
 $(function () {
     //one runs only once
     $("p").one({
         "click": function () {
             console.log("clicked!");
         },
         "mouseover": function () {
             console.log("hovered!");
         },
     });

     //  Turning event handler off
     $("p").off("click");  

     $("input").change(function () {
         console.log("you did something");

     });
 });

 // dblclick, mouseenter,mouseleave, mousedown, mouseup, hover
 // form event: focus, blur, change
```



style.css

``` css

```

