$(document).ready(function() {

    $('.replay').hide();

    $('.replay').on('click', function() {
        location.reload();
    });

    $('.replay').show();

    let board = [];

    let plays = [undefined, undefined, undefined,
        undefined, undefined, undefined,
        undefined, undefined, undefined
    ];

    // $(function() { $('.square').off('click') });
<<<<<<< HEAD

=======
>>>>>>> 7a31ae2d3bc2fff416f91095c05d8f167710856b

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

    $('.square').on('click', function(event) {
        let square = event.target;
        let $thisIndex = $(this).attr('square_index');

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
