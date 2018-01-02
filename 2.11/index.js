alert( null || 2 || undefined ); 
// || is OR, will return value 2, the first truthy value

alert( alert(1) || 2 || alert(3) ); 
// will return 1 and then 2, will not return 3; 
// When we call a function, it will execute everything within the function before continuing doing whatever it is doing, 
// so it will show 

alert( 1 && null && 2 );
// Will output null because it is the first falsy value

alert( alert(1) && alert(2) );
// Will output 1 and then undefined because alert(2) is a falsy value

alert( null || 2 && 3 || 4 );
// Will output 3nbecause this becomes alert( null || 3 || 4 ); where 3 is the first truthy value

// if( !(age >= 14 && age <= 90)
// if(age < 14 || age > 90)
// Write an if condition to check that age is NOT between 14 and 90 inclusively.

if (-1 || 0) alert( 'first' ); // Will alert because -1 is truthy
if (-1 && 0) alert( 'second' ); // Will not alert because 0 is falsy
if (null || -1 && 1) alert( 'third' ); // Will alert because it becomes if (null || 1) and 1 is truthy