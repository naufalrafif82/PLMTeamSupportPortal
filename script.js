        function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username === 'admin' && password === 'admin') {
                alert('Login successful! Redirecting to Support Portal...');
                // Add your redirection logic here
				window.location.href = 'Home/';
            } else {
                alert('Invalid credentials. Please try again.');
            }
        }
