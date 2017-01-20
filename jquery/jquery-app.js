$(document).ready(function() {

    $('.replay').hide();

    $('.replay').on('click', function() {
        location.reload();
    });

    $('.replay').show();

    var board = [];

    var plays = [undefined, undefined, undefined,
        undefined, undefined, undefined,
        undefined, undefined, undefined
    ];

    // $(function() { $('.square').off('click') });
    // function getAllIndexes(arr, val) {
    //     var indexes = [];
    //     for (i = 0; i < arr.length; i++)
    //         if (arr[i] === val) {
    //             indexes.push(i);
    //         };
    //     return indexes;
    // };

    function calculateWinner(player_indexes, playerPiece) {
        var lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (var i = 0; i < lines.length; i++) {
            for (var j = 0; j < lines[i].length; j++) {
                let index = lines[i][j];
                console.log(index);
                if (player_indexes[lines[i][j]] === playerPiece &&
                    player_indexes[lines[i][j + 1]] === playerPiece && player_indexes[lines[i][j + 2]] === playerPiece) {
                    return true;
                };
            };
        };
        return false;
    };


    $('.square').on('click', function(event) {
        var square = event.target;
        var $thisIndex = $(this).attr('square_index');

        if (board[board.length - 1] !== 'X' || board[board.length - 1] === undefined) {
            square.append('X');
            board.push('X');
            plays[$thisIndex] = 'X';

            if (calculateWinner(plays, 'X')) {
                alert('player one wins!');
                location.reload();
            } else if (board.length === 9) {
                alert('no winner');
                location.reload();
            };

        } else {
            square.append('O');
            board.push('O');
            plays[$thisIndex] = 'O';

            if (calculateWinner(plays, 'O')) {
                alert('player two wins!');
                location.reload();
            } else if (board.length === 9) {
                alert('no winner');
                location.reload();
            };
        };
        $(this).off('click');
    });

});
