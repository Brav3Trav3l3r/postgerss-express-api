import express from "express";
const app = express();
import usersRoutes from './api/routes/api.routes.js'
import { Server } from 'http';

const server = new Server(app);

const port = 3000;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use('/users', usersRoutes)

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});

server.listen(port, () => console.log(`You are listing on port ${port}`));

export default server