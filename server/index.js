import express from 'express';

// Initialize the Express app
const app = express();

// Add a route handler
app.get('/', (req, res) => {
    res.send('Hello world');
});

// Start the server on port 9000
const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
