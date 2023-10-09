//Ejercicio 3: Captura y Propagación
//3.1. Crea una lista desordenada (<ul>) con varios elementos de lista (<li>) dentro. 
//Agrega un escuchador de eventos al elemento <ul> para que cuando se haga clic en cualquier elemento de la lista,
// se muestre un mensaje en la consola indicando el texto del elemento clickeado.

//3.2. Modifica el ejercicio anterior para que el mensaje en la consola muestre el nivel de jerarquía en el DOM del elemento clickeado.
// Por ejemplo, si se hace clic en un <li>, el mensaje podría decir "Clickeaste en un elemento de nivel 2".

let lista = document.querySelector("ul");

lista.addEventListener(`click`,(event) => {
    console.log("Le has dado click a " + event.target.innerText);
    if(event.target.tagName == "LI"){
        console.log("Clickeaste en un elemento de nivel 2");
    }
})

//Ejercicio 4: Eventos de formulario
//4.1. Crea un formulario HTML con campos de entrada para el nombre y el correo electrónico. Agrega un botón "Enviar" al formulario.
//Cuando se haga clic en el botón, valida que los campos de entrada no estén vacíos y muestra un mensaje de éxito o error en la página en función de la validación.
let boton = document.getElementById("enviar");

boton.addEventListener(`click`,function(){
    if(document.getElementById("nombre").value != "" &&  document.getElementById("email").value != ""){
       document.body.appendChild(document.createElement("p").appendChild(document.createTextNode("Todo correcto.")));
       boton.dispatchEvent(formularioEnviado);
    }else{
        document.body.appendChild(document.createElement("p").appendChild(document.createTextNode("Error unos de los campos anteriores están vacíos.")));
    }
})
//4.2. Agrega una función que dispare un evento personalizado "formularioEnviado" cuando se envíe el formulario con éxito.
// Escucha este evento y muestra un mensaje personalizado en la consola cuando se dispare.

const formularioEnviado = new Event("formularioEnviado");

boton.addEventListener("formularioEnviado",() => { /*Preguntar mañana si esto está bien */
    console.log("Formulario lanzado con éxito");
})

//Ejercicio 5: Eventos personalizados
//5.1. Crea un nuevo evento personalizado llamado "miEvento" utilizando new CustomEvent().
const miEvento = new CustomEvent("miEvento");
//5.2. Agrega un escuchador de eventos a un elemento HTML (puedes usar un botón) para escuchar el evento "miEvento" y mostrar un mensaje de alerta cuando ocurra.
boton.addEventListener("miEvento",() => {
    alert("El evento miEvento se ha disparado.");
});
//5.3. Dispara manualmente el evento "miEvento" en el elemento y verifica que se muestra el mensaje de alerta.
boton.dispatchEvent(miEvento);