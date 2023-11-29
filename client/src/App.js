// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const generateRandomResponse = () => {
    const responses = [
      "I'm sorry, I didn't understand that.",
      "Could you please provide more details?",
      "That sounds interesting!",
      "How can I assist you today?",
      "Tell me more about your order.",
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  const sendMessage = () => {
    const botResponse = generateRandomResponse();

    setChatHistory([...chatHistory, { type: 'user', text: userInput }, { type: 'bot', text: botResponse }]);
    setUserInput('');
  };

  const clearChat = () => {
    setChatHistory([]);
  };

  return (
    <div className="App">
      <header>
        <h1>KFC Bot</h1>
        <img src="/kfc_logo.png" alt="KFC Logo" width="50" height="50" />
      </header>
      <div className="chat-container">
        {chatHistory.slice().reverse().map((message, index) => (
          <div key={index} className={`chat-message ${message.type}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
        <button onClick={sendMessage}>Send</button>
        <button onClick={clearChat}>Clear</button>
      </div>
    </div>
  );
}

export default App;
