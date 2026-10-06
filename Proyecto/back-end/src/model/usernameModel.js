import { getConnection } from '../config/Connection.js';
import sql from 'mssql';

const getAlluser = async () => {
  const pool = await getConnection;
  const result = await pool.request().execute('listar_username');
  return result.recordset;
};

const addUsername = async (username_) => {
  const { name_, name_2, lastname_, lastname_2, document, telephone, username, password } = username_;
  const con = await getConnection;
  await con.request()
    .input('name_', sql.VarChar(30), name_)
    .input('name_2', sql.VarChar(30), name_2)
    .input('lastname_', sql.VarChar(30), lastname_)
    .input('lastname_2', sql.VarChar(30), lastname_2)
    .input('document', sql.BigInt, document)
    .input('telephone', sql.BigInt, telephone)
    .input('username', sql.VarChar(30), username)
    .input('password', sql.VarChar(30), password)
    .execute('insertar_Username');
};

const deleteusername = async (username) => {
  const { document } = username;
  const con = await getConnection;
  await con.request()
    .input('document', sql.BigInt, document)
    .execute('eliminar_Username');
};

const updateUsername = async (document, datos) => {
  const {
    name_,
    name2_,
    lastname_,
    lastname2_,
    telephone,
    type_personfk,
    id_status_fk,
    username
  } = datos;

  const con = await getConnection;
  await con.request()
    .input('document', sql.BigInt, document)
    .input('name_', sql.VarChar(30), name_)
    .input('name2_', sql.VarChar(30), name2_)
    .input('lastname_', sql.VarChar(30), lastname_)
    .input('lastname2_', sql.VarChar(30), lastname2_)
    .input('telephone', sql.VarChar(30), telephone)
    .input('type_personfk', sql.Int, type_personfk)
    .input('id_status_fk', sql.Int, id_status_fk)
    .input('username', sql.VarChar(30), username)
    .execute('actualizar_Username_');
};

export { getAlluser, addUsername, deleteusername, updateUsername };
