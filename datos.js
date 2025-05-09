function guardarNombre() {
    let nombre=prompt("Ingrese el nombre del estudiante");
}

function guardarMateria() {
    let materia=prompt("Ingrese el nombre de la materia");
}

let nota1, nota2, nota3;

function promedio(){

    let prome=(nota1+nota2+nota3)/3;
    document.write("Su nota final es: "+prome.toFixed(2));
}

guardarNombre();
guardarMateria();
promedio();