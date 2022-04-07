function convertToRoman(num) {
    const numerals= {
      1:'I',
      2:'II',
      4:'IV',
      5:'V',
      6:'VI',
      9:'IX',
      10:'X',
      40:'XL',
      50:'L',
      90:'XC',
      100:'C',
      400:'CD',
      500:'D',
      900:'CM',
      1000:'M',
       
    };
    let romannum = '';
    const decimalkeys = Object.keys(numerals).reverse();
    
    decimalkeys.forEach(key =>
    {
      while (key <=num){
      romannum += numerals [key];
      num -= key;
     } });
     return romannum;
  
     
   }
   console.log( convertToRoman(36));