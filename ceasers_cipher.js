function rot13(str) {

    let newStr = "";
    // initialize new empty string
  
      for (let i = 0; i < str.length; i++) {
      // for loop till the length of str given
  
        let letter = str[i].charCodeAt();
        // initialize another variable that gets the letter 
  
        if (letter < 65 || letter > 90) {
          newStr += str[i];
        } else {
          let newLetter = letter + 13 > 90 ? (letter % 26) + 65 : letter + 13;
          // new letter will be moved +13 or -13 according to placement in the alphabet
          newStr += String.fromCharCode(newLetter);
          // add updated letter to new string
        }
      }
    
    return newStr;
    // return new string
  }
    
  
  rot13("SERR PBQR PNZC");
  // call function with any string