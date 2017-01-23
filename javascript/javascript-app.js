let board = [];

let plays = [undefined, undefined, undefined,
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
    for ( let i = 0; i < lines.length; i++ ) {
        const [a, b, c] = lines[i];
        if ( playerBoardIndexes[a] === playerPiece &&
            playerBoardIndexes[b] === playerPiece && playerBoardIndexes[c] === playerPiece ) {
            return true;
        };
    };
    return false;
};

let nextplayerX = true;

function eventHandler() {
    if ( nextplayerX ) {
        board[this.id] = 'X';
        this.innerHTML = 'X';
        nextplayerX = false;
    } else {
        board[this.id] = 'O';
        this.innerHTML = 'O';
        nextplayerX = true;
    };
};

const squares = document.querySelectorAll( '.square' );

squares.forEach( square => square.addEventListener( 'click', eventHandler ));
