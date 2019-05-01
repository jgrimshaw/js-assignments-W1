function countLetters (str){
  const output = {}
  const splits = str.replace(/\s/, '') 

  for(let i = 0; i < splits.length; i++){
    if (!output[splits[i]]) {
      output[splits[i]] = 1
    } else {
      output[splits[i]]++
    }
  }
  return output
}

console.log(JSON.stringify(countLetters('lighthouse labs'), null, 2))
