/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
//if its empty string
  if(str.length===0){
    return true;
  }
   //remove panctuation  from the string
   const panctuationRegex = /[!?.,]/g;
   let newString  = str.replace(panctuationRegex,"");
   newString = newString.replaceAll(" ","").toLowerCase();


   for(let i =0;i<newString.length;i++){
//newString.length - 1 - i] this is for the check the string on backword side
    if(newString[i]!==newString[newString.length - 1 - i]){
      return false;
    }
   }
  return true;


}

module.exports = isPalindrome;
