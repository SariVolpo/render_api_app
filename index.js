const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 10000;

app.get('/apps', async (req, res) => {
  try {
    console.log("connected!!!!!! 😉")    
    const response = await axios.get('https://api.render.com/v1/services', {
      headers: {
        'Authorization': `Bearer ${process.env.RENDER_API_KEY}`,
        'Accept': 'application/json'
      }
    });

    res.json(response.data);
  } catch (err) {
    console.error('Error:', err.response ? err.response.data : err.message);
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});