import { getConnection } from "../config/Connection.js";

// Obtener todos los productos
const getAllProductos = async () => {
  const con = await getConnection;
  const result = await con.request().query('SELECT * FROM product_');
  return result.recordset;
};

// Registrar un nuevo producto
const registrarProductoModel = async (producto) => {
  const con = await getConnection;
  const query = `
    INSERT INTO product_ (nombre, descripcion, precio, cantidad_inventario, talla, color, order_idfk)
    VALUES (@nombre, @descripcion, @precio, @cantidad_inventario, @talla, @color, @order_idfk)
  `;
  await con.request()
    .input('nombre', producto.nombre)
    .input('descripcion', producto.descripcion)
    .input('precio', producto.precio)
    .input('cantidad_inventario', producto.cantidad_inventario)
    .input('talla', producto.talla)
    .input('color', producto.color)
    .input('order_idfk', producto.order_idfk)
    .query(query);
};

// Actualizar producto por ID
const actualizarProductoModel = async (id, producto) => {
  const con = await getConnection;
  const query = `
    UPDATE product_
    SET nombre = @nombre,
        descripcion = @descripcion,
        precio = @precio,
        cantidad_inventario = @cantidad_inventario,
        talla = @talla,
        color = @color,
        order_idfk = @order_idfk
    WHERE id_product = @id
  `;
  await con.request()
    .input('nombre', producto.nombre)
    .input('descripcion', producto.descripcion)
    .input('precio', producto.precio)
    .input('cantidad_inventario', producto.cantidad_inventario)
    .input('talla', producto.talla)
    .input('color', producto.color)
    .input('order_idfk', producto.order_idfk)
    .input('id', id)
    .query(query);
};

// Eliminar producto por ID
const eliminarProductoModel = async (id) => {
  const con = await getConnection;
  await con.request()
    .input('id', id)
    .query('DELETE FROM product_ WHERE id_product = @id');
};

export {
  getAllProductos,
  registrarProductoModel,
  actualizarProductoModel,
  eliminarProductoModel
};
