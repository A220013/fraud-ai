import type { ChatMessage, ChatRequest, ChatResponse } from './api';

// Mock academic advisor responses
const academicResponses = [
  "I'd be happy to help you with your academic journey at UNSW! Based on your question, here are some key points to consider...",
  "That's a great question about your studies. At UNSW, we have several resources available to support students like you...",
  "For your academic planning, I recommend checking the UNSW Handbook and speaking with your program coordinator. Here's what you should know...",
  "Regarding your course selection, UNSW offers a wide range of options. Let me provide some guidance based on your interests...",
  "When it comes to degree requirements, it's important to review your program structure. Here are the key points to remember...",
  "For study strategies, I suggest creating a balanced schedule and utilizing UNSW's learning support services. Here are some tips...",
  "About campus resources, UNSW provides excellent support through the Student Life and Learning Centre. You can access...",
  "For academic policies, make sure to familiarize yourself with UNSW's assessment and progression rules. Here's what you need to know...",
  "Regarding your progression, it's important to maintain good academic standing. Here are some recommendations...",
  "For career planning, UNSW's Career Accelerator program offers excellent opportunities. Let me share some insights..."
];

// Simulate API delay
const simulateDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Generate contextual response based on user message
const generateResponse = (userMessage: string, _conversationHistory: ChatMessage[] = []): string => {
  const message = userMessage.toLowerCase();
  
  // Simple keyword-based response generation
  if (message.includes('course') || message.includes('subject')) {
    return "For course selection at UNSW, I recommend reviewing the UNSW Handbook and consulting with your academic advisor. Consider prerequisites, your interests, and career goals. You can also check course reviews and speak with senior students for insights.";
  }
  
  if (message.includes('degree') || message.includes('program')) {
    return "Your degree requirements are outlined in the UNSW Handbook. Make sure to complete all core courses and meet the credit point requirements. Regular check-ins with your program coordinator will help ensure you're on track.";
  }
  
  if (message.includes('study') || message.includes('exam')) {
    return "Effective study strategies include creating a consistent schedule, using active learning techniques, and taking regular breaks. UNSW's Learning Centre offers workshops and one-on-one consultations to help improve your study skills.";
  }
  
  if (message.includes('career') || message.includes('job')) {
    return "UNSW's Career Accelerator program provides excellent opportunities for career development. Attend career fairs, join professional societies, and consider internships. The Careers and Employment service offers resume reviews and interview preparation.";
  }
  
  if (message.includes('help') || message.includes('support')) {
    return "UNSW offers comprehensive student support services. Visit the Student Life and Learning Centre for academic support, counseling services, and disability support. Don't hesitate to reach out - we're here to help you succeed!";
  }
  
  // Default response
  const randomIndex = Math.floor(Math.random() * academicResponses.length);
  return academicResponses[randomIndex];
};

export const mockLLMService = {
  async sendMessage(request: ChatRequest): Promise<ChatResponse> {
    // Simulate network delay (1-3 seconds)
    await simulateDelay(1000 + Math.random() * 2000);
    
    // Simulate occasional errors (5% chance)
    if (Math.random() < 0.05) {
      throw new Error('Network error - please try again');
    }
    
    const response = generateResponse(request.message, request.conversationHistory);
    
    return {
      message: response,
      conversationId: `conv_${Date.now()}`,
    };
  },

  async getConversationHistory(_conversationId?: string): Promise<ChatMessage[]> {
    await simulateDelay(500);
    
    // Return empty history for new conversations
    return [];
  },
}; 