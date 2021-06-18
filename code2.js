let cantidadAlumnos=prompt("¿Cuantos estudiantes hay en la clase?");
let alumnosAsignatura=[];
for (let i=0; i<cantidadAlumnos;i++) {
    alumnosAsignatura[i]=[prompt("Nombre estudiante "+(i+1)),0];
}

const tomarAsistencia=(nombre,posicion)=>{
    let presente=prompt("¿El estudiante "+nombre+" esta presente o ausente (p/a)?");
    if (presente=="p" || presente=="P") {
        alumnosAsignatura[posicion][1]++;
    }
}
for (let i=0; i<10;i++) {
    for (alumno in alumnosAsignatura) {
        tomarAsistencia(alumnosAsignatura[alumno][0],alumno);
    }
}

for (alumno in alumnosAsignatura){
    let resultado=`${alumnosAsignatura[alumno][0]}:<br>
Presentes: ${alumnosAsignatura[alumno][1]}<br>
Ausencias: ${10-alumnosAsignatura[alumno][1]}`;
if (10-alumnosAsignatura[alumno][1]>3) {
    resultado+="<b>REPROBADO POR INASISTENCIA</b></br>"
} else{
    resultado+="<br><br>";
}
document.write(resultado);
}
