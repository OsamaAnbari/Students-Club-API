const request = require('supertest')
const app = require('../app')

describe('POST signin', () => {
    it('Should signin admin', async () => {

        const res = await request(app)
        .post('/login/admin')
        .send({
            "tc" : "999870",
            "password" : "asdasdasd"
        })
        
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Login successful')
    })
})