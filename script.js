 // Obtener referencias a los elementos del DOM
 const parrafo = document.getElementById('miParrafo');
 const boton = document.getElementById('miBoton');

 // Función para cambiar el estilo del párrafo
 function cambiarEstilo() {
   // Cambiar el color de párrafo
   parrafo.style.color = 'orange';
  
 }

 // Agregar un event listener al botón
 boton.addEventListener('click', cambiarEstilo);