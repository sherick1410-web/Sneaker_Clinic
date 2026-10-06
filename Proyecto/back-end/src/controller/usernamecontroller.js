import { getAlluser, addUsername, deleteusername, updateUsername } from '../model/usernameModel.js';

const getAllu = async (req, res) => {
  try {
    const users = await getAlluser();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addu = async (req, res) => {
  try {
    console.log('Datos recibidos:', req.body);
    await addUsername(req.body);
    res.status(201).json({ message: 'Username registrado' });
  } catch (error) {
    console.error('Error al insertar usuario:', error);
    res.status(500).json({ message: error.message });
  }
};

const deleteU = async (req, res) => {
  try {
    await deleteusername(req.params);
    res.status(201).json({ message: 'Username eliminado' });
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).json({ message: error.message });
  }
};

const updateU = async (req, res) => {
  const { document } = req.params;
  const datosActualizados = req.body;

  try {
    console.log('Actualizando documento:', document);
    console.log('Datos nuevos:', datosActualizados);
    
    await updateUsername(document, datosActualizados);
    res.status(200).json({ message: 'Usuario actualizado correctamente' });
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ message: error.message });
  }
};

const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const users = await getAlluser();
    const user = users.find(
      (u) => u.username === username && u.password_ === password
    );

    if (!user) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    if (user.type_personfk !== 3) {
      return res.status(403).json({ message: 'Acceso denegado: no es administrador' });
    }

    res.json({
      message: 'Acceso permitido',
      user: {
        username: user.username,
        name: user.name_,
        role: user.type_personfk,
        document: user.document
      }
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllu, addu, deleteU, updateU, loginAdmin };
