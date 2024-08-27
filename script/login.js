document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const passwordType = passwordInput.getAttribute('type');
    if (passwordType === 'password') {
        passwordInput.setAttribute('type', 'text');
        this.textContent = 'Hide';
    } else {
        passwordInput.setAttribute('type', 'password');
        this.textContent = 'Show';
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate authentication logic
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For demonstration purposes, we will assume the login is always successful.
    // In a real application, you would validate the credentials and handle errors appropriately.
    if (username && password) {
        // Redirect to the home page
        window.location.href = 'index.html';
    } else {
        // Handle invalid login attempt
        alert('Invalid username or password');
    }
});
