const app = angular.module('TicTacToe', []);

app.controller('MainCtrl', function($scope) {

    let playerX = true;

    $scope.board = [undefined, undefined, undefined,
        undefined, undefined, undefined,
        undefined, undefined, undefined
    ];

    function calculateWinner(playerBoardIndexes, playerPiece) {
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
            if (playerBoardIndexes[a] === playerPiece &&
                playerBoardIndexes[b] === playerPiece && playerBoardIndexes[c] === playerPiece) {
                return true;
            };
        };
        return false;
    };

    function winner() {
        if (calculateWinner($scope.board, 'X')) { alert('player one') }
    };

    $scope.placePiece = function(clickedIndex) {
        if (playerX) {
            $scope.board[clickedIndex] = 'X';
            playerX = false;
        } else {
            $scope.board[clickedIndex] = 'O';
            playerX = true;
        };
    };

});
