import React, { useState, useRef, useEffect } from 'react';
import { sendMessage } from '../services/api';
import './ChatInterface.css';

export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isBackendConnected, setIsBackendConnected] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    checkBackendConnection();
  }, []);

  const checkBackendConnection = async () => {
    try {
      const response = await fetch('http://localhost:3001/health');
      setIsBackendConnected(response.ok);
    } catch (error) {
      setIsBackendConnected(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputMessage,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await sendMessage({
        message: inputMessage,
        conversationHistory: messages,
      });

      setIsBackendConnected(true);

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: response.message,
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error: any) {
      setIsBackendConnected(false);
      console.error('Error sending message:', error);
      setError(error.message || 'Failed to send message');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  const formatTimestamp = (timestamp: Date) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="chat-interface">
      <div className="connection-status">
        <span className={`status-indicator ${isBackendConnected === true ? 'connected' : isBackendConnected === false ? 'disconnected' : 'checking'}`}>
          {isBackendConnected === true ? '🟢 AI Connected' : isBackendConnected === false ? '🔴 Offline Mode' : '🔵 Checking...'}
        </span>
      </div>

      <div className="chat-header">
        <h2>🎓 UNSW Academic Advisor</h2>
        <p>Ask me anything about your studies, courses, or academic planning!</p>
      </div>

      <div className="messages-container">
        {messages.length === 0 && (
          <div className="welcome-message">
            <div className="assistant-message">
              <div className="message-content">
                <p>👋 Hello! I'm your AI academic advisor for UNSW.</p>
                <p>I can help you with:</p>
                <ul>
                  <li>📚 Course selection and planning</li>
                  <li>🎯 Degree requirements</li>
                  <li>📖 Study strategies</li>
                  <li>🏛️ Campus resources</li>
                  <li>💼 Career guidance</li>
                </ul>
                <p>What would you like to know about your academic journey?</p>
              </div>
            </div>
          </div>
        )}

        {messages.map((message) => (
          <div key={message.id} className={`message ${message.role}-message`}>
            <div className="message-content">
              <p>{message.content}</p>
              <span className="message-timestamp">
                {formatTimestamp(message.timestamp)}
              </span>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="message assistant-message">
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="error-message">
            <p>❌ {error}</p>
            <button onClick={() => setError(null)}>Dismiss</button>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="input-form">
        <div className="input-container">
          <textarea
            ref={textareaRef}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about courses, degree requirements, study tips..."
            disabled={isLoading}
            rows={1}
            className="message-input"
          />
          <button
            type="submit"
            disabled={!inputMessage.trim() || isLoading}
            className="send-button"
          >
            {isLoading ? '⏳' : '📤'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface; 