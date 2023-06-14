import express from "express";
const app = express();
import usersRoutes from './api/routes/api.routes.js'

const port = 3000;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use('/users', usersRoutes)

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});

app.listen(port, () => console.log(`You are listing on port ${port}`));
