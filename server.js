const server = require('./app')({
    logger: {
        level: 'info'
    }
});

// Run the server!
server.listen(3000, (err, address) => {
    if (err) throw err
    // Server is now listening on ${address}
});