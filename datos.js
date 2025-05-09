function guardarNombre() {
    let nombreIngre=document.getElementById("nombreIngre").value;
    document.getElementById("resultado").textContent = "Nombre de estudiante: " + nombreIngre;
}

let nota1, nota2, nota3;

function promedio(){

    let prome=(nota1+nota2+nota3)/3;
    document.write("Su nota final es: "+prome.toFixed(2));
}

guardarNombre();
promedio();