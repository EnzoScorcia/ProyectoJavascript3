let nombre

document.getElementById("submit").onclick = function(){
    nombre = document.getElementById("texto").value;
    document.getElementById("h1").textContent = `Hola ${nombre}`
    localStorage.setItem("nombre", nombre)
}