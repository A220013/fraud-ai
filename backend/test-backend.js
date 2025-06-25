const axios = require('axios');

const BASE_URL = 'http://localhost:3001';

async function testBackend() {
  console.log('🧪 Testing Backend API...\n');

  try {
    // Test health endpoint
    console.log('1. Testing health endpoint...');
    const healthResponse = await axios.get(`${BASE_URL}/health`);
    console.log('✅ Health check passed:', healthResponse.data);
    console.log('');

    // Test chat endpoint (without OpenAI key - should get error)
    console.log('2. Testing chat endpoint...');
    try {
      const chatResponse = await axios.post(`${BASE_URL}/api/chat`, {
        message: 'Hello, can you help me with course selection?'
      });
      console.log('✅ Chat endpoint working:', chatResponse.data);
    } catch (error) {
      if (error.response?.status === 500 && error.response?.data?.error === 'OpenAI API key not configured') {
        console.log('✅ Chat endpoint working (expected error: no API key)');
      } else {
        console.log('❌ Chat endpoint error:', error.response?.data || error.message);
      }
    }
    console.log('');

    console.log('🎉 Backend is running successfully!');
    console.log('📝 To enable AI functionality, add your OpenAI API key to the .env file');

  } catch (error) {
    console.log('❌ Backend test failed:', error.message);
    console.log('💡 Make sure the backend is running with: npm run dev');
  }
}

testBackend(); 