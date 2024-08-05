// Dark Mode

// Get the button element
const darkModeButton = document.getElementById('dark-mode-button');

// Add event listener to the button
darkModeButton.addEventListener('click', () => {
    // Get the body element
    const body = document.body;

    // Check if the body has the dark-mode class
    if (body.classList.contains('dark-mode')) {
        // Remove the dark-mode class
        body.classList.remove('dark-mode');
    } else {
        // Add the dark-mode class
        body.classList.add('dark-mode');
    }
});


// Contact Form

// Get the form and button elements
const form = document.getElementById('contact-form');
const sendButton = document.getElementById('send-button');

// Add event listener to the button
sendButton.addEventListener('click', (e) => {
    // Prevent default form submission
    e.preventDefault();

    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create a mailto link
    const mailtoLink = `mailto:mar4abd4@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Open the mailto link in the user's email client
    window.location.href = mailtoLink;
});
