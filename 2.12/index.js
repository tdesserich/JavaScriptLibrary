let i = 3;

while (i) {
  alert( i-- );
}
// Will alert 3, 2, and 1

let i = 0;
while (++i < 5) alert( i );
// Will alert 0, 1, 2, 3, 4
// The first value is i=1, because ++i first increments i and 
// then returns the new value. So the first comparison is 1 < 5 and the alert shows 1.

let i = 0;
while (i++ < 5) alert( i );
// Will alert 0, 1, 2, 3, 4, 5
// The first value is again i=1. The postfix form of i++ increments i and 
// then returns the old value, so the comparison i++ < 5 will use i=0 (contrary to ++i < 5).
// But the alert call is separate. It’s another statement which executes after the increment and the 
// comparison. So it gets the current i=1.

for (let i = 0; i < 5; i++) alert( i );
// Postfix form. Will show 0, 1, 2, 3, 4. 

for (let i = 0; i < 5; ++i) alert( i );
// Prefix form. Will show 0, 1, 2, 3, 4.


for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) continue;
    alert(i); 
  }


  let i = 0;
  while (i < 3) {
      alert( `number ${i}!` );
      i++;
  }



  let num;

  do {
    num = prompt("Enter a number greater than 100?", 0);
  } while (num <= 100 && num); 



  let n = 10;

  nextPrime:
  for (let i = 2; i <= n; i++) { // for each i...
  
    for (let j = 2; j < i; j++) { // look for a divisor..
      if (i % j == 0) continue nextPrime; // not a prime, go next i
    }
  
    alert( i ); // a prime
  }  