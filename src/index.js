
const getNip = new Number(document.getElementById('get-nip'));
const getText = document.getElementById('get-text').value;
const getNumber = document.getElementById('get-number');
const cipherButton=document.getElementById('id-cipher');
const descipherButton= document.getElementById('id-descipher');


//Cambiar funciones a funciones tipo flecha.

function upperCase(){
let MayusText= document.getElementById("get-text").value;
document.getElementById("get-text").value= MayusText.toUpperCase();
}


    //FUNCIÓN CIFRAR
const cipher = (getNumber,getText)=> {
    
    let box='';//Como una caja donde se guardará toda la palabra
    for (let i = 0; i< getText.length;i++){
        
        const asciiLetter=getText.charCodeAt(i);//convierte el caracter a codigo Ascii
        const cipherAscii = (asciiLetter-65+offset)%26+65;//aplicamos el offset con la formula
        const cipherLetter= (String.fromCharCode(cipherAscii));
        box = box + cipherLetter;// para concatenar cada una de las palabras
    }
    return box;
    }

    //FUNCIÓN DESCIFRAR



    //OCULTA LA PRIMER PANTALLA Y MUESTRA LA SEGUNDA PANTALLA

    function displayOne(){
        document.getElementById("root").className = "invisible";
        document.getElementById("second-screen").className = "visible";
    }
    cipherButton.addEventListener("click",displayOne);
    
    //OCULTA LA SEGUNDA PANTALLA Y MUESTRA LA TERCERA

    function displayTwo(){
        document.getElementById("second-screen").className = "invisible";
        document.getElementById("thirt-screen").className = "visible";
    }

    descipherButton.addEventListener("click",displayTwo);

    //OCULTA LA TERCERA PANTALLA MUESTRA LA CUARTA
    function displayThree(){
        document.getElementById("thirt-screen").className = "invisible";
        document.getElementById("fourth_screen").className = "visible";
    }

    descipherButton.addEventListener("click",displayThree);


    //Mostrar nip

    








