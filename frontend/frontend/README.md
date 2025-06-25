# 🎨 Frontend - UNSW AI Academic Advisor

The frontend application for the **UNSW AI Academic Advisor** project, built with modern web technologies to provide a beautiful and responsive user interface for academic guidance.

## 🛠️ Technology Stack

- **React 19.1.0** - Latest version of React framework
- **TypeScript 5.8.3** - Type-safe JavaScript superset
- **Vite 6.3.5** - Fast modern build tool with HMR
- **React Router DOM 7.6.2** - Client-side routing for SPA
- **Axios 1.10.0** - HTTP client for API communication
- **ESLint** - Code quality and linting
- **Pure CSS3** - Modern styling with animations

## ✨ Features

- **🎨 Beautiful Modern UI**: Purple-blue gradient backgrounds and elegant design
- **💬 Interactive Chat Interface**: Real-time messaging with AI academic advisor
- **🤖 AI Message Bubbles**: Distinctive styling for AI responses with robot avatars
- **👤 User Message Styling**: Clear visual distinction for user messages
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **✨ Smooth Animations**: Hover effects and transition animations
- **🔄 Connection Status**: Visual indicators for backend connectivity
- **⚡ Smart Fallback**: Graceful degradation to mock service when needed

## 🚀 Development Setup

### Prerequisites
- Node.js 18+ and npm
- Backend service running (see backend README)

### Installation & Running

```bash
# Navigate to frontend directory
cd frontend/frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── ChatInterface.tsx # Main chat component
│   ├── ChatInterface.css # Chat styling
│   └── Navbar.tsx        # Navigation component
├── pages/               # Page-level components
│   ├── Chat/            # Chat page
│   ├── Dashboard/       # Dashboard page
│   ├── Login/           # Login page
│   ├── Register/        # Register page
│   └── NotFound.tsx     # 404 page
├── services/            # API and service layers
│   ├── api.ts           # HTTP API client
│   ├── auth.ts          # Authentication service
│   └── mockLLMService.ts # Fallback mock service
├── hooks/               # Custom React hooks
│   └── useAuth.ts       # Authentication hook
├── assets/              # Static assets
├── App.tsx              # Main application component
├── App.css              # Global application styles
└── main.tsx             # Application entry point
```

## 🎨 Styling & Design

### Design System
- **Primary Colors**: Purple to blue gradient (`#667eea` to `#764ba2`)
- **Message Bubbles**: Rounded corners (15px) with subtle shadows
- **Typography**: Clean, modern font stack
- **Animations**: Smooth transitions (0.3s ease)

### Key CSS Features
- CSS Grid and Flexbox for layouts
- CSS custom properties for theming
- Mobile-first responsive design
- Hover and focus states for accessibility
- Smooth scrolling and animations

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the frontend directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3001/api

# Development Settings
VITE_USE_MOCK_SERVICE=false
```

### Build Configuration

The project uses Vite with the following key configurations:
- React plugin for JSX and Fast Refresh
- TypeScript support
- Path aliases (`@` for `/src`)
- SPA mode for client-side routing

## 🧪 Scripts

```bash
# Development
npm run dev          # Start development server with HMR

# Building
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint for code quality checks
```

## 📦 Production Build

### Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory with:
- Minified and bundled JavaScript/CSS
- Optimized assets and images
- Source maps for debugging

### Docker Deployment

The frontend includes a multi-stage Dockerfile:
1. **Build stage**: Compiles the React application
2. **Production stage**: Serves static files with Nginx

```bash
# Build Docker image
docker build -t academic-advisor-frontend .

# Run container
docker run -p 5173:80 academic-advisor-frontend
```

## 🎯 Key Components

### ChatInterface
The main chat component featuring:
- Message history display
- Real-time message input
- Connection status indicators
- AI/User message differentiation
- Smooth scrolling and animations

### Services Layer
- **api.ts**: Centralized HTTP client with error handling
- **mockLLMService.ts**: Fallback service for offline/error scenarios
- **auth.ts**: Authentication utilities (for future expansion)

## 🔄 State Management

Currently uses React's built-in state management:
- **useState** for component-level state
- **useEffect** for side effects and API calls
- **Custom hooks** for reusable logic (useAuth)

## 🧭 Routing

React Router DOM handles client-side routing:
- `/` - Redirects to chat
- `/chat` - Main chat interface (default)
- `/dashboard` - User dashboard
- `/login` - Login page
- `/register` - Registration page
- `*` - 404 Not Found page

## 🔮 Future Enhancements

- [ ] State management with Redux or Zustand
- [ ] Real-time messaging with WebSockets
- [ ] PWA capabilities for offline use
- [ ] Advanced animations with Framer Motion
- [ ] Theme switching (dark/light mode)
- [ ] Internationalization (i18n)
- [ ] Accessibility improvements

## 🤝 Contributing

1. Follow the established code style (ESLint configuration)
2. Use TypeScript for all new components
3. Write responsive CSS with mobile-first approach
4. Test your changes across different screen sizes
5. Ensure accessibility standards are met

---

**🎨 Beautiful interfaces for better learning experiences!**
