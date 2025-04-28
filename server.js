const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for main pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Redirect old routes to sections on the main page
app.get('/about', (req, res) => {
  res.redirect('/#about');
});

app.get('/about.html', (req, res) => {
  res.redirect('/#about');
});

app.get('/services', (req, res) => {
  res.redirect('/#services');
});

app.get('/services.html', (req, res) => {
  res.redirect('/#services');
});

app.get('/contact', (req, res) => {
  res.redirect('/#contact');
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).redirect('/#hero');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
}); 