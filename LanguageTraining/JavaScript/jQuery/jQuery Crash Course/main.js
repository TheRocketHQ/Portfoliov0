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