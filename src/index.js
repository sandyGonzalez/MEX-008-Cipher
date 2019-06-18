let getNip = document.getElementById('get-nip');//Obtenemos el nip y lo guardamos 
let getText = document.getElementById('get-text');//Obtenemos el texto y lo guardamos
let cipherButton= document.getElementById('id-cipher');//Botón para cifrar
let getNumber = document.getElementById('key');//Botón para obtener el offset o llave
let cipherWord = document.getElementById('cipher-word');//Contenedor donde guardaremos palabra cifrada
let descipherButton = document.getElementById('id-descipher');//Botón de desifrar
let showNip = document.getElementById('mostrar');//Botón para mostrar el nip,

//BOTONES PARA DESCIFRAR
let getText2 = document.getElementById('get-text2');//Obtenemos el texto cifrado
let getNumber2 =document.getElementById('key2');//Obtenemos el offset para desifrar

//VARIABLES PARA LAS FUNCIONES QUE CONVIERTEN NUMEROS A LETRAS
let arr = [];//Primer arreglo para convertir de numeros a String
let arr2= [];//segundo arreglo para convertir String a numeros
let result = '';
let result2= '';
let text2= "UNO DOS TRES CUATRO"
let stringToArr = text2.split(' ');

//FUNCIÓN PARA QUE CIFRE CON UN CLICK
cipherButton.addEventListener("click", ()=>{//Hacemos una función anonima para el botón de cifrar y que al hacer click te cifre la palabra
 let getText1= getText.value.toUpperCase();//Creamos la variable getText1 y le asignamos el valor del texto ingresado convirtiendolo a mayusculas.
 cipherWord.value = (window.cipher.encode(getNumber.value, getText1));// en la variable cipherWord le asignamos la palabra cifrada mandando a llamar el objeto window.cipher.encode().
 
 document.getElementById("cipher-word").innerHTML = cipherWord.value;//mostrando palabra cifrada en el HTML

 document.getElementById('show-nip').innerHTML= getNip.value;//Mostrando el nip en el HTML
 
})

//FUNCIÓN PARA QUE DESIFRE CON UN CLICK
showNip.addEventListener("click", ()=>{
    let getText1= getText2.value.toUpperCase();
    cipherWord.value = (window.cipher.decode(getNumber2.value, getText1));
   
    // console.log(window.cipher.decode(getNumber2.value, getText1));
    document.getElementById('original-word').innerHTML = cipherWord.value;
   
   })
   


   //FUNCIONES PARA OCULTAR Y DESOCULTAR PANTALLA

     //OCULTA LA PRIMER PANTALLA Y MUESTRA LA SEGUNDA PANTALLA

    const  displayOne = ()=>{
        document.getElementById("root").className = "invisible";
        document.getElementById("second-screen").className = "visible";
    }
    cipherButton.addEventListener("click",displayOne);
    
    //OCULTA LA SEGUNDA PANTALLA Y MUESTRA LA TERCERA

   const displayTwo = ()=>{
        document.getElementById("second-screen").className = "invisible";
        document.getElementById("thirt-screen").className = "visible";
    }

    descipherButton.addEventListener("click",displayTwo);

    //OCULTA LA TERCERA PANTALLA MUESTRA LA CUARTA
    const displayThree = () =>{
        document.getElementById("thirt-screen").className = "invisible";
        document.getElementById("fourth-screen").className = "visible";
    }
    showNip.addEventListener("click",displayThree);

//FUNCIONES PARA CONVERTIR DE NUMEROS A LETRAS Y VICEVERSA



let numberToString = (text) =>{

for (let i=0;i<text.length;i++){
if(text.charAt(i)==="0"){
arr.push("CERO");
}
else if (text.charAt(i)==="1"){
arr.push("UNO");
}
else if(text.charAt(i)==="2"){
arr.push("DOS");
}
else if(text.charAt(i)==="3"){
arr.push("TRES");
}
else if(text.charAt(i)==="4"){
arr.push("CUATRO");
}
else if(text.charAt(i)==="5"){
arr.push("CINCO");
}
else if(text.charAt(i)==="6"){
arr.push("SEIS");
}
else if(text.charAt(i)==="7"){
arr.push("SIETE");
}
else if(text.charAt(i)==="8"){
arr.push("OCHO");
}
else if(text.charAt(i)==="9") {
arr.push("NUEVE");
}
}

result = arr.join(' ');

    return result;
}





let stringToNumber=(mensaje2Arr)=>{
    
for(let j=0;j<mensaje2Arr.length;j++){
if(mensaje2Arr[j]==="CERO"){
arr2.push("1");
}
else if(mensaje2Arr[j] ==="UNO"){
arr2.push("1");
}
else if(mensaje2Arr[j]==="DOS"){
arr2.push("2");
}
else if(mensaje2Arr[j] ==="TRES"){
arr2.push("3");
}
else if(mensaje2Arr[j]==="CUATRO"){
arr2.push("4");
}
else if(mensaje2Arr[j]==="CINCO"){
arr2.push("5");
}
else if(mensaje2Arr[j]==="SEIS"){
arr2.push("6");
}
else if(mensaje2Arr[j]==="SIETE"){
arr2.push("7");
}
else if(mensaje2Arr[j]==="OCHO"){
arr2.push("8");
}
else if(mensaje2Arr[j]==="NUEVE") {
arr2.push("9");
}

}

result2 = arr2.join("");



return result2;
}



console.log(stringToArr);


console.log(stringToNumber(stringToArr));