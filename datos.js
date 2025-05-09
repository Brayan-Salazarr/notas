function guardarNombre() {
    let nombreIngre=document.getElementById("nombreIngre").value;
    document.getElementById("resultado").textContent = "Nombre de estudiante: " + nombreIngre;
}

let nota1, nota2, nota3;

function promedio(){
    nota1=prompt("Ingrese primer nota")
    nota2=prompt("Ingrese segunda nota")
    nota3=prompt("Ingrese tercer nota")

    let prome=(nota1+nota2+nota3)/3;
    document.write("Su nota final es: "+prome.toFixed(2));
}

guardarNombre();
promedio();