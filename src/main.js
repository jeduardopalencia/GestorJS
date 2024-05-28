//Importar la clase Tarea desde task.js
import { Tarea } from "./task.js";

//Obtener referencias a los elementos del DOM
const tareaForm = document.getElementById('task-form');
const tareaInput = document.getElementById('task-input');
const tareaList = document.getElementById('task-list');

//Crear array para almacenar las tareas
let tareas = [];

//Función para agregar una nueva tarea
function addTask(descripcion){
    //Crear una nueva instancia de la clase Tarea
    const nuevaTarea = new Tarea(descripcion);

    //Agregar la tarea al array de tareas
    tareas.push(nuevaTarea);

    //Actualizar la lista de tareas en el DOM
    renderTareas();
}

// Función para renderizar la lista de tareas en el DOM
function renderTareas(){
    // Limpiar la lista de tareas del DOM
    tareaList.innerHTML = '';
    // Iterar sobre todas las tareas
    tareas.forEach(tarea =>{
        const li = document.createElement('li');
        li.textContent = tarea.descripcion;
        
        // Botón para eliminar tareas
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.classList.add('eliminar-btn');
        eliminarBtn.addEventListener('click', () =>{
            eliminarTarea(tarea);
        });

        //Agregar clase completado si la tarea esta completa
        if(tarea.completado){
            li.classList.add('completada');
        }

        //Agregar un evento clic para marcar una tarea completada
        li.addEventListener('click', ()=>{
            tarea.tareaCompletada();
            renderTareas();
        });
        
        li.appendChild(eliminarBtn);
        tareaList.appendChild(li);
    });
}

tareaForm.addEventListener('submit', event =>{
    event.preventDefault();
    const descripcion = tareaInput.value.trim();
    if(descripcion !== ''){
        addTask(descripcion);
        tareaInput.value = "";
    }
});

//Función para eliminar una tarea
function eliminarTarea(tareaEliminar){
    tareas = tareas.filter(tarea => tarea !== tareaEliminar);
    renderTareas();
}

//Renderizar la lista de tareas al cargar la página
renderTareas();