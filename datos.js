let nombre,materia;

function guardarNombre() {
    nombre=prompt("Ingrese el nombre del estudiante");
}

function guardarMateria() {
    materia=prompt("Ingrese el nombre de la materia");
}

let nota1, nota2, nota3;

function promedio(){
    nota1=prompt("Ingrese primer nota");
    nota2=prompt("Ingrese segunda nota");
    nota3=prompt("Ingrese tercer nota");

    nota1=Number(nota1);
    nota2=Number(nota2);
    nota3=Number(nota3);

    let prome=(nota1+nota2+nota3)/3;

    document.write("PROMEDIO DEL ESTUDIANTE<br><br>");
    document.write("Nombre del estudiante: "+nombre+"<br>");
    document.write("Materia: "+materia)+"<br>";
    document.write("<br>"+"Su nota final es: "+prome.toFixed(2)+"<br>");
}



guardarNombre();
guardarMateria();
promedio();