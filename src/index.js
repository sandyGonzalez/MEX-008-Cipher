let getNip = document.getElementById('get-nip');
let getText = document.getElementById('get-text');
let cipherButton= document.getElementById('id-cipher');
let getNumber = document.getElementById('key');
let cipherWord = document.getElementById('cipher-word');
let descipherButton = document.getElementById('id-descipher');
let showNip = document.getElementById('mostrar');

//BOTONES PARA DESCIFRAR
let getText2 = document.getElementById('get-text2');
let getNumber2 =document.getElementById('key2');

//FUNCIÓN CIFRAR
cipherButton.addEventListener("click", ()=>{
 let getText1= getText.value.toUpperCase();
 cipherWord.value = (window.cipher.encode(getNumber.value, getText1));

//  console.log(window.cipher.encode(getNumber.value, getText1));
 
 document.getElementById("cipher-word").innerHTML = cipherWord.value;//mostrando palabra cifrada en el HTML

 document.getElementById('show-nip').innerHTML= getNip.value;//Mostrando el nip en el HTML
 
})




//FUNCIÓN DESCIFRAR
showNip.addEventListener("click", ()=>{
    let getText1= getText2.value.toUpperCase();
    cipherWord.value = (window.cipher.decode(getNumber2.value, getText1));
   
    // console.log(window.cipher.decode(getNumber2.value, getText1));
    document.getElementById('original-word').innerHTML = cipherWord.value;
   
   })
   






// function upperCase(){
// let MayusText= document.getElementById("get-text").value;
// document.getElementById("get-text").value= MayusText.toUpperCase();
// }

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
        document.getElementById("fourth-screen").className = "visible";
    }
    showNip.addEventListener("click",displayThree);


    //Mostrar nip
    document.getdocumentElementById("show-nip").innerHTML= getNip.value;
    
    
//      // convertir texto a numero
// let text = "1234";
// let arr = [];


// for (let i=0;i<text.length;i++){
// if(text.charAt(i)==="0"){
// arr.push("CERO ");
// }
// else if (text.charAt(i)==="1"){
// arr.push("UNO ");
// }
// else if(text.charAt(i)==="2"){
// arr.push("DOS ");
// }
// else if(text.charAt(i)==="3"){
// arr.push("TRES ");
// }
// else if(text.charAt(i)==="4"){
// arr.push("CUATRO ");
// }
// else if(text.charAt(i)==="5"){
// arr.push("CINCO ");
// }
// else if(text.charAt(i)==="6"){
// arr.push("SEIS ");
// }
// else if(text.charAt(i)==="7"){
// arr.push("SIETE ");
// }
// else if(text.charAt(i)==="8"){
// arr.push("OCHO ");
// }
// else if(text.charAt(i)==="9") {
// arr.push("NUEVE ");
// }



// }
// console.log(arr);
// saludoString = arr.join("");
// console.log(saludoString);

// mensaje2 = saludoString;

// mensaje2Arr = saludoString.split(' ');// separa el arreglo por espacios
// console.log(mensaje2Arr);
// //Convertir numero a texto


// let arr2= [];

// for(let j=0;j<mensaje2Arr.length-1;j++){
// if(mensaje2Arr[j]==="CERO"){
// arr.push("0");
// }
// else if(mensaje2Arr[j] ==="UNO"){
// arr2.push("1");
// }
// else if(mensaje2Arr[j]==="DOS"){
// arr2.push("2");
// }
// else if(mensaje2Arr[j] ==="TRES"){
// arr2.push("3");
// }
// else if(mensaje2Arr[j]==="CUATRO"){
// arr2.push("4");
// }
// else if(mensaje2Arr[j]==="CINCO"){
// arr2.push("5");
// }
// else if(mensaje2Arr[j]==="SEIS"){
// arr2.push("6");
// }
// else if(mensaje2Arr[j]==="SIETE"){
// arr2.push("7");
// }
// else if(mensaje2Arr[j]==="OCHO"){
// arr2.push("8");
// }
// else if(mensaje2Arr[j]==="NUEVE") {
// arr2.push("9");
// }

// }

// stringArr2=arr2.join("");

// console.log(arr2);
// console.log(stringArr2);



