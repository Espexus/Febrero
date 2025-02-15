var palabras = ["amor", "mas", "el", "lo", "mejor", "es"];

const frasecorrecta = "el amor es lo mas mejor"

function Buscapalabra(entrada){
    var entrada = parseInt(document.getElementById("numero").value);
    var resultante = document.getElementById("palabraresultante");
    var Palabra = palabras[entrada - 1];


    if (entrada <= palabras.length && entrada > 0){
        resultante.textContent = "Palabra: " + Palabra;
    } else {
        resultante.textContent = "No es un numero valido, cambialo"
    }

}

function Buscatesoro (){
    var incorrecto = document.getElementById("respuestainc");
    var respuesta = document.getElementById("respuesta").value.trim();
    
    if(respuesta == frasecorrecta){
        alert("Eres el amor de mi vida, no importa la distancia, el tiempo o las discusiones, tu carino eres realmente el amor de mi vida, sera duro no poder cuidarte como la bebe que eres para mi, sales al mundo ahora, tu novio te ama para siempre, un dia nos casaremos en la playa, te amo.")
    } else{
        incorrecto.textContent = "No es la frase correcta, sigue intentando o quita las tildes"
    }
}