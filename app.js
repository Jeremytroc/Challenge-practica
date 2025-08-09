let amigos = [];

function AsignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}

function condicionesIniciales() {
    AsignarTextoElemento('h2', 'Digite el nombre de sus amigos');
    AsignarTextoElemento('#botonAñadir', 'Añadir amigo');
    let btnSorteo = document.getElementById('reinicioSubTitulo'); // Mayúscula R
    if (btnSorteo) btnSorteo.removeAttribute('disabled'); // Habilitar botón
    amigos = [];
    document.querySelector('#añadiramigo').value = ''; // Limpia input

    // Limpia lista visual
    let listaAmigosUl = document.getElementById('listaAmigos');
    if (listaAmigosUl) listaAmigosUl.innerHTML = '';
}

function addAmigo() {
    let botonAñadir = document.getElementById('botonAñadir');
    if (botonAñadir.innerText === 'Reiniciar juego') {
        condicionesIniciales();
        return;
    }
    let amigoInput = document.getElementById('añadiramigo');
    if (amigoInput.value.trim() !== '') {
        amigos.push(amigoInput.value.trim());
        amigoInput.value = ''; // Limpia input

        // Actualizar lista visual
        let listaAmigosUl = document.getElementById('listaAmigos');
        listaAmigosUl.innerHTML = ''; // Limpiar lista antes de agregar

        amigos.forEach(amigo => {
            let li = document.createElement('li');
            li.textContent = amigo;
            listaAmigosUl.appendChild(li);
        });
    } else {
        alert('Por favor, ingrese un nombre válido.');
    }
}

function sorteo() {
    if (amigos.length <= 4) {
        alert('Debe ingresar al menos 5 amigos para realizar el sorteo.');
    } else {
        let listaSorteo = Math.floor(Math.random() * amigos.length);
        let amigoSeleccionado = amigos[listaSorteo];
        AsignarTextoElemento('h2', `Su amigo seleccionado es: ${amigoSeleccionado}`);
        AsignarTextoElemento('#botonAñadir', 'Reiniciar juego');

        let btnSorteo = document.getElementById('reinicioSubTitulo');
        if (btnSorteo) btnSorteo.setAttribute('disabled', 'true'); // Deshabilita botón
    }
}
