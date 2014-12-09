// Definición de la clase Proyecto: `quien` = código de la persona que hace la apuesta `local, visitante` = goles del local y del visitante
exports.Proyecto = function (id_proyecto,titulo,materia,ubicacion) {
    this.id_proyecto=id_proyecto;
    this.titulo = titulo;
    this.materia= materia;
    this.ubicacion= ubicacion;
    this.as_string = as_string;
}

// Devuelve el proyecto como una cadena 
function as_string() {
    return this.titulo + ": " + this.materia + " - " + this.ubicacion;
}
