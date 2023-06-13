// API configuration
const API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';
const API_KEY = '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'; // Replace with your actual API key

// DOM elements
const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit-btn');

// Event listeners
submitBtn.addEventListener('click', handleUserInput);
userInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    handleUserInput();
  }
});

// Handle user input
async function handleUserInput() {
  const userMessage = userInput.value.trim();
  if (userMessage !== '') {
    displayMessage(userMessage, 'user');
    await fetchChatbotResponse(userMessage);
    userInput.value = '';
  }
}

// Fetch chatbot response from the API
async function fetchChatbotResponse(userMessage) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        'model': 'gpt-3.5-turbo',
        'messages': [{ 'role': 'user', 'content': userMessage }]
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await response.json();
    const chatbotResponse = data.choices[0].message.content.trim();

    displayMessage(chatbotResponse, 'bot');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Display a chat message in the chat log
function displayMessage(message, role) {
  const messageElement = document.createElement('div');
  messageElement.classList.add(role);
  messageElement.textContent = message;
  chatLog.appendChild(messageElement);
  chatLog.scrollTop = chatLog.scrollHeight;
}


