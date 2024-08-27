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

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // You can add sign-up logic here, like saving the user data to a server or local storage

    // Redirect to the login page after successful sign-up
    window.location.href = 'login.html';
});
