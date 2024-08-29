/*Creo una funcion que se ejcutará cuando haga click en el botoncio*/
function muestra_oculta(id) {
    /* Declaro la función y paso parámetro el selector de referencia que quiero ocultar/mostrar*/
    let div = document.getElementById(id);
    /* Uso el conficional if para saberr si el div esta oculto (Display: none) o si esta visible*/
    if (div.style.display == "none"){
        div.style.display = "flex";
    }
    else {
        div.style.display = "none";
    }
}

/*
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-sm').classList.toggle('active');
});
*/
  

