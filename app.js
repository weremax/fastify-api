// Require the framework and instantiate it
const fastify = require('fastify');

function build(opts={}) {
    const app = fastify(opts);

    // Declare a route
    app.get('/', async (request, reply) => {
        reply.type('application/json').code(200)
        return { hello: 'world' }
    });

    // Declare additional routes
    app.register(require('./routes/v1/users'), { prefix: '/v1' });

    return app;
}

module.exports = build;
// Run the server!
// fastify.listen(3000, (err) => {
//     if (err) throw err
//     // Server is now listening on ${address}
// });