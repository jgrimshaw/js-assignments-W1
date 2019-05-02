const input = [ { x: 3, y: 4 }, { x: 12, y: 5 }, { x: 8, y: 15 } ]

const result = input.map(function(obj){
  let z = (Math.pow(obj.x,2) + Math.pow(obj.y,2))
  // console.log(z)
  return Math.sqrt(z)
})

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
