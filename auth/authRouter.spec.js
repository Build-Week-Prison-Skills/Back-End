const router = require("../api/server");
const prisons= require("../data/Models/Prisons-Model")
const request = require("supertest");
const db = require("../data/db-Config");

// // describe("testing authRouter", () => {

// //     it("get request for prisons is working", async () => {
// //       const res = await request(server)
// //         .get("/prisons/id")
// //         .set({
// //           authorization:
// //             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTgwODk0NzI0LCJleHAiOjE1ODE0OTk1MjR9.z9x88ehLOB3fdweKxTca37uCZzNTi9DRnnWECOkZzOM"
// //         })
// //         .send({
// //             "id":1 
//         })
//          expect(res.status).toBe(404)
//      });
//    });


    describe('/login', () => {

      it("token login for prisons is working", async () => {
        const res = await request(router)
          .post("/api/login")
          .send({
      UserName: "bleh",
      Password: "gtg" 
          })
          expect(res.status).toBe(400)
      });
    });


// beforeEach(async () => {
//     await db('prisons').truncate()
//   })
//   describe('Dogs post', () => {
//       it('inserts a dog', async () => {
//         await request(server)
//         .post('/dogs')
//         .send({
//           name: 'George'
//       })
//       const dogs = await db('dogs')
//       expect(dogs).toHaveLength(1)
//     })

