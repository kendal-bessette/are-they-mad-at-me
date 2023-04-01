/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import axios from 'axios';
import { Title, Container, Form, Description, TextArea, SubmitButton, ConfirmationMessage, Page } from './api/home';

export default function Home () {
  const [text, setText] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const positiveResponses = [
    "They're obsessed with you!",
    'No way',
    'Positivity is radiating from this text.',
    'These vibes are good',
    'This message is like a warm hug.',
    "It's all smiles and sunshine!",
    'Nothing but love in this message!',
    'A wave of happiness just rolled in.'
  ];

  const negativeResponses = [
    'Negativity is lurking in these words.',
    'A touch of sourness in the air.',
    'This message is like a cold shower.',
    "It's hard to ignore the negative vibe.",
    'This message might carry a grudge.',
    'The message has a somewhat prickly feel.',
    'Unfortunately, the sender of this message might hate you.',
    'The words carry a gloomy undertone.',
    'A whiff of bitterness in this text.',
    'Oh, they just LOVE you... not.',
    "It's like they're your biggest fan – or not.",
    'Wow, they must adore you... in an alternate universe.',
    'This message is as positive as a rainy day.',
    "They're practically singing your praises – if you read between the lines."
  ];

  const neutralResponses = [
    'Hard to say',
    'Probably not, but also probably not not.',
    'No way to know ❤️',
    "50 shades of 'meh' – hard to tell.",
    "A bit ambiguous, don't you think?",
    "The jury's still out on this one.",
    'Switzerland in text form – neutral.',
    "It's like a balancing act – right in the middle."

  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/sentiment', { text });
      const sentiment = response.data.sentiment;
      let randomResponse;
      switch (sentiment) {
        case 'Positive':
          randomResponse = positiveResponses[Math.floor(Math.random() * positiveResponses.length)];
          break;
        case 'Negative':
          randomResponse = negativeResponses[Math.floor(Math.random() * negativeResponses.length)];
          break;
        case 'Neutral':
          randomResponse = neutralResponses[Math.floor(Math.random() * neutralResponses.length)];
          break;
        default:
          randomResponse = 'Unable to determine sentiment.';
      }

      setConfirmationMessage(randomResponse);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <React.Fragment>
    <Page>
    <Container>
      <Title>Are They Mad at Me?</Title>
        <Description>
        Ever received a message, email, or DM and wondered if the person was mad at you?
        Well, wonder no more! Our delightful little tool is here to analyze the sentiment
        of your text and give you a hint of what's going on. Go ahead, copy and paste that
        cryptic message, and let's crack the code together! 🕵️‍♀️🔍
        </Description>
          <Form onSubmit={handleSubmit}>
            <TextArea
            placeholder="Enter text message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            />
            <SubmitButton type="submit" disabled={loading}>
            Give it to me
            </SubmitButton>
          </Form>
      {confirmationMessage && <ConfirmationMessage>{confirmationMessage}</ConfirmationMessage>}
      </Container>
            </Page>
            </React.Fragment>
  );
};
