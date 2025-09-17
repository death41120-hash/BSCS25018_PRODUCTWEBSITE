function greet() {
    alert("Hello, welcome to ILLICIT!");
}
greet();

const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.innerHTML = new Date().getFullYear();
}

function instock(id) {
    let check = document.getElementById(id).textContent;
    if (check.toLowerCase().includes('in stock')) {
        alert("Item is in stock");
    } else {
        alert("Item is out of stock");
    }
}

function validateform() {
    let x = document.forms["Email"]["email"].value.trim();
    let y = document.forms["Email"]["password"].value.trim();

    if (x === "" || y === "") {
        alert("Email and Password must be filled out");
        return false;
    }

    if (!x.includes("@")) {
        alert("Email must contain '@'");
        return false;
    }

    return true;
}

function sendMessage() {
    let input = document.getElementById("msg").value;
    let chat = document.getElementById("Chat");

    let userMessage = document.createElement("p");
    userMessage.textContent = "You: " + input;
    chat.appendChild(userMessage);

    let botResponse = document.createElement("p");
    botResponse.textContent = "Bot: " + getBotResponse(input);
    chat.appendChild(botResponse);

    document.getElementById("msg").value = "";
    chat.scrollTop = chat.scrollHeight;
}

function getBotResponse(input) {
   if (input .includes("hello")) {
       return "Hello! How can I assist you today?";
   } else if (input.includes("help")) {
       return "Sure! What do you need help with?";
   } else if (input.includes("hi")) {
         return "Hi there! How can I help you?";
   } else if (input.includes("price")) {
         return "The price of our products varies. Please specify which product you are interested in.";
   } else if (input.includes("thanks")) {
            return "You're welcome! If you have any more questions, feel free to ask.";
   } else if (input.includes("what types of products do you offer?")) {
            return "We offer a variety of products including clothing, accessories, and more!";
        } else if (input.includes("bye")) {
            return "Goodbye! Have a great day!";
   } else {
       return "I'm sorry, I didn't understand that. Can you please rephrase?";
   }
}
