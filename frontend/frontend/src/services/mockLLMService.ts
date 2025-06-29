import type { ChatMessage, ChatRequest, ChatResponse } from './api';

// Mock anti-fraud assistant responses
const antiFraudResponses = [
  "I'd be happy to help you protect yourself from fraud! Based on your question, here are some important safety measures to consider...",
  "That's a great question about fraud prevention. There are several key strategies you can use to protect yourself...",
  "For fraud identification, it's important to be aware of common red flags and suspicious patterns. Here's what you should know...",
  "Regarding online safety, always verify the source and never share sensitive information with unverified parties. Here are some guidelines...",
  "When it comes to protecting your personal information, use strong passwords and enable two-factor authentication. Here are the key steps...",
  "For emergency response to fraud, act quickly and contact relevant authorities. Here are the immediate steps you should take...",
  "About reporting fraud, document everything and contact the appropriate agencies. You can report to...",
  "For safe online behavior, always be skeptical of unsolicited requests and verify before responding. Here's what to watch out for...",
  "Regarding financial protection, never share banking details with unknown parties. Here are some security best practices...",
  "For identity theft prevention, monitor your accounts regularly and use credit freezes when appropriate. Let me share some insights..."
];

// Simulate API delay
const simulateDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Generate contextual response based on user message
const generateResponse = (userMessage: string, _conversationHistory: ChatMessage[] = []): string => {
  const message = userMessage.toLowerCase();
  
  // Simple keyword-based response generation
  if (message.includes('phishing') || message.includes('email') || message.includes('scam')) {
    return "Phishing scams are common fraud attempts where scammers impersonate legitimate organizations. Never click on suspicious links, verify sender addresses, and never share passwords or personal information via email. If you receive a suspicious email, report it to your email provider and delete it immediately.";
  }
  
  if (message.includes('phone') || message.includes('call') || message.includes('robocall')) {
    return "Phone scams often involve callers claiming to be from government agencies, tech support, or financial institutions. Never provide personal information over the phone unless you initiated the call. Hang up on suspicious calls and block the number. Remember, legitimate organizations won't pressure you for immediate action.";
  }
  
  if (message.includes('online') || message.includes('shopping') || message.includes('purchase')) {
    return "When shopping online, only use reputable websites with secure connections (look for 'https://' and a padlock icon). Avoid deals that seem too good to be true, and never pay with gift cards or wire transfers. Use credit cards when possible as they offer better fraud protection than debit cards.";
  }
  
  if (message.includes('investment') || message.includes('money') || message.includes('financial')) {
    return "Investment fraud often promises high returns with low risk. Be wary of pressure tactics, guaranteed returns, or requests for immediate decisions. Always research investment opportunities, verify credentials, and consult with licensed financial advisors. Remember, if it sounds too good to be true, it probably is.";
  }
  
  if (message.includes('identity') || message.includes('personal') || message.includes('information')) {
    return "Protect your personal information by using strong, unique passwords for each account, enabling two-factor authentication, and monitoring your credit reports regularly. Never share Social Security numbers, passwords, or financial information with unknown parties. Consider using a credit freeze to prevent unauthorized accounts.";
  }
  
  if (message.includes('report') || message.includes('help') || message.includes('what to do')) {
    return "If you've been a victim of fraud, act quickly! Document everything, contact your bank or credit card company immediately, and report to the Federal Trade Commission (FTC) at ftc.gov/complaint. For identity theft, also contact the three major credit bureaus and consider filing a police report. Time is crucial in fraud cases.";
  }
  
  // Default response
  const randomIndex = Math.floor(Math.random() * antiFraudResponses.length);
  return antiFraudResponses[randomIndex];
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