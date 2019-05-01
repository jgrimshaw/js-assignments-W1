function countLetters(str){

  const text = str.replace(/\s/g, '');
  const result = {};

  for(let i = 0; i < text.length; i++){
    if(!result[text[i]]) {
      result[text[i]] = [i];
    } else {
      result[text[i]].push(i);
    }
  }
  return result;
}

console.log(countLetters('lighthouse in the house'));
