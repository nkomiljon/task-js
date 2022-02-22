
// CALC

function calc(str) {


    let roman = {
        'I': 1,
        'II': 2,
        'III': 3,
        'IV': 4,
        'V': 5,
    };

    let methods = {
         "-": (a, b) => a - b,
         "+": (a, b) => a + b,
         "*": (a, b) => a * b,
         "/": (a, b) => a / b
       };
   
   let split = str.split(' ');
       a = +split[0],
       op = split[1],
       b = +split[2]
       
    return methods[op](a, b);   
}
   
   
console.log(calc('19 / 19'));



function romanToArabic(romanNumber){
    romanNumber = romanNumber.toUpperCase();
    const romanNumList = ["CM","M","CD","D","XC","C","XL","L","IX","X","IV","V","I"];
    const corresp = [900,1000,400,500,90,100,40,50,9,10,4,5,1];
    let index =  0, num = 0;
    for(let rn in romanNumList){
      index = romanNumber.indexOf(romanNumList[rn]);
      while(index != -1){
        num += parseInt(corresp[rn]);
        romanNumber = romanNumber.replace(romanNumList[rn],"-");
        index = romanNumber.indexOf(romanNumList[rn]);
      }
    }
    return num;
  }

  let r = 'I';

  romanToArabic(r)
  

  function check(str) {
    if (/^[IVXLCDMZ]+/i.test(str)) {
       console.log(true);
    } else {
        console.log(false);
    }
}


check('II')

// const arg = 'i + i';
// const args = arg.toUpperCase();
// console.log(args);
// console.log(args === 'I + I');

// function res() {
//     return 2;
// }

// function calc(arg) {
//     const args = arg.toUpperCase();

//     if (args === 'I + I') {
//         let result = res().toString();
//         console.log(result);
//     }
//     if (args === '1 + 1') {
//         let result = res().toString();
//         console.log(result);
//     }
// }

// calc('1 + 1');



// function Calculator() {

//     let methods = {
//       "-": (a, b) => a - b,
//       "+": (a, b) => a + b,
//       "*": (a, b) => a * b,
//       "/": (a, b) => a / b
//     };
  
//     this.calculate = function(str) {
  
//       let split = str.split(' '),
//         a = +split[0],
//         op = split[1],
//         b = +split[2]
  
//       if (!methods[op] || isNaN(a) || isNaN(b)) {
//         return NaN;
//       }
//       console.log(methods[op](a, b));
//       return methods[op](a, b);
//     }
  
//     this.addMethod = function(name, func) {
//       this.methods[name] = func;
//     };
//   }
//   let powerCalc = new Calculator;
  //powerCalc.addMethod("*", (a, b) => a * b);
  //powerCalc.addMethod("/", (a, b) => a / b);
  //powerCalc.addMethod("**", (a, b) => a ** b);
  
  //let result = powerCalc.calculate("3 + 3");
  //console.log( result )