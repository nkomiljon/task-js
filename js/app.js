


// function calc(arg) {
//      let str = arg.toUpperCase();
//      let split = str.split(' ');




//      // if (split.length === 3) {
          


//      // } else {
//      //    console.log('Error Length');
//      // }
// }

// calc('i + 4');


// const stringValidate = string => {
//      let pattern  = /[^IVX1-9+*\/-\s]/g
//      if ([...string.matchAll(pattern)].length >= 1) {
//           console.log('Error');
//      }

//      return true
// }


// const calc = string => {
//      const isValid = stringValidate(string)
//      const oertation = string.split()

//      return isValid
// }

// console.log(calc());



// function calculator(str) {
//      //Convert
//      let a,
//        b,
//        sum,
//        k,
//        romeN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', ''],
//        operators = ['+', '-', '*', '/'],
//        j = 0;
   
//      str = str.split(' ');
   
//      // Проверяем на ошибки
//      if (str.length == 1) throw new Error();
//      if (str.length > 3) throw new Error();
   
//      //Определяем опрератор
//      operators.map((num) => {
//        if (num == str[1]) operators = num;
//      });
   
//      b = str[str.length - 1];
//      a = str[0];
   
//      // Проверяем на похожие Системы счисления
//      if (
//        (romeN.includes(a) && !romeN.includes(b)) 
//        (!romeN.includes(a) && romeN.includes(b))
//      ) {
//        throw new Error();
//      }
   
//      // Конвертируем Римские числа в Латинскую систему счисления
//      romeN.map((num, i) => {
//        if (a == num) {
//          a = i + 1;
//          j++;
//        }
   
//        if (b == num) {
//          b = i + 1;
//          j++;
//        }
//      });
   
//      a = Number(a);
//      b = Number(b);
   
//      // Если а и б не число и не больше 10
//      if (!a && !b) throw new Error();
//      if (a > 10 || b > 10) throw new Error();
   
//      // Производим арифметичекую операцию
//      switch (operators) {
//        case '+':
//          sum = a + b;
//          break;
   
//        case '-':
//          sum = a - b;
//          break;
   
//        case '*':
//          sum = a * b;
//          break;
   
//        case '/':
//          sum = Math.floor(a / b);
//          break;
//      }
   
//      // Проверяем оператор на налачие данных
//      if (sum == undefined) throw new Error();
//      sum = sum.toString();
   
//      // если j > 1 то переводит число в Римскую систему счисления
//      if (j > 1) {
//        if (sum <= 0) {
//          return '';
//        }
//        if (sum <= 10) {
//          sum = romeN[sum - 1];
//        }
//        if (sum > 10 && sum < 40) {
//          sum = sum.split('');
   
//          k = 'X'.repeat(sum[0]);
   
//          if (sum[sum.length - 1] == 0) {
//            sum = '';
//            sum = k;
//          } else {
//            sum = sum[sum.length - 1];
   
//            sum = k + romeN[sum - 1];
//          }
//        }
//        if (sum >= 40 && sum < 50) {
//          sum = sum.split('');
//          k = 'XL';
   
//          if (sum[sum.length - 1] == 0) {
//            sum = '';
//            sum = k;
//          } else {
//            sum = sum[sum.length - 1];
   
//            sum = k + romeN[sum - 1];
//          }
//        }
//        if (sum >= 50 && sum < 90) {
//          sum = sum.split('');
//          k = 'L' + 'X'.repeat(sum[0] - 5);
   
//          if (sum[sum.length - 1] == 0) {
//            sum = '';
//            sum = k;
//          } else {
//            sum = sum[sum.length - 1];
   
//            sum = k + romeN[sum - 1];
//          }
//        }
//        if (sum >= 90 && sum <= 100) {
//          sum = sum.split('');
//          k = 'XC';
//          if (sum.length > 2) sum = 'C';
//          else if (sum[sum.length - 1] == 0) {
//            sum = '';
//            sum = k;
//          } else {
//            sum = sum[sum.length - 1];
   
//            sum = k + romeN[sum - 1];
//          }
//        }
   
//        return sum;
//      } // Если j < 0 то Латинское система счисления
//      else {
//        return sum;
//      }
//    }

//    calculator('1 + 1')


   /// -------------------- ///

//    function calculator(str) {
//      //Convert
//      let a,
//        b,
//        sum,
//        k,
//        romeN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
//        operators = ['+', '-', '*', '/'],
//        j = 0;
   
//      str = str.split(' ');
   
//      // Проверяем на ошибки
//      if (str.length == 1) throw new Error();
//      if (str.length > 3) throw new Error();
   
//      //Определяем опрератор
//      operators.map((num) => {
//        if (num == str[1]) operators = num;
//      });
   
//      b = str[str.length - 1];
//      a = str[0];
   
//      // Проверяем на похожие Системы счисления
//      if ((romeN.includes(a) && !romeN.includes(b))) {
//        throw new Error();
//      }
   
//      // Конвертируем Римские числа в Латинскую систему счисления
//      romeN.map((num, i) => {
//        if (a == num) {
//          a = i + 1;
//          j++;
//        }
   
//        if (b == num) {
//          b = i + 1;
//          j++;
//        }
//      });
   
//      a = Number(a);
//      b = Number(b);
   
//      // Если а и б не число и не больше 10
//      if (!a || !b) throw new Error();
//      if (a > 10 || b > 10) throw new Error();
   
//      // Производим арифметичекую операцию
//      switch (operators) {
//        case '+':
//          sum = a + b;
//          break;
   
//        case '-':
//          sum = a - b;
//          break;
   
//        case '*':
//          sum = a * b;
//          break;
   
//        case '/':
//          sum = Math.floor(a / b);
//          break;
//      }
   
