import { listUsers, findUser } from "../models/api.models.js";

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
    req.status(500).send(error);
  }
};
