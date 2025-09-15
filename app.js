// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigoSecreto = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("por favor, ingresa un nombre");
        return;
    }
amigoSecreto.push(nombre);


    inputAmigo.value = "";
inputAmigo.focus();

listarAmigo();

}



function listarAmigo() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

amigoSecreto.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
});
}

function sortearAmigo() {
    if (amigoSecreto.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigoSecreto.length);
    let amigoSeleccionado = amigoSecreto[indiceAleatorio];

    document.getElementById("resultado").innerText = `Tu amigo secreto es: ${amigoSeleccionado}`;
}




