let CantidadAsignaturas=prompt("Digite la cantidad de asignaturas");
let profesor=[];
let numEstudi=[];
let alumnoAsig2=[];
for (let i=0; i<CantidadAsignaturas;i++) {
    let asignatura=prompt("Digite el nombre de la asignatura "+(i+1));
    profesor[i]=[prompt("Nombre del Profesor de: "+asignatura)];
    numEstudi[i]=[prompt("¿Cual es la cantidad de estudiantes admitidos en: "+asignatura+"?")];
    document.write("La asignatura es: "+asignatura," el profesor es: "+profesor[i]+" , la cantidad de estudiantes permitidos es: "+numEstudi[i]+" y los estudiantes registrados son: "+"<br>");
    for (let j = 0; j <numEstudi[i]; j++) {
        let alumnoAsig2=prompt("Digite los estudiantes a registrar de "+asignatura);
        document.write(alumnoAsig2+"<br>");
    }
}