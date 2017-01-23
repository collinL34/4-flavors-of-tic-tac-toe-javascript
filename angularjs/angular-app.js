const app = angular.module('TicTacToe', ['ngRoute']);

app.controller('MainCtrl', function($scope) {

    let playerX = true;

    $scope.board = [undefined, undefined, undefined,
        undefined, undefined, undefined,
        undefined, undefined, undefined
    ];

    $scope.calculateWinner = function(playerPiece) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if ($scope.board[a] === playerPiece &&
                $scope.board[b] === playerPiece && $scope.board[c] === playerPiece) {
                return true;
            };
        };
        return false;
    };

    $scope.placePiece = function(clickedIndex) {
        if (playerX) {
            $scope.board[clickedIndex] = 'X';
            playerX = false;

            if ($scope.calculateWinner('X')) {
                alert('player one wins!');
            } else if ($scope.board.length === 9 && !$scope.board.includes(undefined)) {
                alert('no winner, try agian');
            }
        } else {
            $scope.board[clickedIndex] = 'O';
            playerX = true;

            if ($scope.calculateWinner('O')) {
                alert('player two wins!');
            } else if ($scope.board.length === 9 && !$scope.board.includes(undefined)) {
                alert('no winner, try agian');
            }
        };
    };
});
