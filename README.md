# Anti-Fraud AI Assistant

An AI-powered anti-fraud Q&A system designed to help users identify and prevent various types of fraud. This system provides intelligent anti-fraud guidance, including common fraud type identification, prevention measures, emergency response procedures, and more.

## 🚀 Features

- **AI-Powered Chat Interface**: Real-time conversation with an anti-fraud AI assistant
- **Comprehensive Anti-Fraud Guidance**: Fraud identification, prevention measures, emergency response
- **Real-time Connection Status**: Visual indicator of AI service availability
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Error Handling**: Robust error handling with user-friendly messages
- **Fallback Mode**: Graceful degradation to mock service when backend is unavailable

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Axios** for API communication
- **CSS3** with modern animations and responsive design

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **OpenAI API** for AI-powered responses
- **Helmet** for security headers
- **Rate limiting** for API protection

## 📋 Prerequisites

- Docker and Docker Compose (recommended)
- OR Node.js 18+ and npm (for local development)
- OpenAI API key (for AI functionality)
- Git

## 🚀 Quick Start

### Option 1: Docker (Recommended)

The easiest way to run the application is using Docker:

```bash
# Clone the repository
git clone <repository-url>
cd intelligent-academic-advisor

# Start the application with Docker
docker-compose up --build
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Chat Interface: `http://localhost:5173/chat`
- Backend API: `http://localhost:3001`

To stop the application:
```bash
docker-compose down
```

### Option 2: Local Development

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd intelligent-academic-advisor
```

#### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create environment file
cp env.example .env

# Edit .env file with your OpenAI API key
OPENAI_API_KEY=your_openai_api_key_here

# Start development server
npm run dev
```

The backend will be available at `http://localhost:3001`

#### 3. Frontend Setup

```bash
cd frontend/frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:5173`
Chat interface: `http://localhost:5173/chat`

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```env
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
OPENAI_API_KEY=your_openai_api_key_here
```

#### Frontend (.env)
```env
VITE_API_BASE_URL=http://localhost:3001/api
VITE_USE_MOCK_SERVICE=false
```

### OpenAI API Setup

1. Sign up for an OpenAI account at [https://platform.openai.com](https://platform.openai.com)
2. Generate an API key in your account settings
3. Add the API key to your backend `.env` file

## 🎯 Usage

### For Users

1. **Open the Chat Interface**: Navigate to `http://localhost:5173/chat`
2. **Start a Conversation**: Type your anti-fraud questions in the chat interface
3. **Get AI Guidance**: Receive personalized advice on:
   - Common fraud type identification
   - Prevention measures and tips
   - Emergency response procedures
   - Safe internet browsing guidelines
   - Reporting channels information

### Example Questions

- "How to identify phishing scams?"
- "What should I do if I receive a suspicious phone call?"
- "How to avoid fraud when shopping online?"
- "What are the characteristics of investment fraud?"
- "What should I do if my personal information is compromised?"

## 🔄 System Flow

1. **User Input**: User types a question in the chat interface
2. **Frontend Processing**: Message is sent to the backend API
3. **AI Processing**: Backend calls OpenAI API with anti-fraud context
4. **Response Generation**: AI generates personalized anti-fraud advice
5. **Response Display**: Answer is shown in the chat interface
6. **Fallback Handling**: If backend is unavailable, mock service provides responses

## 🛡️ Error Handling

The system includes comprehensive error handling:

- **Network Errors**: Automatic fallback to mock service
- **API Errors**: User-friendly error messages
- **Rate Limiting**: Protection against API abuse
- **Connection Status**: Visual indicator of service availability

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm test
```

### Frontend Testing
```bash
cd frontend/frontend
npm test
```

## 📦 Production Deployment

### Docker Production
```bash
# Build and run in production mode
docker-compose -f docker-compose.prod.yml up --build -d
```

### Manual Deployment

#### Backend Deployment
```bash
cd backend
npm run build
npm start
```

#### Frontend Deployment
```bash
cd frontend/frontend
npm run build
# Deploy dist/ folder to your web server
```

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](contributing.md) for details on how to participate in the project development.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter issues or have suggestions, please:

1. Check the [Issues](../../issues) page
2. Create a new Issue
3. Contact the project maintainers

## ⚠️ Disclaimer

The anti-fraud advice provided by this system is for reference only and should not replace professional legal advice. When encountering suspicious fraud situations, please contact relevant law enforcement agencies or professional institutions for assistance.

## 🔮 Future Enhancements

- Multi-language support
- Voice interaction capabilities
- Integration with fraud reporting systems
- Real-time fraud alert notifications
- Advanced fraud pattern recognition
- Mobile app development

---

## 📝 Project Transformation Notes

This project was originally an academic advisor system for UNSW and has been transformed into an Anti-Fraud AI Assistant. The transformation included:

### Changes Made:
1. **System Prompt**: Updated from academic advising to anti-fraud guidance
2. **UI/UX**: Changed theme from academic to security/fraud prevention
3. **Content**: Replaced academic content with fraud prevention information
4. **Navigation**: Updated navigation and routing for anti-fraud context
5. **Mock Service**: Updated fallback responses for fraud-related queries
6. **Documentation**: Updated all documentation to reflect the new purpose

### Key Features Added:
- Comprehensive fraud type identification
- Prevention measures and best practices
- Emergency contact information
- Safety tips and guidelines
- Modern, security-themed UI design

The system now serves as a comprehensive tool for fraud prevention and protection, helping users identify and avoid various types of fraud while providing immediate guidance and resources.

---

**Built with ❤️ for UNSW Students**
 