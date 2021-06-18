let asignatura=prompt("Digite el nombre de la asignatura ");
let cantidadNotas=prompt("Digite la cantidad de notas de "+asignatura);
let notasEstudi=[];
document.write("Las notas de "+asignatura+" son: "+"<br>");
for (let i = 0; i <cantidadNotas; i++) {
    notasEstudi[i]=prompt("Digite la nota "+(i+1));
    document.write(notasEstudi[i]+"<br>");
}
let suma1=0;
for (let i = 0; i <cantidadNotas; i++) {
    suma1+=Number(notasEstudi[i])
}
let promedio= suma1/cantidadNotas;
document.write("El promedio es: "+promedio);
if (promedio<3) {
    document.write("REBROBÓ");
}