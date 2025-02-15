document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const chatbotMessages = document.getElementById('chatbot-messages');

    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const userText = userInput.value.trim();
        if (userText === "") return;

        appendMessage('user', userText);
        userInput.value = '';

        // Get AI response
        const aiText = getAIResponse(userText);
        appendMessage('ai', aiText);
    }

    function appendMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = text;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function getAIResponse(userText) {
        // Predefined responses
        const responses = {
            "hello": "Hello! How can I assist you today?",
            "how are you": "I'm just a bot, but I'm here to help you!",
            "help": "I can provide information and support. What do you need help with?",
            "mental health": "Mental health is important. If you're feeling overwhelmed, consider reaching out to a professional.",
            "what is your name": "I am your AI-powered virtual mental health consultant.",
            "thank you": "You're welcome! Let me know if you need further assistance.",
            "i am depressed today": "I'm sorry to hear that. It's important to talk to someone you trust. You can also try deep breathing exercises or go for a walk to clear your mind.",
            "i feel sad": "It's okay to feel sad sometimes. Try to engage in activities you enjoy or talk to a friend. If it persists, consider seeking professional help.",
            "i am stressed": "Stress can be overwhelming. Try mindfulness exercises, meditation, or taking a break to relax. You're not alone in this.",
            "i feel anxious": "Anxiety can be tough. Try grounding techniques like focusing on your breathing or naming things you can see, hear, and feel.",
            "i can't sleep": "Difficulty sleeping can be frustrating. Try establishing a bedtime routine, avoiding screens before bed, and creating a calm environment.",
            "i feel lonely": "Loneliness is a common feeling. Reach out to friends or family, or consider joining a community or group with similar interests.",
            "i feel overwhelmed": "When feeling overwhelmed, break tasks into smaller steps and take things one at a time. It's okay to ask for help.",
            "i feel hopeless": "Feelings of hopelessness can be difficult. Please consider reaching out to a mental health professional or a trusted person in your life.",
            "i feel angry": "Anger is a natural emotion. Try to identify the cause and express it in a healthy way, like through exercise or journaling.",
            "i feel tired": "Fatigue can be challenging. Ensure you're getting enough rest, eating well, and staying hydrated. If it persists, consult a doctor.",
            "i feel worthless": "You are not worthless. Your feelings are valid, and it's important to talk to someone who can support you.",
            "i feel guilty": "Guilt can be heavy. Reflect on why you feel this way and consider talking to someone about it.",
            "i feel scared": "Fear is a natural response. Try to identify what's causing your fear and take small steps to address it.",
            "i feel confused": "Confusion can be unsettling. Take a moment to breathe and try to break down what's confusing you into smaller parts.",
            "i feel numb": "Feeling numb can be a sign of emotional overload. Try to engage in activities that bring you comfort or talk to someone you trust.",
            "i feel stuck": "Feeling stuck is tough. Try to identify one small step you can take to move forward, even if it's just reaching out for help.",
            "i feel lost": "Feeling lost is a common experience. Take some time to reflect on what you need and consider talking to someone who can guide you.",
            "i feel like crying": "Crying can be a healthy way to release emotions. Let yourself feel what you're feeling, and reach out to someone if you need support.",
            "i feel like giving up": "Please don't give up. You are stronger than you think. Reach out to someone who can help you through this.",
            "i feel like no one cares": "It can feel that way sometimes, but there are people who care about you. Consider reaching out to a friend, family member, or professional.",
            "i feel like i'm not good enough": "You are enough just as you are. Your worth is not defined by your achievements or struggles.",
            "i feel like i'm a burden": "You are not a burden. Your feelings are valid, and it's important to share them with someone who can support you.",
            "i feel like i'm failing": "Failure is a part of growth. Try to focus on what you can learn from this experience and take small steps forward.",
            "i feel like i'm not loved": "You are loved, even if it doesn't feel like it right now. Reach out to someone who cares about you.",
            "i feel like i'm not understood": "It can be frustrating when you feel misunderstood. Try to express your feelings clearly and seek out someone who will listen.",
            "i feel like i'm not important": "You are important. Your feelings and experiences matter, and there are people who care about you.",
            "i feel like i'm not strong enough": "Strength comes in many forms. Even asking for help is a sign of strength.",
            "i feel like i'm not in control": "It's okay to feel out of control sometimes. Focus on what you can control, even if it's just small things.",
            "i feel like i'm not making progress": "Progress can be slow, but every small step counts. Celebrate the small victories and keep going.",
            "i feel like i'm not happy": "Happiness can come and go. Try to focus on small things that bring you joy, and consider talking to someone about how you're feeling.",
            "i feel like i'm not myself": "It's okay to feel this way sometimes. Take some time to reflect on what you need and consider reaching out for support.",
            "i feel like i'm not good at anything": "You have unique strengths and talents. Try to focus on what you enjoy and what you're good at.",
            "i feel like i'm not making a difference": "Even small actions can make a difference. Your efforts matter, even if they don't feel significant right now.",
            "i feel like i'm not appreciated": "Your worth is not defined by others' appreciation. You are valuable just as you are.",
            "i feel like i'm not safe": "Your safety is important. If you're in danger, please reach out to someone who can help you immediately.",
            "i feel like i'm not healthy": "Health is important. Consider talking to a doctor or therapist about how you're feeling.",
            "i feel like i'm not confident": "Confidence can grow over time. Try to focus on your strengths and take small steps to build your confidence.",
            "i feel like i'm not motivated": "Motivation can be hard to find. Try to set small, achievable goals and celebrate your progress.",
            "i feel like i'm not loved by anyone": "You are loved, even if it doesn't feel like it right now. Reach out to someone who cares about you.",
            "i feel like i'm not good enough for anyone": "You are enough just as you are. Your worth is not defined by others' opinions.",
            "i feel like i'm not making the right choices": "It's okay to make mistakes. Reflect on your choices and consider what you can learn from them.",
            "i feel like i'm not living up to expectations": "You don't have to meet others' expectations. Focus on what matters to you and take things one step at a time.",
            "default": "I'm here to help. Can you tell me more about what you're feeling?"
        };

        userText = userText.toLowerCase();
        return responses[userText] || responses['default'];
    }
});