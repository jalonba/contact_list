const { Contacto } = require("./types.js");
const contacto_1 = new Contacto(0, "Juan", "Perez", 31418597485, {
  city: "Villavicencio",
  direccion: "Cll 21 15 42",
});
const contacto_2 = new Contacto(1, "Carlos", "Jerez", 3207854198, {
  city: "Cartagena",
  direccion: "Cll 52 85 96",
});
const contacto_3 = new Contacto(2, "Jairo", "Baquero", 3118579647, {
  city: "Medellin",
  direccion: "Cll 5 14 06",
});

let mis_contactos = [contacto_1, contacto_2, contacto_3];

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
