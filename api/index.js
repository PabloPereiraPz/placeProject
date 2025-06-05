const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const dbPath = path.join(__dirname, 'db.production.json');
const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();

// Log para debug
console.log('DB Path:', dbPath);
console.log('DB Content:', require(dbPath));

server.use(middlewares);

// Add CORS headers
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

server.use('/api', router);

// Error handling
server.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
});

module.exports = server;
