
let getNip = document.getElementById('get-nip');
let getText = document.getElementById('get-text');
let cipherButton= document.getElementById('id-cipher');
let getNumber = document.getElementById('key');
let cipherWord = document.getElementById('cipher-word');
let descipherButton = document.getElementById('id-descipher');
//FUNCIÓN CIFRAR
cipherButton.addEventListener("click", ()=>{
 let getText1= getText.value.toUpperCase();
 cipherWord.value = (window.cipher.encode(getNumber.value, getText1));

 console.log(window.cipher.encode(getNumber.value, getText1));


})

//FUNCIÓN DESCIFRAR
descipherButton.addEventListener("click", ()=>{
    let getText1= getText.value.toUpperCase();
    cipherWord.value = (window.cipher.encode(getNumber.value, getText1));
   
    console.log(window.cipher.decode(getNumber.value, getText1));
   
   
   })
   




//Cambiar funciones a funciones tipo flecha.

// function upperCase(){
// let MayusText= document.getElementById("get-text").value;
// document.getElementById("get-text").value= MayusText.toUpperCase();
// }


    //MUESTRA LA PALABRA CIFRADA EN HTML

    // document.getElementById("cipher-word").innerHTML= cipherWord;

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
    document.getElementById("show-nip").innerHTML= getNip;
    








