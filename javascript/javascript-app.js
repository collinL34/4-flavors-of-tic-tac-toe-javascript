document.getElementById('.replay');

// $(document).ready(function() {

//     // $(function() { $('.square').off('click') });

//     $('.replay').hide();
//     var plays = [];

//     $('.ready').on('click', function(event) {
//         $(this).hide();
//         $('.replay').show();
//         alert('Great lets play!');
//     });

//     $('.square').on('click', function(event) {
//         // $(this).css('border-color', 'red');
//         var square = event.target;
//         if (plays[plays.length - 1] !== 'X' || plays[plays.length - 1] === undefined) {
//             square.append('X');
//             plays.push('X');
//         } else {
//             square.append('O');
//             plays.push('O');
//         };
//         $(this).off('click');
//     });

//     $('.replay').on('click', function() {
//         location.reload();
//     });

// });
