const { Contacto } = require("./types.js");
const crearContacto = (id, nombre, apellido, telefono, ubicacion) => {
  const { city, direccion } = ubicacion;
  const nuevoContacto = new Contacto(id, nombre, apellido, telefono, {
    city: city,
    direccion: direccion,
  });

  mis_contactos.push(nuevoContacto);
  console.log("Contacto creado correctamente");
};

let mis_contactos = [];

const mostrarContactos = (contactos) => {
  console.log("Información mostrada correctamente");
  console.log(contactos);
};

const mostrarContactoPorId = (id, lista_contactos) => {
  mostrarContactos(lista_contactos[id]);
};

let editarContacto = (modificacion) => {
  const { id, nombre, apellido, telefono, ubicacion } = modificacion;
  const { ciudad, direccion } = ubicacion;
  let encontrado = mis_contactos.filter((contacto) => contacto.id === id)[0];
  if (nombre && apellido && telefono && ciudad && direccion && encontrado) {
    encontrado.nombre = nombre;
    encontrado.apellido = apellido;
    encontrado.telefono = telefono;
    encontrado.ubicacion = ubicacion;
    console.log("Contacto editado correctamente");
  } else {
    console.log(
      "El id que trata de buscar no existe o algunos campos estan vacios"
    );
  }
};

const eliminarContacto = (id) => {
  const contacto_encontrado = mis_contactos.filter(
    (contacto) => contacto.id === id
  )[0];

  if (contacto_encontrado) {
    mis.contactos.splice(id, 1);
    console.log("Contacto eliminado exitosamente");
  } else {
    console.log("El contacto que tratas de eliminar no existe");
  }
};

module.exports = {
  mostrarContactoPorId,
  mostrarContactos,
  crearContacto,
  editarContacto,
  eliminarContacto,
  mis_contactos,
};
