const {
  mostrarContactoPorId,
  mostrarContactos,
  crearContacto,
  editarContacto,
  eliminarContacto,
  mis_contactos,
} = require("./function");

const { Contacto } = require("./types");

mostrarContactos(mis_contactos);
mostrarContactoPorId(2, mis_contactos);

crearContacto(
  new Contacto(3, "Alex", "Acevedo", 97366673, {
    city: "Medellin",
    address: "Carrera 111B",
  })
);
mostrarContactos(mis_contactos);

const contacto_editado = new Contacto(2, "Camilo", "Celis", 3125874154, {
  ciudad: "Pasto",
  direccion: "Cra 5 85 74",
});
editarContacto(contacto_editado);
mostrarContactos(mis_contactos);

eliminarContacto(3);
mostrarContactos(mis_contactos);
console.log("Ejercicio resuelto");
