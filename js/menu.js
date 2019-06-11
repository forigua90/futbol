var btnmenu = document.getElementById('btnmenu');
var menu = document.getElementById('menu');

btnmenu.addEventListener('click', mostrarMenu);

/*FUNCION PARA EL DESPLEGUE DEL MENU*/
function mostrarMenu() {
    'use strict';
    menu.classList.toggle('mostrar'); /*ejecuta la clase de css .mostrar*/
}
