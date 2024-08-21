import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Chat.css';
import { useAuthContext } from '../../context/UseAuthContext';
import CardComponent from './Cards';
const Chat = () => {
    const { user, logout } = useAuthContext();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (!user) {
    //         navigate('/login');
    //     }
    // }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { sender: 'user', text: input };
        setMessages([...messages, userMessage]);
        setInput('');

const response = await axios.get(`https://umirvbrpsk-496ff2e9c6d22116-5000-colab.googleusercontent.com/query`,{
    params:{
        text:input
    }
});
        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');

        const readStream = async () => {
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const text = decoder.decode(value);
                const chembotMessage = { sender: 'Chembot', text };
                setMessages((prevMessages) => [...prevMessages, chembotMessage]);
            }
        };

        readStream();
    };

    // <<<<<<<<<<<<<<<<Card Component visibility>>>>>>>>>>>>>>>>>>>>>>>
    const [isCardVisible, setIsCardVisible] = useState(true);

  const handleSendMessage = async (message) => {
    
    setIsCardVisible(false);


        const userMessage = { sender: 'user', text: message};
        setMessages([...messages, userMessage]);

const response = await axios.get(`https://umirvbrpsk-496ff2e9c6d22116-5000-colab.googleusercontent.com/query`,{
    params:{
        text:message
    }
});
  };

    return (
        <div className="chat-container">
            <nav className="navbar">
                <h1>Chembot</h1>
                <button onClick={logout} className="logout-button">Logout</button>
            </nav>
            <div className="chat-content">
                <div className="chat-window">
                {isCardVisible &&
                <div className="icon">
                    
            <img src="data:image/png;base64,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" alt="ChatGPT Icon" ></img> {/* Replace with actual icon URL */}
          </div>}
                <div className='Cards'>
                {isCardVisible && <CardComponent onSendMessage={handleSendMessage} />}
                    </div>
                    {messages.map((msg, index) => (
                        <div key={index} className={`chat-message ${msg.sender}`}>
                            
                            <div className="message-content">{msg.text}</div>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="chat-form">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button className="sendbtn" type='submit'>
                    &#x27A4;
                </button>
                </form>
            </div>
        </div>
    );
};

export default Chat;
