const countdownGenerator = function (x) {
  let counter = x

  return function(){
    if(counter > 0) {console.log(`T-minus ${counter} ...`)}
    if(counter === 0) {console.log(`Blast Off!`)}
    if(counter < 0) {console.log(`Rockets already gone, bub!`)}
    return counter -= 1
  }
};

var countdown = countdownGenerator(5);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
