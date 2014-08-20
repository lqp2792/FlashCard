/**
 * Created by Phu Le on 8/20/14.
 */
var cardApp = angular.module ('cardApp', ['ngAnimate']);
cardApp.controller ('mainController', function ($scope) {
    $scope.items = ['phu', 'quang', 'le'];
});
cardApp.directive ("flip", function () {
    return {
        restrict: "A",
        scope   : true,
        link    : function (scope, element) {
            var $panels = element.css ({ position: 'relative'}).children ().addClass ("flip-panel");
            var frontPanel = $panels.eq (0);
            var backPanel = $panels.eq (1);

            scope.showFrontPanel = function () {
                frontPanel.removeClass ("flip-hide-front-panel");
                backPanel.addClass ("flip-hide-back-panel");
            };

            scope.showBackPanel = function () {
                backPanel.removeClass ("flip-hide-back-panel");
                frontPanel.addClass ("flip-hide-front-panel");
            };

            scope.showFrontPanel ();
        }
    }
});