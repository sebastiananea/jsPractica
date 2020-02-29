const btnProhibido = document.querySelector('.btn-hide');
const pOculto = document.querySelector('.esconder');
const nowWhat = document.getElementById('nowWhat');
const btnJugar = document.getElementById('jugar');
const preguntas = document.querySelector('.pregunta');
const respMau = document.querySelector('.btn-mau');
const respCaja = document.querySelector('.btn-caja');
const respJesus = document.querySelector('.btn-jesus');
const respuesta = document.querySelector('.respuesta');

//revela el contenido al hacer click
btnProhibido.addEventListener("click", ()=>{
    pOculto.classList.remove('esconder');
    nowWhat.classList.remove('esconder');
    btnProhibido.classList.add('esconder');
})

//Revela la pregunta al hacer click
btnJugar.addEventListener('click', ()=>{
    nowWhat.classList.add('esconder');
    preguntas.classList.remove('esconder');
})

respMau.addEventListener('click', ()=>{
    respuesta.textContent = 'No! Será un gran lider, pero aun no descubrió la forma de revivir a un gato'
});

respCaja.addEventListener('click', ()=>{
    respuesta.textContent = 'Correcto! Actualmente, la unica manera que tenemos de "revivir", es poniendo una caja encima y alegamos que estamos tanto vivos como muertos! Muajaja'
});

respJesus.addEventListener('click', () =>{
    respuesta.textContent = 'Oh lala señor Religioso. Usted quiere revivir al gato o convertir el agua en vino? Perdiste por fiestero y ratón!'
});