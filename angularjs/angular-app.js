const app = angular.module('TicTacToe', []);

app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.board = [undefined,undefined,undefined,
                    undefined, undefined, undefined,
                    undefined, undefined, undefined
    ],
    $scope.click = function() {
    };
}])