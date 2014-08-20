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
            var frontPanel = $panels.eq (0).addClass("front");
            var backPanel = $panels.eq (1).addClass("back");

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

cardApp.controller ('mainController', function ($scope) {
    $scope.word = {
        kanji   : '日本語',
        hiragana: 'にほんご',
        imi     : ['日本の国語。万葉仮名で書かれた古代日本語からの文献をもつ。敬語、男女の言葉の違いの発達などの複雑な面に比して、音体系の変化は比較的少なく保守的である。アルタイ諸語との同系説、南方の諸言語との同系説があるが、結論は得られていない。']
    }
});