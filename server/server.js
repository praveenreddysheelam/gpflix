const express = require('express');
const cors = require('cors');
const {OpenAI} = require('openai');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
const openai = new OpenAI({
    apiKey: process.env.API_KEY,
  });
app.post('/api/gpt', async (req, res) => {
    const {query}=req.body;
    const gptResults= await openai.chat.completions.create({
        messages: [{ role: "user", content: query }],
        model: "gpt-3.5-turbo",
      });
    res.json({ result: gptResults.choices?.[0]?.message?.content });
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});