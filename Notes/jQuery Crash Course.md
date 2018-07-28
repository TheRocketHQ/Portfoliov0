# jQuery Crash Course



## Posting data to backend 

* DRY principle to commonly used functions through ajax methods

main.js

``` javascript
$(function () {
    var $orders = $('orders');
    var $name = $('#name');
    var $drink = $('#drink');

    function addOrder(order) {
        $orders.append('<li>name: ' + order.name + ', drink: ' + order.drink + '</li>');
    }

    $.ajax({
        type: 'GET',
        url: '/api/orders',
        success: function (orders) {
            $each(orders, function (i, order) {
                addOrder(order);
            });
        },
        error: function () {
            alert('error loading orders');
        }
    });

    $('#add-order').on('click', function () {
        //order to keep clean
        var order = {
            name: $name.val(),
            drink: $drink.val(),
        };

        $.ajax({
            type: 'POST',
            url: '/api/orders',
            data: order,
            //if successfull ads to the page
            success: function () {
                addOrder(newOrder);
            },
            error: function () {
                alert('error saving order')
            }
        })
    })
})
```

index.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>jQuery AJAX Tuturial</title>
</head>

<body>
    <h1>jQuery Ajax Tuturial</h1>
    <h2>Coffee orders</h2>
    <ul id="orders"></ul>
    <h4>Add a Coffee Order</h4>
    <p>name:
        <input type="text" id="name">
    </p>
    <p>drink:
        <input type="text" id="drink">
    </p>
    <button id="add-order">Add!</button>
    <script src="./main.js"></script>
</body>

</html>
```

## Delegating Events & Mustache.js Templating 

* Add a delete 
* Organize template with mustache.js

main.js

```javascript
$(function () {
    var $orders = $('orders');
    var $name = $('#name');
    var $drink = $('#drink');

    var orderTemplate = "" +
        "<li>" +
        "<p><strong>Name:</strong> {{name}}</p>" +
        "<p><strong>Drink:</strong> {{drink}}</p>" +
        "<button data-id='{{id}}' class='remove'> x </button>" +
        "</li>";

    function addOrder(order) {
        $orders.append(Mustache.render(orderTemplate, order));
    }

    $.ajax({
        type: 'GET',
        url: '/api/orders',
        success: function (orders) {
            $each(orders, function (i, order) {
                addOrder(order);
            });
        },
        error: function () {
            alert('error loading orders');
        }
    });

    $('#add-order').on('click', function () {
        //order to keep clean
        var order = {
            name: $name.val(),
            drink: $drink.val(),
        };

        $.ajax({
            type: 'POST',
            url: '/api/orders',
            data: order,
            //if successfull ads to the page
            success: function () {
                addOrder(newOrder);
            },
            error: function () {
                alert('error saving order')
            }
        });
    });
    //only run after success, replace remove to delegate on orders
    $orders.delegate('.remove', '.click', function () {

        var $li = $(this).closest('li');
        // var self = this;
        $.ajax({
            type: 'DELETE',
            url: '/api/' + $(this).attr('data-id'),
            //on success remove the element
            success: function () {
                //needs stored li, thats why we added an li var above the scope
                $(self);
                $li.fadeOut(300, function () {
                    $(this).remove();
                });
            }
        });
    });
});
```

index.html

``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>jQuery AJAX Tuturial</title>
</head>

<body>
    <h1>jQuery Ajax Tuturial</h1>
    <h2>Coffee orders</h2>
    <ul id="orders"></ul>
    <h4>Add a Coffee Order</h4>
    <p>name:
        <input type="text" id="name">
    </p>
    <p>drink:
        <input type="text" id="drink">
    </p>
    <button id="add-order">Add!</button>
    <script src="./main.js"></script>
</body>

</html>
```



## Edit modes & Better Mustache.js Templating

main.js

``` javascript

```



index.html

``` html

```



