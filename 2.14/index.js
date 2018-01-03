// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Do you have your parents permission to access this page?');
//     }
//   }
//   // using if..else

//   function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?');
//   }
//   // using ?

//   function checkAge(age) {
//     return (age > 18) || confirm('Did parents allow you?');
//   }
//   // using ||


//   function min(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   }
//   // function returning the least of two numbers


  function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n <= 1) {
    alert(`Power ${n} is not supported,
      use an integer greater than 0`);
  } else {
    alert( pow(x, n) );
  }
  // Create a web-page that prompts for x and n, and then shows the result of pow(x,n).