import openai from 'openai';
import { useState, useEffect } from 'react';

export const Respose = () => {
  const [response, setResponse] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    openai.apiKey = "d8e65982db9d47669aa4323d0fa0c2ee";
    openai
      .Completion
      .create({
        engine: "text-davinci-002",
        prompt: prompt,
      })
      .then(response => {
        console.log(response);
        setResponse(response.choices[0].text);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={prompt} onChange={e => setPrompt(e.target.value)} />
      <button type="submit">Submit</button>
    </form>

  )
}

