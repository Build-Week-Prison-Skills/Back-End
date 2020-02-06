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