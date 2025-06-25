# 🧠 Backend - UNSW AI Academic Advisor

The backend service for the **UNSW AI Academic Advisor** project, built with **Node.js**, **Express**, and **TypeScript** to provide robust APIs for AI-powered academic guidance.

## 🛠️ Technology Stack

- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, minimalist web framework
- **TypeScript** - Type-safe JavaScript superset
- **DeepSeek API** - AI language model (OpenAI compatible)
- **CORS** - Cross-origin resource sharing middleware
- **ts-node-dev** - Development server with hot reload

## ✨ Features

- **🤖 AI Chat Endpoint**: Integration with DeepSeek API for intelligent responses
- **🔧 RESTful API**: Clean, well-structured API endpoints
- **🛡️ Error Handling**: Comprehensive error handling with appropriate HTTP status codes
- **🌐 CORS Support**: Configured for cross-origin requests from frontend
- **⚡ Hot Reload**: Development server with automatic restart on file changes
- **📝 TypeScript**: Full type safety and improved developer experience
- **🔍 Request Logging**: Detailed logging for debugging and monitoring

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- DeepSeek API access (configured in the code)

### Installation & Running

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file (optional)
cp env.example .env

# Start development server
npm run dev
```

The backend will be available at `http://localhost:3001`

## 📁 Project Structure

```
src/
├── index.ts              # Main application entry point
└── routes/
    └── chat.ts           # Chat API endpoints and logic

Other files:
├── Dockerfile            # Container configuration
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── env.example           # Environment variables template
├── test-backend.js       # Backend API testing script
└── test-openai.js        # AI API connection testing
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file (optional, as API key is configured in code):

```env
# Server Configuration
PORT=3001
NODE_ENV=development

# Frontend URL for CORS
FRONTEND_URL=http://localhost:5173

# API Configuration (currently hardcoded)
# OPENAI_API_KEY=your_deepseek_api_key
```

### API Configuration

The backend is pre-configured to use DeepSeek API:
- **Base URL**: `https://api.deepseek.com`
- **Model**: `deepseek-chat`
- **API Key**: Configured directly in the code

## 🛣️ API Endpoints

### POST /api/chat
Send a message to the AI academic advisor.

**Request Body:**
```json
{
  "message": "What courses should I take for Computer Science?",
  "conversationHistory": [
    {
      "id": "msg_1",
      "content": "Previous message",
      "role": "user",
      "timestamp": "2025-01-01T00:00:00.000Z"
    }
  ]
}
```

**Response:**
```json
{
  "message": "For Computer Science at UNSW, I recommend starting with...",
  "conversationId": "conv_1672531200000"
}
```

### GET /api/chat/history
Retrieve conversation history (placeholder endpoint).

**Query Parameters:**
- `conversationId` (optional): Specific conversation ID

**Response:**
```json
[]
```

## 🎯 AI Integration

### System Prompt
The AI is configured with a comprehensive system prompt that defines its role as an UNSW academic advisor, covering:
- Course selection and academic planning
- Degree requirements and progression
- Academic policies and procedures
- Study strategies and tips
- Campus resources and support services
- Career planning and development

### Request Configuration
- **Max Tokens**: 800 (balanced response length)
- **Temperature**: 0.7 (creative but focused responses)
- **Presence Penalty**: 0.1 (slight penalty for repetition)
- **Frequency Penalty**: 0.1 (encourages varied language)

## 🛡️ Error Handling

The backend includes comprehensive error handling for:

- **API Quota Exceeded** (429): Rate limiting responses
- **Invalid API Key** (401): Authentication failures
- **Model Not Found** (404): API endpoint issues
- **General Errors** (500): Unexpected server errors

Error responses include appropriate HTTP status codes and user-friendly messages.

## 🧪 Testing

### Manual Testing Scripts

```bash
# Test backend API endpoints
node test-backend.js

# Test DeepSeek API connection
node test-openai.js
```

### API Testing with curl

```bash
# Test chat endpoint
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello, I need help with course selection"}'

# Test history endpoint
curl -X GET http://localhost:3001/api/chat/history
```

## 📦 Scripts

```bash
# Development
npm run dev          # Start development server with hot reload
npm start            # Start production server

# Building
npm run build        # Compile TypeScript to JavaScript (if configured)

# Testing
node test-backend.js    # Test API endpoints
node test-openai.js     # Test AI integration
```

## 🐳 Docker Deployment

### Development with Docker

```bash
# Build Docker image
docker build -t academic-advisor-backend .

# Run container
docker run -p 3001:3001 academic-advisor-backend
```

### Production Deployment

The Dockerfile is optimized for development with `ts-node-dev`:
- Installs all dependencies
- Copies source code
- Runs development server with hot reload

For production, consider:
- Building TypeScript to JavaScript
- Using `node` instead of `ts-node-dev`
- Multi-stage builds for smaller images

## 🔄 Development Workflow

1. **Code Changes**: Edit TypeScript files in `src/`
2. **Auto Restart**: `ts-node-dev` automatically restarts the server
3. **Testing**: Use provided test scripts to verify functionality
4. **API Testing**: Test endpoints with curl or frontend integration

## 🔮 Future Enhancements

- [ ] Database integration for conversation persistence
- [ ] User authentication and session management
- [ ] Rate limiting and API key management
- [ ] Conversation history storage and retrieval
- [ ] Advanced logging and monitoring
- [ ] Unit and integration tests
- [ ] API documentation with Swagger/OpenAPI
- [ ] Health check endpoints

## 🤝 Contributing

1. Follow TypeScript best practices
2. Add proper error handling for new endpoints
3. Update API documentation for new features
4. Test all changes with provided test scripts
5. Ensure CORS configuration supports frontend needs

---

**🧠 Powering intelligent academic guidance with robust APIs!**