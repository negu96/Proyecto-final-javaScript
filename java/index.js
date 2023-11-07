
let nombreIngresado = prompt("Ingresa tu nombre")
function saludar(nombre) {
    alert("Hola" + " " + nombre + " " + "Vamos a Jugar");
}

saludar(nombreIngresado);
/*Respuestas Correctas*/
let contador = 0

/*Pregunta 1*/
let pregunta1 = prompt("¿Ultimo equipo en salir campeon del futbol argentino? \n Boca \n River \n Racing ");

if (pregunta1 == "River") {
    alert("Correcta")
    contador++
} else {
    alert("Incorrecto")

}

/*Pregunta 2*/
let pregunta2 = prompt("Cual es el clasico mas popular de Argentina  \n River - Boca  \n Newels - Rosario Central  \n Talleres - Belgrano");

if (pregunta2 == "River - Boca") {
    alert("Correcta")
    contador++
} else {
    alert("Incorrecto")

}

/*Pregunta 3*/
let pregunta3 = prompt("¿En que equipo esta dirigiendo actualmente Carlos Tevez?  \n Racing  \n Estudiantes  \n Independiente ");

if (pregunta3 == "Independiente") {
    alert("Correcta")
    contador++
} else {
    alert("Incorrecto")

}

/*Pregunta 4*/
let pregunta4 = prompt("¿En que esquipo debuto Maradona?  \n Argentino Juniors  \n Boca Juniors  \n Newels ");

if (pregunta4 == "Argentino Juniors") {
    alert("Correcta")
    contador++
} else {
    alert("Incorrecto")

}

/*Pregunta 5*/
let pregunta5 = prompt("¿Cual es el clasico mas popular de Cordoba?  \n Talleres - Belgrano   \n Instituto - Belgrano   \n Talleres - Instituto ");

if (pregunta5 == "Talleres - Belgrano") {
    alert("Correcta")
    contador++
} else {
    alert("Incorrecto")

}

alert("Tenes" + " " + contador + " " + " respuestas correctas");

/*Adivinanza*/
const respuesta1 = "rosario central";
let intentos = 0;
let adivinanza = " ";

while (adivinanza !== respuesta1) {
    adivinanza = prompt("Equipo con colores amarillos y azules  , que se apodan canalla")tolowerCase();
    intentos++;
    if (adivinanza !== respuesta1) {
        alert("Respuesta Incorrecta , intentalo nuevamente");

    }

}
alert("Respuesta Correcta" + " " + intentos + "intentos");