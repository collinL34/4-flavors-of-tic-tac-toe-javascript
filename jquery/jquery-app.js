$( document ).ready( function() {

    $( '.replay' ).hide();

    $( '.replay' ).on( 'click', function() {
        location.reload();
    });

    var board = [];

    var plays = [undefined, undefined, undefined,
                undefined, undefined, undefined,
                undefined, undefined, undefined
    ];

    // $(function() { $('.square').off('click') });

    $( '.ready' ).on( 'click', function( event ) {
        $( this ).hide();
        $( '.replay' ).show();
        alert( 'Great lets play!' );
    });

    function getAllIndexes( arr, val ) {
        var indexes = [];
        for ( i = 0; i < arr.length; i++ )
            if ( arr[i] === val ) {
                indexes.push(i);
            };
        return indexes;
    };

    function calculateWinner( player_indexes ) {
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
        for ( var i = 0; i < lines.length; i++ ) {
            for(var j = 0; j < player_indexes.length; j++ ) {
                if ( player_indexes[j] === lines[i][0] && 
                     player_indexes[j + 1] === lines[i][1] && 
                     player_indexes[j + 2] === lines[i][2]) {
                    return true;
                };
            };
        };
        return false;
    };


    $( '.square' ).on( 'click', function( event ) {
        var square = event.target;
        var $thisIndex = $( this ).attr( 'square_index' );

        if ( board[board.length - 1] !== 'X' || board[board.length - 1] === undefined ) {
            square.append( 'X' );
            board.push('X');
            plays[$thisIndex] = 'X';

            if ( calculateWinner( getAllIndexes(plays, 'X')) ) {
                alert('player one wins!');
                location.reload();
            } else if ( board.length === 9 ) {
                alert('no winner');
                location.reload();
            };

        } else {
            square.append( 'O' );
            board.push( 'O' );
            plays[$thisIndex] = 'O';

             if ( calculateWinner( getAllIndexes(plays, 'O')) ) {
                alert( 'player two wins!' );
                location.reload();
            } else if ( board.length === 9 ) {
                alert('no winner');
                location.reload();
            };
        };
        $( this ).off( 'click' );
    });

});
