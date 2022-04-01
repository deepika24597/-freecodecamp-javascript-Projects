function palindrome(str) {
    let newstr =str.toLowerCase().replace(/[^a-z\d]/g,'');
    
    return newstr.split('').reverse().join('')===newstr;
  return true;
}

console.log(palindrome("eye"));