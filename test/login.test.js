const request = require('supertest')
const app = require('../server')
describe('login Endpoints', () => {
    it('login user', async() => {
        const res = await request(app)
            .post('/api/auth/signin')
            .send({
                email: 'ejemplo@gmail.com',
                password: 'micontraseña',

            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('accessToken');
    })
})