import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "yash",
  host: "localhost",
  database: "api",
  password: "yash2412",
  post: 5432,
});

export const listUsers = async () => {
  // return new Promise((resolve, reject) => {
  //   pool.query("SELECT * FROM users ORDER BY id", (error, results) => {
  //     if (error) {
  //       reject(error);
  //     } else {
  //       resolve(results.rows);
  //     }
  //   });
  // });

  try {
    const result = await pool.query("SELECT * FROM users ORDER BY id");
    return result.rows;
  } catch (error) {
    throw error;
  }
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

export const deleteItem = (id) => {
  return new Promise((resolve, reject) => {
    pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(`Deleted user with id: ${id}`);
    });
  });
};

export const editItem = (id, name, email) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "UPDATE users SET email = $3, name = $2 WHERE id = $1",
      [id, name, email],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`User modified with id: ${id}`);
      }
    );
  });
};

export const addItem = (name, email) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "INSERT INTO users (name, email) VALUES ( $1, $2) RETURNING *",
      [name, email],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`User added with id: ${results.rows[0].id}`);
      }
    );
  });
};
