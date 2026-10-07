const boton = document.getElementById('botonEstilo')
const parrafo =document.getElementById('parrafo')

boton.addEventListener('click', function(){
    parrafo.style.fontFamily = 'Arial, sans-serif';
    parrafo.style.fontSize = '4 rem';
    parrafo.style.color = '#FF5733';
})


const formulario =document.getElementById('form1')
formulario.addEventListener('submit', function(evento){
    
    evento.preventDefault();
 
    const nombre = formulario.elements['fname'].value;
    const apellido = formulario.elements['lname'].value;

console.log("nombre",nombre)
console.log("apellido", apellido)
})

const botonEnlaces = document.getElementById('botonEnlaces');

botonEnlaces.addEventListener('click', function(){

const enlaces = document.querySelectorAll('a');

const total =enlaces.length ; 

if (total > 0){
    const primerenlace = enlaces[0].href ; 
    const ultimoenlace = enlaces[total-1].href;
    alert(`Total de enlaces: ${total}\nprimerenlace: ${primerenlace}\nultimoenlace: ${ultimoenlace} `);
}
});