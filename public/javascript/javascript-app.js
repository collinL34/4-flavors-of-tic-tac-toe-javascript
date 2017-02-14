let plays = [];

let board = [undefined, undefined, undefined,
    undefined, undefined, undefined,
    undefined, undefined, undefined
];

function calculateWinner(playerPiece) {
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
        if (board[a] === playerPiece &&
            board[b] === playerPiece && board[c] === playerPiece) {
            return true;
        };
    };
    return false;
};

let nextplayerX = true;

function eventHandler() {
    if (nextplayerX) {
        plays.push('X');
        board[this.id] = 'X';
        this.innerHTML = 'X';
        nextplayerX = false;

        if (calculateWinner('X')) {
            alert('player one wins!');
            location.reload();
        } else if (plays.length === 9) {
            alert('no winner');
            location.reload();
        };
    } else {
        plays.push('O');
        board[this.id] = 'O';
        this.innerHTML = 'O';
        nextplayerX = true;

        if (calculateWinner('O')) {
            alert('player one wins!');
            location.reload();
        } else if (plays.length === 9) {
            alert('no winner');
            location.reload();
        };
    };
};

const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('click', eventHandler));
