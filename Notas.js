// Definición de la clase Proyecto: `titulo` = código de la persona que hace la apuesta `local, visitante` = goles del local y del visitante
exports.Notas = function (id_proyecto,alumno,ano) {
    this.id_proyecto = id_proyecto;
    this.alumno = alumno;
    this.ano = ano;
    this.Notas = new Array;
    this.ID = id_proyecto+"-"+alumno+"-"+ano;
    // functions
    this.nuevo_proyecto = nuevo_proyecto;
    this.las_proyecto = las_proyecto;
}

function nuevo_proyecto( Proyecto ) {
    this.Proyecto.push( Proyecto );
}

function los_proyectos () {
    return this.proyectos;
}

