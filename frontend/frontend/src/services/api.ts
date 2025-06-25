import { mockLLMService } from './mockLLMService';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';
const USE_MOCK_SERVICE = import.meta.env.VITE_USE_MOCK_SERVICE === 'true';

export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface ChatRequest {
  message: string;
  conversationHistory?: ChatMessage[];
}

export interface ChatResponse {
  message: string;
  conversationId?: string;
}

async function fetchWithTimeout(url: string, options: RequestInit = {}, timeout = 30000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

export async function sendMessage(request: ChatRequest): Promise<ChatResponse> {
  if (USE_MOCK_SERVICE) {
    console.log('Using mock service for chat');
    return await mockLLMService.sendMessage(request);
  }

  try {
    const response = await fetchWithTimeout(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error: any) {
    console.error('Backend API error:', error);
    
    if (error.name === 'AbortError') {
      throw new Error('Request timeout - please try again');
    }
    
    console.log('Falling back to mock service due to backend error');
    return await mockLLMService.sendMessage(request);
  }
}

export async function getConversationHistory(conversationId?: string): Promise<ChatMessage[]> {
  if (USE_MOCK_SERVICE) {
    console.log('Using mock service for conversation history');
    return await mockLLMService.getConversationHistory(conversationId);
  }

  try {
    const url = conversationId 
      ? `${API_BASE_URL}/chat/history?conversationId=${conversationId}`
      : `${API_BASE_URL}/chat/history`;

    const response = await fetchWithTimeout(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error: any) {
    console.error('Backend API error:', error);
    console.log('Falling back to mock service due to backend error');
    return await mockLLMService.getConversationHistory(conversationId);
  }
}

export async function healthCheck(): Promise<{ status: string }> {
  try {
    const response = await fetchWithTimeout(`${API_BASE_URL}/health`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error: any) {
    console.error('Health check failed:', error);
    throw error;
  }
} 