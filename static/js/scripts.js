document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.querySelector(".chat-box");
    const chatInput = document.querySelector(".chat-input");
    
    chatInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            const userMessage = chatInput.value;
            if (userMessage.trim() !== "") {
                displayMessage(userMessage, "user");
                sendMessage(userMessage);
                chatInput.value = "";
            }
        }
    });
    
    function displayMessage(message, type) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("chat-message", type);
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
    
    function sendMessage(message) {
        fetch("/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ query: message })
        })
        .then(response => response.json())
        .then(data => {
            displayMessage(data.response, "bot");
        });
    }
});