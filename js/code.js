
function generateRange(arg1, arg2, arg3) {
    const array = [];
    let mult = 0;
    let min = 0;
    let i = arg1 == 1 ? arg1 : 1;
    while (i <= arg2 / 2) {
        if (arg3 == 2) {
            mult = ( i * arg3 );
            array.push( mult );  
            i++; 
        } else {
            mult = ( i * arg3 );
            min =  ( mult - (arg3 - 1) );
            array.push( min ); 
            i++;
        } 
    }

   console.log(array);
}


// 1 * 2 = 2  -  2 = 0
// 2 * 2 = 4  -  2 = 2
// 3 * 2 = 6  -  2 = 4
// 4 * 2 = 8  -  2 = 6
// 5 * 2 = 10 -  2 = 8

/* -------------------- */

// 1 * 3 = 3  -  2 = 1
// 2 * 3 = 6  -  2 = 4
// 3 * 3 = 9  -  2 = 7
// 4 * 3 = 12 -  2 = 10
// 5 * 3 = 15 -  2 = 12

/* -------------------- */
// 1 * 4 = 4  -  3 = 1
// 2 * 4 = 8  -  3 = 5
// 3 * 4 = 12 -  3 = 9
// 4 * 4 = 16 -  3 = 13
// 5 * 4 = 20 -  3 = 17

generateRange(2, 10, 2); //  [2, 4, 6, 8,  10];
generateRange(1, 10, 3); //  [1, 4, 7, 10, 13];
generateRange(1, 10, 4); //  [1, 5, 9, 13, 17];



// function toCamelCase(str){

//     let i = 0;
//     while (i < str.length) {
//         console.log(str[i]);
//         i++;
//     }

//     console.log(txt);
// }
  
//   toCamelCase('the-stealth-warrior'); // theStealthWarrior