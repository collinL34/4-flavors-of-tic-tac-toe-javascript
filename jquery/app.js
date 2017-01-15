$( document ).ready( function() {

    function getAllIndexes( arr, val ) {
        var indexes = [],
            i;
        for ( i = 0; i < arr.length; i++ )
            if ( arr[i] === val )
                indexes.push(i);
        return indexes;
    };
    // $(function() { $('.square').off('click') });
    var plays = [undefined, undefined, undefined,
            undefined, undefined, undefined,
            undefined, undefined, undefined
    ];

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
        for ( let i = 0; i < lines.length; i++ ) {
            if ( player_indexes === lines[i] ) {
                return true;
            };
        };
        return false;
    };


    $( '.replay' ).hide();

    $( '.ready' ).on( 'click', function( event ) {
        $( this ).hide();
        $( '.replay' ).show();
        alert( 'Great lets play!' );
    });
    var xTurn = true;

    $( '.square' ).on( 'click', function( event ) {
        // $(this).css('border-color', 'red');
        console.log();
        var square = event.target;
        var $thisIndex = $( this ).attr( 'square_index' );

        if ( xTurn !== true ) {
            square.append( 'X' );
            plays[$thisIndex] = 'X';
            xTurn = false;
            console.log( calculateWinner( getAllIndexes( plays,'X' ) ), getAllIndexes( plays,'X' ));
        } else {
            square.append( 'O' );
            plays.push( 'O' );
            xTurn = false;
            oTurn = true;
            console.log( calculateWinner( getAllIndexes( plays, 'O' ) ));
        };
        $( this ).off( 'click' );
    });

    $( '.replay' ).on( 'click', function() {
        location.reload();
    });

});
