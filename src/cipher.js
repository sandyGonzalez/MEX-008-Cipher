window.cipher = {
    encode:(getNumber,getText)=> {
       
         let cipherWord = '';//Como una caja donde se guardará toda la palabra
          getNumber = parseInt(getNumber);
         for (let i = 0; i< getText.length;i++){
           
            let asciiLetter=getText.charCodeAt(i);//convierte el caracter a codigo Ascii
             let cipherAscii = (asciiLetter-65+getNumber)%26+65;//aplicamos el offset con la formula
             let cipherLetter= (String.fromCharCode(cipherAscii));
             cipherWord = cipherWord + cipherLetter;// para concatenar cada una de las palabras
         }
         return cipherWord;
         },
         
   decode:(getNumber2,getText2)=> {
       
           let decipherWord = '';//Como una caja donde se guardará toda la palabra
            let getNumber = parseInt(getNumber2);
           for (let i = 0; i< getText2.length;i++){
            //    console.log(getNumber2);
               let asciiLetter=getText2.charCodeAt(i);//convierte el caracter a codigo Ascii
               let cipherAscii = (asciiLetter+65-getNumber)%26+65;//aplicamos el offset con la formula
               let cipherLetter= (String.fromCharCode(cipherAscii));
               decipherWord = decipherWord + cipherLetter;// para concatenar cada una de las palabras
           }
           return decipherWord;
           }
           
         
   }
      

