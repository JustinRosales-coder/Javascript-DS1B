let botonRojo = document.getElementById("Naranja");
let botonAzul = document.getElementById("Negro");
let botonVerde = document.getElementById("Amarillo");

botonRojo.addEventListener("click", function() {
    document.body.style.backgroundColor = "orange";
});

botonAzul.addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
});

botonVerde.addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow";
});