window.cipher = {
 encode:(getNumber,getText)=> {
    
      let box='';//Como una caja donde se guardará toda la palabra
      for (let i = 0; i< getText.length;i++){
          
          const asciiLetter=getText.charCodeAt(i);//convierte el caracter a codigo Ascii
          const cipherAscii = (asciiLetter-65+getNumber)%26+65;//aplicamos el offset con la formula
          const cipherLetter= (String.fromCharCode(cipherAscii));
          box = box + cipherLetter;// para concatenar cada una de las palabras
      }
      return box;
      }

     
  
}
