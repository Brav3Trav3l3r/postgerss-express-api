import {
  listUsers,
  findUser,
  deleteItem,
  editItem,
  addItem,
} from "../models/api.models.js";

export const getUsers = async (req, res) => {
  try {
    const resp = await listUsers();
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getUser = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const resp = await findUser(id);
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const resp = await deleteItem(id);
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const editUser = async (req, res) => {
  const id = req.params.id;
  const detail = req.body;
  try {
    const resp = await editItem(id, detail);
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const addUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const resp = await addItem(name, email);
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).send(error);
  }
};
