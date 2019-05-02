// first assignment

function findWaldo(arr, actionWhenFound) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      actionWhenFound([i]);
    }
  }
}
function actionWhenFound(index) {
  console.log(`Found Waldo at index ${index}!`)
}
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound)


// second assignment
function findWaldo(arr, actionWhenFound){
  arr.forEach(function(elm, index){
        if (elm === "Waldo") {
      actionWhenFound(index);
    }
  })
}
function actionWhenFound(index) {
  console.log(`Found Waldo at index ${index}!`)
}
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound)
