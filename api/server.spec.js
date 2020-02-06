const server = require('../api/server')
const request = require('supertest')
const db = require('../data/db-Config')

describe('server.js module', () => {
    it('has the right environment for DB_ENV', () => {
      expect(process.env.DB_ENV).toBe('testing')
    })
})
describe('test test', () => {

    it('returns a 200 OK async/await', async () => {
      const res = await request(server).get('/')
      expect(res.status).toBe(200)
    })

    it('returns the right body', () => {
        return request(server).get('/')
          .expect({ api: 'test test' })
      })

      

      it('returns the right headers', () => {
        // multi-assertion test
        return request(server).get('/')
          .expect('Content-Length', '19')
          .expect('Content-Type', /json/)
      })
    });


    it('returns a 200, sanity check', () => {
      return request(server).get('/')
        .expect(200)
    })
