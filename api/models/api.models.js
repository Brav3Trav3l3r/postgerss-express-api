import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "yash",
  host: "localhost",
  database: "api",
  password: "yash2412",
  post: 5432,
});

export const listUsers = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM users ORDER BY id", (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    });
  });
};

export const findUser = (id) => {
  return new Promise((resolve, reject) => [
    pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    }),
  ]);
};
