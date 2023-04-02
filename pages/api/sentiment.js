// pages/api/sentiment.js
import axios from 'axios';

export default async function handler(req, res) {
  const {text} = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-003/completions',
      {
        prompt: `Is this message Positive, Negative, or Neutral? "${text}"`,
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
    res.status(200).json({sentiment});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Failed to analyze sentiment'});
  }
}
