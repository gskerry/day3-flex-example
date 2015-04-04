app.directive('noLoitering', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            var timeout = null;

            element.on('mouseenter', function () {
                timeout = setTimeout(function () {
                    console.log('Hey kids get off my lawn!');
                }, 3000);
            });

            element.on('mouseleave', function () {
                clearTimeout(timeout);
            });

        }
    };
});


app.directive('newTab', function () {

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.attr('target', '_blank');
        }
    };

});