const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: 'sk-Ud5hHxZJzPh3e0uejjgNGTDetPpouw3Et1ZHQkbCLHzt6S46',
  baseURL: 'https://cf.mnapi.com/v1'
});

async function testOpenAI() {
  try {
    console.log('Testing OpenAI API connection...');
    
    // 试试不同的模型名称
    const models = ['gpt-4', 'gpt-3.5-turbo', 'gpt-4-turbo', 'gpt-4o'];
    
    for (const model of models) {
      try {
        console.log(`\n尝试模型: ${model}`);
        
        const completion = await openai.chat.completions.create({
          model: model,
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: '你好，请用中文回复' }
          ],
          max_tokens: 100,
          temperature: 0.7,
        });

        console.log(`✅ 模型 ${model} 工作正常!`);
        console.log('响应:', completion.choices[0]?.message?.content);
        break; // 如果成功，跳出循环
        
      } catch (modelError) {
        console.log(`❌ 模型 ${model} 失败:`, modelError.message);
        console.log('错误状态:', modelError.status);
        console.log('错误码:', modelError.code);
        continue; // 尝试下一个模型
      }
    }
    
  } catch (error) {
    console.error('API连接测试失败:', {
      message: error.message,
      status: error.status,
      code: error.code,
      response: error.response?.data
    });
  }
}

testOpenAI(); 