'use strict';

if ("0") {
    alert( 'Hello' );
  }
  // Alert will be shown. Alert would not be shown with just 0 or ""

  let officialName = prompt('What is the "official" name of JavaScript?', '');

  if (officialName == 'ECMAScript') {
      alert('Right!');
  }
  else {
      alert('Didn’t know? ECMAScript!');
  }

  let showTheSign = prompt('Enter a number', '');

  if(showTheSign > 0) {
      alert('1');
  }
  else if(showTheSign < 0) {
      alert('-1');
  }
  else {
      alert('0')
  }


let userName = prompt(' Enter your login', '');

if (userName == 'Admin') {

    let pass = prompt('Enter your password', '');

    if (pass == 'TheMaster') {
        alert('Welcome!'); 

        } else if (pass == null) {
          alert ('Cancelled'); 

        } else { 
           alert ('Wrong password');
        }
    
    } else if (userName == null) {
        alert('Cancelled');

    } else {
        alert ('I dont know you');
}

// result (a + b < 4) ? 'Below' : 'Over';



// let message;

// let message = (login == 'Employee') ? 'Hello':
//     (login == 'Director') ? 'Greetings':
//     (login == '') ? 'No login';
    //    '';