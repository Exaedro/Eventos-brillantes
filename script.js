const modoOscuro = document.querySelector('.modo-oscuro');
const navegacion = document.querySelector('.navegacion');

modoOscuro.addEventListener('click', () => {
    document.documentElement.classList.toggle('oscuro');
    navegacion.classList.toggle('oscuro');
});