import { Link } from 'react-router-dom';
import ChatInterface from '../../components/ChatInterface';
import './ChatPage.css';

const ChatPage = () => {
  return (
    <div className="chat-page">
      <div className="chat-page-header">
        <Link to="/dashboard" className="back-button">
          ← Back to Dashboard
        </Link>
      </div>
      <ChatInterface />
    </div>
  );
};

export default ChatPage;