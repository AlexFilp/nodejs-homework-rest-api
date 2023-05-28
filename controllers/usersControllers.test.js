// require("dotenv").config();
// const mongoose = require("mongoose");
// const app = require("../app");
// const request = require("supertest");

// const { DB_HOST, PORT = 3000 } = process.env;

// const { login } = require("./usersControllers");
// const { authenticate } = require("../middlewares");

// app.post("/api/users/login", authenticate, login);

// describe("test login controller", () => {
//   beforeAll(() =>
//     mongoose
//       .connect(DB_HOST)
//       .then(() => {
//         console.log("Database connection successful");
//         app.listen(PORT, () => {
//           console.log(`Server running. Use our API on port: ${PORT}`);
//         });
//       })
//       .catch((error) => {
//         console.log(error.message);
//         process.exit(1);
//       })
//   );
//   afterAll(() => process.exit(1));

//   test("login return status 200", async () => {
//     const response = await request(app).post("/api/users/login");
//     console.log(response.status);
//     expect(response.status).toBe(200);
//   });
// });
