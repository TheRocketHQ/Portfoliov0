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