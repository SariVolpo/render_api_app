const express = require('express');
const sdk = require('api')('@render-api/v1.0#dnv3m1pl9q6m88');

const app = express();
const PORT = process.env.PORT || 3000;

// במקום לכתוב את המפתח ישירות, אנחנו קוראים אותו ממשתני הסביבה
sdk.auth(process.env.RENDER_API_KEY);

app.get('/apps', async (req, res) => {
  try {
    // קריאה ל-API של Render לקבלת רשימת השירותים (Services)
    console.log("connected!!!")
    
    const { data } = await sdk.listServices({ limit: '20' });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch services from Render' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});