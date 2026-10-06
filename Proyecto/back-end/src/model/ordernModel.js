import { getConnection } from "../config/Connection.js";

// Obtener todas las órdenes
const getAllorder = async () => {
  const con = await getConnection;
  const result = await con.request().query('SELECT * FROM order_');
  return result.recordset;
};

// Registrar una nueva orden
 const registrarOrder = async (order) => {
  const { date_, document_person } = order;
  const con = await getConnection();
  await con.request()
    .input('date_', date_)
    .input('document_person', document_person)
    .query('INSERT INTO order_ (date_, document_person) VALUES (@date_, @document_person)');
};

// Actualizar una orden existente
 const actualizarOrder = async (id, order) => {
  const { date_, document_person } = order;
  const con = await getConnection();
  await con.request()
    .input('id', id)
    .input('date_', date_)
    .input('document_person', document_person)
    .query('UPDATE order_ SET date_ = @date_, document_person = @document_person WHERE id_order = @id');
};

// Eliminar una orden
const eliminarOrder = async (id) => {
  const con = await getConnection();
  await con.request()
    .input('id', id)
    .query('DELETE FROM order_ WHERE id_order = @id');
};
export{
    getAllorder,registrarOrder,actualizarOrder,eliminarOrder
}