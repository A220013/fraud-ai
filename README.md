# UNSW AI Academic Advisor

An AI-powered academic advising system for prospective and current students at UNSW (University of New South Wales). This system provides intelligent guidance on course selection, degree requirements, academic policies, and study strategies.

## 🚀 Features

- **AI-Powered Chat Interface**: Real-time conversation with an AI academic advisor
- **Comprehensive Academic Guidance**: Course selection, degree requirements, policies, and study tips
- **Fallback Mode**: Graceful degradation to mock service when backend is unavailable
- **Real-time Connection Status**: Visual indicator of AI service availability
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Error Handling**: Robust error handling with user-friendly messages

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
# OPENAI_API_KEY=your_openai_api_key_here

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

### For Students

1. **Open the Application**: Navigate to `http://localhost:5173`
2. **Start a Conversation**: Type your academic questions in the chat interface
3. **Get AI Guidance**: Receive personalized advice on:
   - Course selection and planning
   - Degree requirements and progression
   - Academic policies and procedures
   - Study strategies and tips
   - Campus resources and support

### Example Questions

- "What courses should I take for Computer Science?"
- "How do I check my degree requirements?"
- "What are the study strategies for exams?"
- "Where can I get academic support on campus?"
- "How do I plan my course schedule?"

## 🔄 System Flow

1. **User Input**: Student types a question in the chat interface
2. **Frontend Processing**: Message is sent to the backend API
3. **AI Processing**: Backend calls OpenAI API with academic context
4. **Response Generation**: AI generates personalized academic advice
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
# Deploy dist/ folder to your hosting service
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Check the [Issues](https://github.com/your-repo/issues) page
- Contact the development team
- Review the documentation

## 🔮 Future Enhancements

- [ ] Database integration for conversation history
- [ ] User authentication and profiles
- [ ] Advanced course recommendation algorithms
- [ ] Integration with UNSW course catalog
- [ ] Multi-language support
- [ ] Voice input/output capabilities
- [ ] Mobile app development

---

**Built with ❤️ for UNSW Students**
 