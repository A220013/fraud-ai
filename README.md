## Anti-Fraud AI Assistant (Powered by DeepSeek)

This project is a powerful **AI-powered anti-fraud Q\&A system** designed to help users identify and prevent various types of fraud. It provides intelligent anti-fraud guidance, including common fraud type identification, prevention measures, emergency response procedures, and more.

-----

### 🚀 Features

  * **AI-Powered Chat Interface**: Real-time conversation with an anti-fraud AI assistant.
  * **Comprehensive Anti-Fraud Guidance**: Covers fraud identification, prevention measures, and emergency response.
  * **Real-time Connection Status**: A visual indicator of AI service availability.
  * **Responsive Design**: Works seamlessly on both desktop and mobile devices.
  * **Error Handling**: Robust error handling with user-friendly messages.
  * **Fallback Mode**: Graceful degradation to a mock service when the backend is unavailable, ensuring continuous service.

-----

### 🛠️ Technology Stack

  * **Frontend**
      * **React 18** with **TypeScript**: For fast development and building the user interface.
      * **Vite**: For a quick development and build experience.
      * **Axios**: For API communication.
      * **CSS3**: With modern animations and responsive design.
  * **Backend**
      * **Node.js** with **Express**: For building the server-side application.
      * **TypeScript**: For type safety.
      * **DeepSeek API**: The core for AI-powered responses, leveraging DeepSeek's models to provide intelligent anti-fraud advice.
      * **Helmet**: For security headers.
      * **Rate limiting**: For API protection against abuse.

-----

### 📋 Prerequisites

To run this application, you'll need:

  * **Docker and Docker Compose** (recommended for the easiest setup)
  * **OR Node.js 18+ and npm** (for local development)
  * **DeepSeek API key** (essential for AI functionality)
  * **Git**

-----

### 🚀 Quick Start

You have two options to get the application up and running:

#### Option 1: Docker (Recommended)

This is the easiest way to run the application:

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd intelligent-academic-advisor
    ```
2.  **Start the application with Docker**:
    ```bash
    docker-compose up --build
    ```
    The application will be available at:
      * **Frontend**: `http://localhost:5173`
      * **Chat Interface**: `http://localhost:5173/chat`
      * **Backend API**: `http://localhost:3001`
3.  **To stop the application**:
    ```bash
    docker-compose down
    ```

#### Option 2: Local Development

If you prefer setting up the environment locally:

1.  **Clone the Repository**:
    ```bash
    git clone <repository-url>
    cd intelligent-academic-advisor
    ```
2.  **Backend Setup**:
    ```bash
    cd backend
    npm install # Install dependencies
    cp env.example .env # Create environment file
    ```
    Edit the `.env` file with your **DeepSeek API key**:
    ```
    DEEPSEEK_API_KEY=your_deepseek_api_key_here
    ```
    Start the development server:
    ```bash
    npm run dev
    ```
    The backend will be available at `http://localhost:3001`.
3.  **Frontend Setup**:
    ```bash
    cd frontend/frontend
    npm install # Install dependencies
    npm run dev # Start development server
    ```
    The frontend will be available at `http://localhost:5177`, with the chat interface at `http://localhost:5173/chat`.

-----

### 🔧 Configuration

#### Environment Variables

  * **Backend (.env)**
      * `PORT=3001`: The port for the backend server.
      * `NODE_ENV=development`: Sets the environment to development mode.
      * `FRONTEND_URL=http://localhost:5173`: The URL of the frontend application.
      * `DEEPSEEK_API_KEY=your_deepseek_api_key_here`: Your DeepSeek API key.
  * **Frontend (.env)**
      * `VITE_API_BASE_URL=http://localhost:3001/api`: The base URL for the backend API.
      * `VITE_USE_MOCK_SERVICE=false`: Controls whether the mock service is used.

#### DeepSeek API Setup

1.  Sign up for a DeepSeek account and generate an API key.
2.  Add this API key to your backend `.env` file.

-----

### 🎯 Usage

