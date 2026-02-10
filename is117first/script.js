// Get elements from the DOM
const button = document.getElementById('myButton');
const message = document.getElementById('message');

// Click counter
let clickCount = 0;

// Add click event listener to button
button.addEventListener('click', function() {
    clickCount++;
    
    if (clickCount === 1) {
        message.textContent = 'You clicked the button once!';
        message.style.color = '#667eea';
    } else if (clickCount < 5) {
        message.textContent = `You clicked the button ${clickCount} times!`;
        message.style.color = '#667eea';
    } else if (clickCount === 5) {
        message.textContent = 'Wow! You clicked 5 times! Keep going...';
        message.style.color = '#764ba2';
    } else {
        message.textContent = `That's ${clickCount} clicks! You must really like this button!`;
        message.style.color = '#764ba2';
    }
});

// Optional: Log when page loads
window.addEventListener('load', function() {
    console.log('IS117 Project loaded successfully!');
});