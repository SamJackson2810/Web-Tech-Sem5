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

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

  
    if (username && password) {        
        window.location.href = 'index.html';
    } else {        
        alert('Invalid username or password');
    }
});
