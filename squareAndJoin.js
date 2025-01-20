/*function squareDigits(num){
    let finalNum = '';
    num = num.toString();
    for(let i = 0; i < num.length; i++){
      finalNum = finalNum + (num[i] * num[i]).toString();
    }
    return Number(finalNum);
  }
  squareDigits(9119)*/
  function disemvowel(str) {
    let newStr = '';
    for(i = 0; i<str.length; i++){
      if(str.charAt(i) !== 'a' && str.charAt(i) !== 'e' && str.charAt(i) !== 'i' && str.charAt(i) !== 'o' && str.charAt(i) !== 'u'){
        newStr += str.charAt(i);
      } 
      return newStr;
    }
    
  }
  disemvowel( "This website is for losers LOL!")