For users, interacting with the system is straightforward:

1.  **Open the Chat Interface**: Navigate to `http://localhost:5173/chat`.
2.  **Start a Conversation**: Type your anti-fraud questions into the chat interface.
3.  **Get AI Guidance**: DeepSeek AI will provide personalized advice on:
      * Common fraud type identification
      * Prevention measures and tips
      * Emergency response procedures
      * Safe internet Browse guidelines
      * Reporting channels information

**Example Questions**:

  * "How to identify phishing scams?"
  * "What should I do if I receive a suspicious phone call?"
  * "How to avoid fraud when shopping online?"
  * "What are the characteristics of investment fraud?"
  * "What should I do if my personal information is compromised?"

-----

### 🔄 System Flow

1.  **User Input**: The user types a question in the chat interface.
2.  **Frontend Processing**: The message is sent to the backend API.
3.  **AI Processing**: The backend calls the **DeepSeek API** with the anti-fraud context.
4.  **Response Generation**: DeepSeek AI generates personalized anti-fraud advice.
5.  **Response Display**: The answer is shown in the chat interface.
6.  **Fallback Handling**: If the backend is unavailable, the mock service provides responses.

-----

### 🛡️ Error Handling

The system includes comprehensive error handling:

  * **Network Errors**: Automatic fallback to the mock service.
  * **API Errors**: User-friendly error messages.
  * **Rate Limiting**: Protection against API abuse.
  * **Connection Status**: Visual indicator of service availability.

-----

### 🧪 Testing

The project includes tests for both backend and frontend:

  * **Backend Testing**:
    ```bash
    cd backend
    npm test
    ```
  * **Frontend Testing**:
    ```bash
    cd frontend/frontend
    npm test
    ```

-----

### 📦 Production Deployment

#### Docker Production

```bash
# Build and run in production mode
docker-compose -f docker-compose.prod.yml up --build -d
```

#### Manual Deployment

  * **Backend Deployment**:
    ```bash
    cd backend
    npm run build
    npm start
    ```
  * **Frontend Deployment**:
    ```bash
    cd frontend/frontend
    npm run build
    # Deploy dist/ folder to your web server
    ```

-----

### 🤝 Contributing

Contributions are welcome\! Please read `CONTRIBUTING.md` for details on how to participate in the project development.

-----

### 📄 License

This project is licensed under the **MIT License** - see the `LICENSE` file for details.

-----

### 🆘 Support

If you encounter issues or have suggestions, please:

  * Check the **Issues** page.
  * Create a new Issue.
  * Contact the project maintainers.

-----

### ⚠️ Disclaimer

The anti-fraud advice provided by this system is for reference only and should not replace professional legal advice. When encountering suspicious fraud situations, please contact relevant law enforcement agencies or professional institutions for assistance.

-----

### 🔮 Future Enhancements

Future enhancements planned for the project include:

  * Multi-language support
  * Voice interaction capabilities
  * Integration with fraud reporting systems
  * Real-time fraud alert notifications
  * Advanced fraud pattern recognition
  * Mobile app development

-----

### 📝 Project Transformation Notes

This project was originally an academic advisor system for UNSW and has been transformed into an Anti-Fraud AI Assistant.

**Changes Made**:

  * **System Prompt**: Updated from academic advising to anti-fraud guidance.
  * **UI/UX**: Changed the theme from academic to security/fraud prevention.
  * **Content**: Replaced academic content with fraud prevention information.
  * **Navigation**: Updated navigation and routing for anti-fraud context.
  * **Mock Service**: Updated fallback responses for fraud-related queries.
  * **Documentation**: Updated all documentation to reflect the new purpose.

**Key Features Added**:

  * Comprehensive fraud type identification
  * Prevention measures and best practices
  * Emergency contact information
  * Safety tips and guidelines
  * Modern, security-themed UI design

The system now serves as a comprehensive tool for fraud prevention and protection, helping users identify and avoid various types of fraud while providing immediate guidance and resources.

**Built with ❤️ for UNSW Students**
 
