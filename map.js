const words = ["ground", "control", "to", "major", "tom"]

function map(arr, callback){
  let newArray = []
  for(let i = 0; i < arr.length; i++){
    let newItem = callback(arr[i])
    newArray.push(newItem)
  }
  console.log(newArray)
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
