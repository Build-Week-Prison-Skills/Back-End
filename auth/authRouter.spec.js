const server = require('../api/server')
const request = require('supertest')
const db = require('../data/db-Config')

describe('/login', () => {

    it("token login for prisons is working", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({
    UserName: "bleh",
    Password: "gtg" 
        })
        expect(res.status).toBe(500)
    });
  });


  describe('/register', () => {
//expect failure because of case sensitivity
    it("token login for prisons is working", async () => {
      const res = await request(server)
        .post("/api/auth/register")
        .send({
    UserName: "bleh",
    password: "5555",
    prison_id: 2
        })
        expect(res.status).toBe(500)
    });
  });

  //get prisons by id
  describe('/prisons/id', () => {
      it("getting prisons by id", async () => {
          const res= await request(server)
          .get('/api/auth/prisons/:id')
          .set({
              authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwiaWF0IjoxNTgwODk0NzI0LCJleHAiOjE1ODE0OTk1MjR9.z9x88ehLOB3fdweKxTca37uCZzNTi9DRnnWECOkZzOM'
              //must have valid token to login
          })
          expect(res.status).toBe(500)
      });
  });
  