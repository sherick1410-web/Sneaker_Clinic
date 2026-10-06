import { getConnection } from '../config/Connection.js';

const getAlltype = async () => {
  const pool = await getConnection;
  const result = await pool.request().query('SELECT * FROM type_person');
  return result.recordset;
};

export { getAlltype};
