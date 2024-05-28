//Definir la clase Task
export function Tarea(descripcionTarea){
    this.descripcion = descripcionTarea;
    this.completado = false;
}

//Método para marcar la tarea como completada
Tarea.prototype.tareaCompletada = function(){
    //cambiar el estado a true
    this.completado = !this.completado;
}

