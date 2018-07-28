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