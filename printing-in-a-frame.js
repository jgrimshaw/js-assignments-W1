function printInFrame(list) {
  var list = list.split(' ');
  var longest = longestStr(list).length;
  var border = repeat('*', longest + 3);

  console.log(border);

  for (var word of list) {
    console.log('* ' + word + repeat(' ', longest - word.length) + '*');
  }
  console.log(border);
}


function repeat(str, times) {
  var result = str;
  for (var i = 0; i < times; i++) {
    result = result + str;
  }
  return result;
}

function longestStr(list) {
  var longest = 0;
  var word = null;
  for (var i = 0; i < list.length; i++){
    if(longest < list[i].length){
    longest = list[i].length;
    word = list[i];
    }
  }
  return longest = word;
}

// Test driver code, do not modify
printInFrame('May the force be with you');
 printInFrame('Here\'s Johnny!');
 printInFrame('Supercalifragalisticexpialadocious');
 printInFrame('Lost, like tears in the rain');
