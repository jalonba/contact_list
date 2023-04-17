function Contacto(id, nombre, apellido, telefono, ubicacion) {
  const { ciudad, direccion } = ubicacion;
  this.id = id;
  this.nombre = nombre;
  this.apellido = apellido;
  this.telefono = telefono;
  this.ubicacion = {
    ciudad,
    direccion,
  };
}

module.exports = {
  Contacto,
};
