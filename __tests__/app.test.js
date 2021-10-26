const tap = require('tap');
const supertest = require('supertest');
const buildFastify = require('../app');

tap.test('quick', x => {
    tap.equal(1, 1);
    x.end();
});


tap.test('GET `/` route', async (t) => {
    const fastify = buildFastify()

    t.teardown(() => fastify.close())

    await fastify.ready()

    const response = await supertest(fastify.server)
        .get('/')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8');
    t.same(response.body, { hello: 'world' });
});

tap.test('GET `/v1/users` route', async (t) => {
    const fastify = buildFastify()
  
    t.teardown(() => fastify.close())
  
    await fastify.ready()
  
    const response = await supertest(fastify.server)
        .get('/v1/users')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8');
    t.same(response.body, { "users": [{
            uid: 1,
            name: 'Christopher',
            email: 'christopher@test.com'
        },{
            uid: 2,
            name: 'Timothy',
            email: 'timothy@test.com'
        }] 
    });
});