const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Enable JSON parsing for API requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Catch-all route to handle SPA routing if needed
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: './public' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 