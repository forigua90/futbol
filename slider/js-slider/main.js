$(document).ready(function(){
    /*llamo la clase flesslider y llamo al plugin jquery .flexslider que es una funcion para que las imagenes tomen la funcion de slider*/
    $('.flexslider').flexslider({
        prevText: "", /*modifico el texto de los iconos de las flechas*/
        nextText: "",
        pauseOnAction: false, /*para que no se pause el slider al dar click en los botones de navegacion*/
        slideshowSpeed: 5000, /*tiempo en 1000= 1s para que el slider pase la presentacion*/
        touch:true
    });
});

