const fastify = require('fastify')();

const usersList = [{
    uid: 1,
    name: 'Christopher',
    email: 'christopher@test.com'
},{
    uid: 2,
    name: 'Timothy',
    email: 'timothy@test.com'
}];


// routes/v1/users.js
module.exports = function (fastify, opts, done) {
    fastify.get('/users', async (request, reply) => {
        reply.type('application/json').code(200);
        return { users: usersList };
    });
    done();
  };