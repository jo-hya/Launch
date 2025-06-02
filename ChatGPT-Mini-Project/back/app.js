import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: 'messages must be an array' });
    }

    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages,
    });

    const reply = completion.data.choices[0].message;
    res.json({ reply });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'OpenAI request failed' });
  }
});

app.listen(port, () => {
  console.log(`🚀  Server running on http://localhost:${port}`);
});
