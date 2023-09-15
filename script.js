function rot13(str) {

  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let arr1 = [];
  let newStr = " ";
  let corStr = "";
  let checker = /\s/;
  let checker2 = /\W/;

  /*Extract str character in arr1*/
  for (let i=0; i<str.length; i++) {
    arr1.push(str[i]);
  }

  /*Check arr1 characters against alphabet, and  add corresponing letters, empty strings & symbols in newStr*/
  for (let i=0; i<arr1.length; i++) {
      if (checker.test(arr1[i])) {
        newStr += " ";
      } else if (checker2.test(arr1[i])) {
        newStr += arr1[i].match(checker2);
      }
    for (let j=0; j<alphabet.length-26; j++) {

      if (arr1[i]==alphabet[j]) {
        newStr += alphabet[j+13];
      }
    }
  }

  /*Move newStr in new corStr to remove the empty string at the beginning*/
  for (let i=1; i<newStr.length; i++) {
    corStr += newStr[i];
  }

  str = corStr;

  return str;
}

rot13("SERR PBQR PNZC");
