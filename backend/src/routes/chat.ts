import express, { Request, Response, NextFunction } from 'express';
import OpenAI from 'openai';

const router = express.Router();

const openai = new OpenAI({
  apiKey: 'key',
  baseURL: 'https://api.deepseek.com'
});

const SYSTEM_PROMPT = `You are an AI-powered anti-fraud assistant designed to help users identify and prevent various types of fraud. Your role is to provide comprehensive guidance on:

1. Fraud identification and recognition
2. Prevention measures and best practices
3. Emergency response procedures
4. Safe online behavior guidelines
5. Reporting fraud incidents
6. Protecting personal and financial information

Guidelines:
- Provide accurate, helpful, and practical anti-fraud advice
- Reference official sources and best practices when possible
- Be professional yet approachable and supportive
- If you're unsure about specific legal procedures, suggest contacting relevant authorities
- Keep responses concise but comprehensive
- Focus on prevention and education
- Always prioritize user safety and security
- Respond in English

Common fraud types to be knowledgeable about:
- Phishing scams and email fraud
- Phone scams and robocalls
- Online shopping fraud
- Investment and financial fraud
- Identity theft
- Social media scams
- Romance scams
- Tech support scams
- Lottery and sweepstakes scams
- Charity fraud

Always maintain a supportive and educational tone while helping users protect themselves from fraud.`;

interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatRequest {
  message: string;
  conversationHistory?: ChatMessage[];
}

interface ChatResponse {
  message: string;
  conversationId?: string;
}

router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { message, conversationHistory = [] }: ChatRequest = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required and must be a string' });
      return;
    }

    const messages = [
      { role: 'system' as const, content: SYSTEM_PROMPT },
      ...conversationHistory.map(msg => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content
      })),
      { role: 'user' as const, content: message }
    ];

    console.log('Sending request to OpenAI API...');
    console.log('Messages count:', messages.length);
    
    const completion = await openai.chat.completions.create({
      model: 'deepseek-chat',
      messages,
      max_tokens: 800,
      temperature: 0.7,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    });
    
    console.log('OpenAI API response received:', completion.choices?.[0]?.message?.content?.substring(0, 100));

    const aiResponse = completion.choices[0]?.message?.content || 'I apologize, but I was unable to generate a response. Please try again.';

    const response: ChatResponse = {
      message: aiResponse,
      conversationId: `conv_${Date.now()}`,
    };

    res.json(response);

  } catch (error: any) {
    console.error('Chat API error details:', {
      message: error.message,
      status: error.status,
      code: error.code,
      response: error.response?.data,
      stack: error.stack
    });
    
    if (error.status === 429 || error.code === 'insufficient_quota') {
      res.status(429).json({ 
        error: 'API quota exceeded. Please try again later.' 
      });
      return;
    }
    
    if (error.status === 401 || error.code === 'invalid_api_key') {
      res.status(401).json({ 
        error: 'Invalid API key configuration' 
      });
      return;
    }

    if (error.status === 404) {
      res.status(404).json({ 
        error: 'Model not found. The API endpoint may not support the requested model.' 
      });
      return;
    }

    res.status(500).json({ 
      error: 'Failed to process message',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? {
        status: error.status,
        code: error.code
      } : undefined
    });
  }
});

router.get('/history', async (req: Request, res: Response): Promise<void> => {
  try {
    const { conversationId } = req.query;
    
    res.json([]);
  } catch (error: any) {
    console.error('History API error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch conversation history',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

export { router as chatRouter }; 
