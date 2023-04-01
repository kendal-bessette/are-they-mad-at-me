// pages/api/sentiment.js
import axios from 'axios';

export default async function handler(req, res) {
  const { text } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-003/completions',
      {
        prompt: `You are an online therapist helping to give your client advice about a message they received. Respond with a thoughtful answer to this question: Is the person who sent this message mad at me: "${text}"?. Your answer should be at least 2 sentences long `,
        max_tokens: 5,
        n: 1,
        stop: null,
        temperature: 0.2,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const sentiment = response.data.choices[0].text.trim();
    res.status(200).json({ sentiment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to analyze sentiment' });
  }
}
