# 🚀 Setup Guide - UNSW AI Academic Advisor

This guide will help you set up the AI-powered academic advising system from scratch.

## 📋 Prerequisites

- **Node.js 18+** and npm
- **Git**
- **OpenAI API key** (optional, for AI functionality)

## 🔧 Step-by-Step Setup

### 1. Clone and Navigate
```bash
git clone <your-repo-url>
cd intelligent-academic-advisor
```

### 2. Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create environment file
cp env.example .env

# Edit .env file (see configuration section below)
# Add your OpenAI API key if you have one
```

### 3. Frontend Setup

```bash
# Navigate to frontend
cd ../frontend/frontend

# Install dependencies
npm install
```

### 4. Configuration

#### Backend Environment (.env)
```env
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
OPENAI_API_KEY=your_openai_api_key_here
```

#### Frontend Environment (.env)
```env
VITE_API_BASE_URL=http://localhost:3001/api
VITE_USE_MOCK_SERVICE=false
```

### 5. Start the Application

#### Terminal 1 - Backend
```bash
cd backend
npm run dev
```

#### Terminal 2 - Frontend
```bash
cd frontend/frontend
npm run dev
```

### 6. Test the Setup

1. **Backend Health Check**: Visit `http://localhost:3001/health`
2. **Frontend**: Visit `http://localhost:5173`
3. **Chat Interface**: Try sending a message in the chat

## 🧪 Testing the System

### Without OpenAI API Key
- The system will work with mock responses
- You'll see "Using Fallback Mode" in the connection status
- All functionality will work, but responses will be pre-defined

### With OpenAI API Key
1. Get an API key from [OpenAI Platform](https://platform.openai.com)
2. Add it to your backend `.env` file
3. Restart the backend server
4. You'll see "Connected to AI Service" in the connection status
5. Get real AI-powered responses

## 🔍 Troubleshooting

### Backend Issues
- **Port already in use**: Change PORT in .env file
- **Module not found**: Run `npm install` again
- **TypeScript errors**: Check if all dependencies are installed

### Frontend Issues
- **CORS errors**: Check FRONTEND_URL in backend .env
- **API connection failed**: Ensure backend is running
- **Build errors**: Clear node_modules and reinstall

### Common Solutions
```bash
# Clear and reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check if ports are available
netstat -an | grep :3001
netstat -an | grep :5173

# Restart both servers
# Backend: Ctrl+C, then npm run dev
# Frontend: Ctrl+C, then npm run dev
```

## 📱 Usage Examples

Once running, try these questions:

- "What courses should I take for Computer Science?"
- "How do I check my degree requirements?"
- "What are good study strategies for exams?"
- "Where can I get academic support on campus?"
- "How do I plan my course schedule?"

## 🎯 Expected Behavior

### Connection Status
- **Green dot**: Backend connected, AI service available
- **Orange dot**: Backend unavailable, using fallback mode

### Response Times
- **Mock service**: 1-3 seconds
- **AI service**: 2-5 seconds (depends on OpenAI)

### Error Handling
- Network errors show user-friendly messages
- Automatic fallback to mock service
- Clear error messages for API issues

## 🚀 Production Deployment

### Backend
```bash
cd backend
npm run build
npm start
```

### Frontend
```bash
cd frontend/frontend
npm run build
# Deploy dist/ folder to your hosting service
```

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Verify all prerequisites are met
3. Check the console for error messages
4. Ensure both servers are running
5. Verify environment variables are set correctly

---

**Happy coding! 🎉** 