/*

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

/*

generateRange(2, 10, 2); //  [2, 4, 6, 8,  10];
generateRange(1, 10, 3); //  [1, 4, 7, 10, 13];
generateRange(1, 10, 4); //  [1, 5, 9, 13, 17];

*/

function toCamelCase(str) {

    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] == '-') {
    //         //txt.push(str[i + 1].toUpperCase());
    //         k.push(i);
    //     } else {
    //         j.push(str[i]);
    //     }
    // }

//    let res = j.reduce((acc, item, i) => {
//        k.filter((num) => {
//            if (num == i) {
//                acc.push(item);
//            }
//        })

//        return acc;
//     }, []);

//     console.log(res);
//     txt = j.join('');

    let res;
    let k = [];
    let j = [];

    for (let i = 0; i < str.length; i++) {
            if (str[i] == '-') {
                k.push(i);
            } else {
                j.push(str[i]);
            }
    }

    console.log(k);
    console.log(j);

    let txt = j.join('');
    console.log(txt);
    
    for (let i = 0; i < k.length; i++) {
        res = txt.charAt(k[i]).toUpperCase()
        console.log(res);
    }

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === '-') {
    //         k.push(i);
    //     } else {
    //         j.push(arr[i]);
    //     }
    // }

    // length
    console.log(str.length);
}
  
toCamelCase('the-stealth-warrior'); // theStealthWarrior