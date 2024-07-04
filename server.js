const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(
    express.static(
        path.join(__dirname, 'public')
    )
);

// Default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Static file server is running at http://localhost:${PORT}`);
});