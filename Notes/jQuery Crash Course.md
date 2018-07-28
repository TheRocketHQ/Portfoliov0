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

* Dom Delegation in structure through variable declaration with it's id with mustache.js

main.js

``` javascript
// PUT

// RESTful get post put

$(function () {
    var $orders = $('orders');
    var $name = $('#name');
    var $drink = $('#drink');

    var orderTemplate = ('#order-template').html();

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

    $orders.delegate('.editOrder', 'click', function () {
        // This way we don't have to go looking in the dom
        var $li = $(this).closest('li');
        $li.find('input.name').val($li.find('span.name').html());
        $li.find('input.drink').val($li.find('span.drink').html());
        $li.addClass('edit');
    });

    $orders.delegate('.cancelEdit', 'click', function () {
        $(this).closest('li').removeClass('edit');
    });

    $orders.delegate('.saveEdit', 'click', function () {
        var $li = $(this).closest('li');

        var order = {
            name: $li.find('input.name').val(),
            drink: $li.find('input.drink').val(),
        };

        $.ajax({
            type: 'PUT',
            url: '/api/orders' + $(li).attr('data-id'),
            data: order,
            success: function (newOrder) {
                $li.find('span.name').html(order.name);
                $li.find('span.drink').html(order.drink);
                $li.removeClass('edit');
            },
            error: function () {
                alert('error updating order');
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
    <template id="order-template">
        <li data-id="{{id}}">
            <p>
                <strong>Name: </strong>
                <span class="noedit name">{{name}}</span>
                <input type="text" class="edit name">
            </p>
            <p>
                <strong>Drink: </strong>
                <span class="noedit drink ">{{drink}}</span>
                <input type="text" class="edit drink">
            </p>
            <button data-id="{{id}}" class="remove"> x </button>
            <button class="editOrder noedit">Edit</button>
            <button class="saveOrder edit">Save</button>
            <button class="cancelOrder edit">Cancel</button>
        </li>
    </template>
    <h4>Add a Coffee Order</h4>
    <p>name:
        <input type="text" id="name">
    </p>
    <p>drink:
        <input type="text" id="drink">
    </p>
    <button id="add-order">Add!</button>
    <script src="./main.js"></script>
    <!-- missing script to jQuery -->
    <!-- Missing Script to Mustache.js -->
</body>

</html>
```



style.css

```css
body {
    padding: 50px;
}

a {
    color: #00b7ff;
}

ul {
    padding: 0;
}

ul li {
    list-style-type: none;
    background: #efefef;
    padding: 10px;
    margin-bottom: 10px;
}

ul li .edit {
    display: none;
}

ul li.edit .edit {
    display: initial;
}

ul li.edit .noedit {
    display: initial; 
}
```

