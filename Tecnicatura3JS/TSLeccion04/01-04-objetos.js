 let x = 10; // variable del tipo primitiva
console.log(x.length);
console.log('Tipo primitivos');
 // objeto
let persona ={
    nombre: 'Carlos',
    apellido:'Gil' ,
    email: 'cgil@gmail.com',
    edad:28,
    Idioma:'es',
    get lang(){
        return this.Idioma.toUpperCase();// Convierte las minúsculas en mayúsculas
    },
    set lang(lang){
        this.Idioma = lang.toUpperCase();
    },
    nombreCompleto: function(){// metodo o funcion en JavaScript
        return this.nombre+' '+this.apellido+' '+this.nombreComple;
    },
    get nombreEdad(){// Este es el metodo get
        return 'El nombre es: ' +this.nombre+', Edad: '+this.edad;
    }
}
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto())
console.log('Ejecutando un objeto');
//Otra forma de acceder a los atributos de un objeto
let person2 = new Object();//Debe crear  u nuevo objeto en memoria
person2.nombreCompleto =  'juan';
person2.direccion = 'Salada 14';
person2.telefono = '5492618282821';
console.log(person2.telefono);
console.log('Creamos un nuevo objeto');
console.log(persona['apellido' ]); // Accedemos como si fuera un arreglo  GIL 
console.log('Usamos el ciclo for in ');
// for in  y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
console.log('Cambiamos y eliminamos un error');
persona.apellida = 'Betancud'; // cambiamos dinamicamente un valor del  objeto
delete persona.apellida;// Eliminamos el error
console.log(persona);

//Distintas formas de imprimir un objeto
// Numero 1: la mas sencilla : concatenar cada  valor de cada propiedad
console.log(persona.nombre+','+persona.apellido);
console.log('Distintas formas de imprimir un objeto: forma 1');

// Numero 2: A travez del coclo for in
console.log('Distintas formas de imprimir un objeto: forma 2');
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
        console.log(persona[nombrePropiedad]);
}
// Numero 3: La funcion Objeto.Values()
console.log('Distintas formas de imprimir un objeto: forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

// Numero 4: Utilizamos el metodo JSON.stringsify
console.log('Distintas formas de imprimir un objeto forma 4');
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log('persona.nombreEedad');
console.log(persona.nombreEdad);

console.log('Comenzamos a utilizar el método get y set para Idiomas');
persona.lang = 'en';
console.log(persona.lang);

function Persona3(nombre = 'Luis', apellido, email){// Constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}
let padre = new Persona3('Leo', 'Lopez', 'Lopezl@gmail.com');
padre.nombre = 'Luis';// modificamos el nombre
padre.telefono = '5492618282821';// Una propiedad exclusiva del objeto padre
console.log(padre);
console.log(padre.nombreCompleto()); //utilizamos la función
let madre = new Persona3('Laura', 'Contrera', 'contreral@gmail.com');
console.log(madre);
console.log(madre.telefono);// la propiedad no esta definida
console.log(madre.nombreCompleto());

//Diferentes formas de crear objetos

//Caso objeto 1
let miObjeto = new Object(); //Esta es una opción formal
//caso  objeto 2
let miObjeto2 = {}; //Esta opción es breve y recomendada

//caso String 1
let miCadena1 = new String('Hola'); //Sintaxis formal 
//caso String 2
let miCadena2 = 'Hola'; //esta es la sintaxis simplificada y recomendada

//caso con números 1
let miNumero = new Number(1); //Es formal no recomendable
//caso con números 2
let miNumero2 = 1;

//caso boolean 1
let miBoolean = new Boolean(false);// formal
//caso boolean 2
let miBoolean2 = false;// sintaxis recomendada

//caso Arreglos
let miArreglos = new Array(); // formal
// caso Arreglo 2
let miArreglos2  = []; // sintaxis recomendada

// caso fuction 1
let miFuncion1 = new Function(); // Todo despues de new es considerado objeto
// caso fuction 2
let miFuncion2 = Function(); // Notacion simplificada y recomendada

// Uso de prototype
Persona3.prototype.telefono = '2618383832';
console.log(padre);
console.log(madre.telefono);
madre.telefono = '5492618383832';
console.log(madre.telefono);

// Uso de call
let persona4 ={
    nombre:'Juan',
    apellido:'Perez',
    nombreComple2: function(titulo,telefono){
        return titulo+': '+this.nombre+' '+this.apellido+' '+telefono;
    //return this.nombre+' '+this.apellido;
    }
}

let persona5 = {
    nombre: 'Carlos',
    apellido:'Lara',
}

console.log(persona4.nombreComple2('Lic.','5492618383834'));
console.log(persona4.nombreComple2.call(persona5, 'Ing','5492618585856'));

// métoso Apply
let arreglo=['Ing','5492618383834'];
console.log(persona4.nombreComple2.apply(persona5,arreglo));


