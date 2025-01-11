const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle form submission
app.post('/recommend', (req, res) => {
    const { interests, skills } = req.body;

    // Simple recommendation logic
    const recommendations = `Based on your interests in "${interests}" and skills in "${skills}", 
    we recommend exploring roles in technology, project management, and online courses related to your fields.`;

    res.json({ recommendations });
});

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});