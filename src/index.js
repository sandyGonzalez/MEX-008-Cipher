let getNip = document.getElementById('get-nip');//Obtenemos el nip y lo guardamos 
let getText = '';
let cipherButton1 = document.getElementById('id-cipher1');//Boton cifrar pagina de bienvenida.
let descipherButton1 = document.getElementById('id-descipher1')//Botón descifrar pagina de bienvenida.
let cipherButton= document.getElementById('id-cipher');//Botón para cifrar
let getNumber = document.getElementById('key');//Botón para obtener el offset o llave
let cipherWord = document.getElementById('cipher-word');//Contenedor donde guardaremos palabra cifrada
// let descipherButton = document.getElementById('id-descipher');//Botón de desifrar
let showNip = document.getElementById('mostrar');//Botón para mostrar el nip,
//Botones de inicio 
let start = document.getElementById('start');//Botón de inicio 
let start2 = document.getElementById('start2');//Segundo botón de inicio.



//VARIABLES PARA LAS FUNCIONES QUE CONVIERTEN NUMEROS A LETRAS
let arr = [];//Primer arreglo para convertir de numeros a String
let arr2= [];//segundo arreglo para convertir String a numeros
let result = '';
let result2= '';



//BOTONES PARA DESCIFRAR
let getText2 = document.getElementById("get-text2");//Guardaremos el texto cifrado
let getNumber2 =document.getElementById('key2');//Obtenemos el offset para desifrar


//FUNCIONES PARA CONVERTIR DE NUMEROS A LETRAS Y VICEVERSA


    //CONVIERTE NUMEROS A CADENAS DE TEXTO
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
    else{
        arr.push(text.charAt(i));
    }
    }
    
    result = arr.join(' ');
    
        return result;
    }
    
    //CONVIERTE ARREGLO EN CADENA DE NUMEROS
    
    let stringToNumber=(mensaje2Arr)=>{
        
    for(let j=0;j<mensaje2Arr.length;j++){
    if(mensaje2Arr[j]==="CERO"){
    arr2.push("0");
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
    else {

        arr2.push(mensaje2Arr[j]);
    }
    
    }
    
    result2 = arr2.join("");
    
    
    
    return result2;
    }
    
    
    





//FUNCIÓN PARA QUE CIFRE CON UN CLICK
cipherButton.addEventListener("click", ()=>{//Hacemos una función anonima para el botón de cifrar y que al hacer click te cifre la palabra

    getText = numberToString(getNip.value);//Obteniendo texto de cadena de numeros.
   
    let getText1= getText.toUpperCase();//Creamos la variable getText1 y le asignamos el valor del texto ingresado convirtiendolo a mayusculas.
 cipherWord.value = (window.cipher.encode(getNumber.value, getText1));// en la variable cipherWord le asignamos la palabra cifrada mandando a llamar el objeto window.cipher.encode().
 
 document.getElementById("cipher-word").innerHTML = cipherWord.value;//mostrando palabra cifrada en el HTML



})



//FUNCIÓN PARA QUE DESIFRE CON UN CLICK
showNip.addEventListener("click", ()=>{
    

   let getText1= getText2.value.toUpperCase();
   
    cipherWord.value = (window.cipher.decode(getNumber2.value, getText1));
  

    cipherWord = cipherWord.value.split(' '); //convirtiendo cadena a arreglo.
    cipherWord = stringToNumber(cipherWord);//Transformando texto a numero.
  

    document.getElementById('original-word').innerHTML = cipherWord;// muestra el nip

    
    
    
   
   })
  


   //FUNCIONES PARA OCULTAR Y DESOCULTAR PANTALLA

     //OCULTA PANTALLA DE BIENVENIDA Y MUESTRA LA PRIMERA

    const  displayWelcome = ()=>{
        document.getElementById("root").className = "invisible";
        document.getElementById("first-screen").className = "visible";
    }
    cipherButton1.addEventListener("click",displayWelcome);
    
    //OCULTA LA PANTALLA DE BIENVENIDA Y MUESTRA LA TERCERA

   const displayOne = ()=>{
        document.getElementById("root").className = "invisible";
        document.getElementById("thirt-screen").className = "visible";
    }

    descipherButton1.addEventListener("click",displayOne);
    //OCULTA LA PRIMERA PANTALLA Y MUESTRA LA TERCERA
    const displayTwo = ()=>{
        document.getElementById('first-screen').className = "invisible";
        document.getElementById('second-screen').className = "visible";
    
    }
    cipherButton.addEventListener("click",displayTwo);

    //OCULTA LA TERCERA PANTALLA MUESTRA LA CUARTA
    const displayThree = () =>{
        document.getElementById("thirt-screen").className = "invisible";
        document.getElementById("fourth-screen").className = "visible";
    }
    showNip.addEventListener("click",displayThree);

    //VOLVER A PANTALLA DE INICIO
    const displayStart = () =>{
        document.getElementById("second-screen").className = "invisible";
        document.getElementById("root").className = "visible";
    }
    start.addEventListener("click",displayStart);

    //VOLVER A PANTALLA INICIAL DESDE SEGUNDO BOTON DE INICIO.
    const displayStart2 = () =>{
        document.getElementById("fourth-screen").className = "invisible";
        document.getElementById("root").className = "visible";
    }
    start2.addEventListener("click",displayStart2);

//BOTON LIMPIAR

const clearButton = document.getElementById('clean');
const clearButton2 = document.getElementById('clean2');

const clearAll = () => {
    document.getElementById('formulario-cifar').reset();
    document.getElementById('original-word').reset();
}

clearButton.addEventListener('click', clearAll); 
//SEGUNDO BOTON DE LIMPIAR
const clearAll2 = () => {
    document.getElementById('desipher-form').reset();
    
}

clearButton2.addEventListener('click', clearAll2); 

//BOTON INSTRUCCIONES

let inicio = ()=>{
    location.href="instructions.html";

}

const instructions = document.getElementById("instructions");



instructions.addEventListener("click",inicio);




