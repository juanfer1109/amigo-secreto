let amigos = [];
let amigosSorteados = [];

// document.getElementById('amigo').value = ''; 
// document.getElementById('listaAmigos').innerHTML = '';

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre != '') {
        // console.log('Agregando amigo: ' + nombre);
        amigos.push(nombre);
        // console.log('Amigos: ' + amigos);
        actualizarListaAmigos(amigos);
    } else {
        alert('Por favor, inserte un nombre');
    }
    document.getElementById('amigo').value = '';
    return;
}

function actualizarListaAmigos() {
    document.getElementById('listaAmigos').innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        document.getElementById('listaAmigos').innerHTML += '<li>' + amigos[i] + '</li>';
    }
    return;
}

function sortearAmigo() {
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    if (amigos.length === 0) {
        alert('Debes insertar nombres');
        return;
    }

    if (amigos.length === amigosSorteados.length) {
        alert('Ya no hay amigos por sortear');
        return;
    }

    let i = Math.floor(Math.random() * amigos.length);

    if (amigosSorteados.includes(i)) {
        sortearAmigo();
    }else {
        document.getElementById('resultado').innerHTML += '<li>' + 'El amigo secreto sorteado es: ' + amigos[i] + '</li>';
        amigosSorteados.push(i);
    }
    return;
}