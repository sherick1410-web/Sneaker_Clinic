import { getAlltype } from '../model/type_personModel.js';

const getAlltype_person= async (req, res) => {
  try {
    const type_person = await getAlltype();
    res.json(type_person);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAlltype_person};
