function lvl6exercise1 (num) {
  // Return 'hello' if num is 1, 'world' if num is 2, otherwise return 'bye'
  switch(num) {
  case(1):
  return 'hello';
  break;
  case(2) :
  return 'world';
  break;
  default : 
  return 'bye';
  break;  
  }
}

function lvl6exercise2() {
  // Push 10 'hello' strings into the array using a for loop, then return it
  var ourArray = [];
  for (var i = 0; i < 10; i++) { 
 ourArray.push('Hello');
}
 return ourArray
}



function lvl6exercise3 () {
  // Empty this array using a while loop and return it
  var arr = ['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello']
  while(arr.length >= 1)
  arr.pop()
  return arr
}
