const app = angular.module('TicTacToe', []);

app.controller('MainCtrl', function($scope) {

    let playerX = true;

    $scope.board = [undefined, undefined, undefined,
        undefined, undefined, undefined,
        undefined, undefined, undefined
    ];
    
    $scope.placePiece = function(clickedIndex) {

      if ( playerX ) {
        $scope.board[clickedIndex] = 'X';
        playerX = false;
        console.log(playerX);
      } else {
        $scope.board[clickedIndex] = 'O';
        playerX = true;
      };

    };

});