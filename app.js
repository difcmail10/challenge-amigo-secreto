// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//variable que alamcenara el nombre de los amigos ingresados

let amigos = [];

function agregarAmigo() {
    //Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
    let nombreAmigo = document.getElementById("amigo").value;
    //Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
    if (esAmigoValido(nombreAmigo)) {
        //Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
        amigos.push(nombreAmigo);
        //Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.

        agregarLista();
        document.getElementById("amigo").value = '';
    }

}

function esAmigoValido(amigo) {
    let valido = true;
    if (amigo.trim() == '') {
        alert('Por favor, inserte un nombre.')
        valido = false;
    }else{
        let nombre = amigo.toLowerCase();
        if(validarSiExisteAmigo(amigo)){
            alert('El nombre ingresado ya existe.')
            valido = false;
        }
    }
    return valido;
}

function validarSiExisteAmigo(amigo){
    let existe = false;
    for(let i = 0; i< amigos.length; i++){
        if(amigo == amigos[i]){
            existe = true;
        }
    }
    return existe;
}


function agregarLista() {
    //Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
    lista = document.getElementById("listaAmigos");
    //Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
    lista.innerHTML = "";
    //Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
    for (let i = 0; i < amigos.length; i++) {
        //Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }

}



function sortearAmigo() {
    //Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
    if(amigos.length > 0){
        
        //Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
        let indice = Math.floor(Math.random() * amigos.length); 

        //Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
        let nombre = amigos[indice];
        //Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
        let listaResultado = document.getElementById("resultado");

        listaResultado.innerHTML = "";

        listaResultado.innerHTML = `<li>${nombre}</li>`;
    }

}