//      // Проверяем оператор на налачие данных
//      if (sum == undefined) throw new Error();
//      sum = sum.toString();
     
//      // если j > 1 то переводит число в Римскую систему счисления
//      if (j > 1) {
//        if (sum <= 0) {
//          return '';
//        }
//        if (sum <= 10) {
//          sum = romeN[sum - 1];
//        }
//        if (sum > 10 && sum < 40) {
//          sum = sum.split('');
   
//          k = 'X'.repeat(sum[0]);
   
//          if (sum[sum.length - 1] == 0) {
//            sum = '';
//            sum = k;
//          } else {
//            sum = sum[sum.length - 1];
   
//            sum = k + romeN[sum - 1];
//          }
//        }
//        if (sum >= 40 && sum < 50) {
//          sum = sum.split('');
//          k = 'XL';
   
//          if (sum[sum.length - 1] == 0) {
//            sum = '';
//            sum = k;
//          } else {
//            sum = sum[sum.length - 1];
   
//            sum = k + romeN[sum - 1];
//          }
//        }
//        if (sum >= 50 && sum < 90) {
//          sum = sum.split('');
//          k = 'L' + 'X'.repeat(sum[0] - 5);
   
//          if (sum[sum.length - 1] == 0) {
//            sum = '';
//            sum = k;
//          } else {
//            sum = sum[sum.length - 1];
   
//            sum = k + romeN[sum - 1];
//          }
//        }
//        if (sum >= 90 && sum <= 100) {
//          sum = sum.split('');
//          k = 'XC';
//          if (sum.length > 2) sum = 'C';
//          else if (sum[sum.length - 1] == 0) {
//            sum = '';
//            sum = k;
//          } else {
//            sum = sum[sum.length - 1];
   
//            sum = k + romeN[sum - 1];
//          }
//        }
   
//        return sum;
//      } 
//      // Если j < 0 то Латинское система счисления
//      else {
//        return sum;
//      }
//    }
   
// console.log(calculator('1 + V'));


// -------------- CALC ---------------- //

function calculator(str) { 
    //Convert 
    let a, 
      b, 
      sum, 
      k, 
      romeN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', ''], 
      operators = ['+', '-', '*', '/'], 
      j = 0; 
   
    str = str.split(' '); 
   
    // Проверяем на ошибки 
    if (str.length == 1) throw new Error(); 
    if (str.length > 3) throw new Error(); 
   
    ///console.log(str);
    //Определяем опрератор 
    operators.map((num) => { 
      if (num == str[1]) operators = num; 
      //console.log(operators);
    }); 
   
    b = str[str.length - 1]; 
    a = str[0]; 
   
     //console.log(b);
     //console.log(a);

    // Проверяем на похожие Системы счисления 
    if ( ( romeN.includes(a) && !romeN.includes(b) ) || ( !romeN.includes(a) && romeN.includes(b) )) { 
      throw new Error(); 
    } 
   
    // Конвертируем Римские числа в Латинскую систему счисления 
    romeN.map((num, i) => { 
      if (a == num) { 
        a = i + 1; 
        j++; 
      } 
   
      if (b == num) { 
        b = i + 1; 
        j++; 
      } 
    }); 
   
    a = Number(a); 
    b = Number(b);
    
    // console.log(a);
    // console.log(b);
   
    // Если а и б не число и не больше 10 
    if (!a || !b) throw new Error(); 
    if (a > 10 || b > 10) throw new Error(); 
   
    // Производим арифметичекую операцию 
    switch (operators) { 
      case '+': 
        sum = a + b; 
        break; 
   
      case '-': 
        sum = a - b; 
        break; 
   
      case '*': 
        sum = a * b; 
        break; 
   
      case '/': 
        sum = Math.floor(a / b); 
        break; 
    } 
   
    // Проверяем оператор на налачие данных 
    if (sum == undefined) throw new Error(); 
    sum = sum.toString(); 
   
    // если j > 1 то переводит число в Римскую систему счисления 
    if (j > 1) { 
      if (sum <= 0) { 
        return ''; 
      } 
      if (sum <= 10) { 
        sum = romeN[sum - 1]; 
      } 
      if (sum > 10 && sum < 40) { 
        sum = sum.split(''); 
   
        k = 'X'.repeat(sum[0]); 
   
        if (sum[sum.length - 1] == 0) { 
          sum = ''; 
          sum = k; 
        } else { 
          sum = sum[sum.length - 1]; 
   
          sum = k + romeN[sum - 1]; 
        } 
      } 
      if (sum >= 40 && sum < 50) { 
        sum = sum.split(''); 
        k = 'XL'; 
   
        if (sum[sum.length - 1] == 0) { 
          sum = ''; 
          sum = k; 
        } else { 
          sum = sum[sum.length - 1]; 
   
          sum = k + romeN[sum - 1]; 
        } 
      } 
      if (sum >= 50 && sum < 90) { 
        sum = sum.split(''); 
        k = 'L' + 'X'.repeat(sum[0] - 5); 
   
        if (sum[sum.length - 1] == 0) { 
          sum = ''; 
          sum = k; 
        } else { 
          sum = sum[sum.length - 1]; 
   
          sum = k + romeN[sum - 1]; 
        } 
      } 
      if (sum >= 90 && sum <= 100) { 
        sum = sum.split(''); 
        k = 'XC'; 
        if (sum.length > 2) sum = 'C'; 
        else if (sum[sum.length - 1] == 0) { 
          sum = ''; 
          sum = k; 
        } else { 
          sum = sum[sum.length - 1]; 
   
          sum = k + romeN[sum - 1]; 
        } 
      } 
   
      return sum; 
    } // Если j < 0 то Латинское система счисления 
    else { 
      return sum; 
    } 
  }

calculator('1 + 1');

// ----------------------------------- //