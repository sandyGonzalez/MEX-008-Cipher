window.cipher = {
 encode:(getNumber,getText)=> {
    
      let cipherWord = '';//Como una caja donde se guardará toda la palabra
       getNumber = parseInt(getNumber);
      for (let i = 0; i< getText.length;i++){
          console.log(getNumber);
          const asciiLetter=getText.charCodeAt(i);//convierte el caracter a codigo Ascii
          const cipherAscii = (asciiLetter-65+getNumber)%26+65;//aplicamos el offset con la formula
          const cipherLetter= (String.fromCharCode(cipherAscii));
          cipherWord = cipherWord + cipherLetter;// para concatenar cada una de las palabras
      }
      return cipherWord;
      }
      
decode:(getNumber2,getText2)=> {
    
        let cipherWord = '';//Como una caja donde se guardará toda la palabra
         getNumber = parseInt(getNumber2);
        for (let i = 0; i< getText2.length;i++){
            console.log(getNumber2);
            const asciiLetter=getText2.charCodeAt(i);//convierte el caracter a codigo Ascii
            const cipherAscii = (asciiLetter+65-getNumber)%26+65;//aplicamos el offset con la formula
            const cipherLetter= (String.fromCharCode(cipherAscii));
            cipherWord = cipherWord + cipherLetter;// para concatenar cada una de las palabras
        }
        return cipherWord;
        }
        
      
}
