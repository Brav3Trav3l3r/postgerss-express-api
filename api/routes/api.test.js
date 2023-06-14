import supertest from "supertest";
import server from "../../index";

const requestWithSupertest = supertest(server);

afterEach((done) => {
  // afterEach function is provided by Jest and executes once all tests are finished
  server.close(); // We close the server connection once all tests have finished
  done();
});

test('GET "/users" returns all users', async () => {
  const res = await requestWithSupertest.get("/users");
  expect(res.status).toEqual(200);
  expect(res.type).toEqual(expect.stringContaining("json"));
  expect(res.body).toEqual([
    {
      id: "1",
      name: "Yash",
      email: "yash34@gmail.com",
    },
    {
      id: "2",
      name: "Jhonny",
      email: "jhonnyboy@gmail.com",
    },
  ]);
});

test("GET /users/:id returns given user", async () => {
  const res = await requestWithSupertest.get("/users/1");
  expect(res.status).toEqual(200);
  expect(res.type).toEqual(expect.stringContaining("json"));
  expect(res.body).toEqual([
    {
      id: "1",
      name: "Yash",
      email: "yash34@gmail.com",
    },
  ]);
});

test('DELETE "/users/:id" delete a user', async () => {
  const res = await requestWithSupertest.delete("/users/2");
  expect(res.status).toEqual(200);
  expect(res.type).toEqual(expect.stringContaining("json"));
  expect(res.body).toEqual("Deleted user with id: 2");
});

test('PUT "/users/:id" edit a user', async () => {
  const res = await requestWithSupertest.put("/users/1").send({
    id: 1,
    name: "Jhonny",
    email: "jhonnyboy@gmail.com",
  });
  expect(res.status).toEqual(200);
  expect(res.type).toEqual(expect.stringContaining("json"));
  expect(res.body).toEqual("User modified with id: 1");
});

test('POST "/users add a new user"', async () => {
  const res = await requestWithSupertest.post("/users").send({
    name: "Sunny",
    email: "sunnyleone@hotmail.com",
  });
  expect(res.status).toEqual(200);
  expect(res.type).toEqual(expect.stringContaining("json"));
  expect(res.body).toEqual("User added with id: 15");
});
