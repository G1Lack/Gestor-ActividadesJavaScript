const gestorActividades = {
actividades: [],
  
    // Función para agregar actividades
agregarActividad: function (nombre) {
if (this.actividades.length < 10) {
    this.actividades.push({ nombre, completado: false });
    console.log(`Actividad "${nombre}" agregada.`);
} else {
    console.log("Ya has agregado 10 actividades.");
    }
},
  
completarActividad: function (indice) {
if (indice >= 0 && indice < this.actividades.length) {
    this.actividades[indice].completado = true;
    console.log(`Actividad "${this.actividades[indice].nombre}" completada.`);
} else {
    console.log("Índice de actividad no válido.");
    }
},
  
mostrarEstado: function () {
console.log("\nActividades Completadas:");
this.actividades.forEach((actividad, index) => {
    if (actividad.completado) {
        console.log(`${index + 1}. ${actividad.nombre}`);
    }
});
  
console.log("\nActividades Pendientes:");
this.actividades.forEach((actividad, index) => {
    if (!actividad.completado) {
        console.log(`${index + 1}. ${actividad.nombre}`);
       }
    });
  },
};
  
gestorActividades.agregarActividad("Despertar");
gestorActividades.agregarActividad("Hacer ejercicio");
gestorActividades.agregarActividad("Ducha matutina");
gestorActividades.agregarActividad("Desayuno");
gestorActividades.agregarActividad("Trabajar en el proyecto");
gestorActividades.agregarActividad("Revisar correos");
gestorActividades.agregarActividad("Almorzar");
gestorActividades.agregarActividad("Leer un libro");
gestorActividades.agregarActividad("Cenar");
gestorActividades.agregarActividad("Ir a dormir");

gestorActividades.completarActividad(1); // Completar "Hacer ejercicio"
gestorActividades.completarActividad(4); // Completar "Trabajar en el proyecto"
gestorActividades.completarActividad(7); // Completar "Leer un libro"
  
gestorActividades.mostrarEstado();
  