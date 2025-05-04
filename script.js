function showTab(tab) {
            // Hide all sections and remove active class from tabs
            document.querySelectorAll('.login, .signup').forEach(section => {
                section.classList.remove('active');
            });
            document.querySelectorAll('.tab a').forEach(tab => {
                tab.classList.remove('active');
            });

            // Show selected section and add active class to tab
            document.getElementById(tab).classList.add('active');
            document.querySelector(`.tab-${tab}`).classList.add('active');
        }

        // Toggle password visibility
        function togglePassword(id) {
            const passwordInput = document.getElementById(id);
            passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
        }

        // Login form validation
        function LogIn() {
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password_one').value.trim();
            let valid = true;

            // Reset error messages
            document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

            // Username validation
            if (!username) {
                document.getElementById('username-error').style.display = 'block';
                valid = false;
            }

            // Password validation
            if (!password) {
                document.getElementById('password_one-error').style.display = 'block';
                valid = false;
            }

            if (valid) {
                alert('Login successful! (This is a demo)');
                // Add actual login logic here (e.g., API call)
            }
        }

        // Signup form validation
        function signUp() {
            const name = document.getElementById('name').value.trim();
            const surname = document.getElementById('surname').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const cPassword = document.getElementById('c_password').value.trim();
            let valid = true;

            // Reset error messages
            document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

            // Name validation
            if (!name) {
                document.getElementById('name-error').style.display = 'block';
                valid = false;
            }

            // Surname validation
            if (!surname) {
                document.getElementById('surname-error').style.display = 'block';
                valid = false;
            }

            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailPattern.test(email)) {
                document.getElementById('email-error').style.display = 'block';
                valid = false;
            }

            // Password validation
            if (!password) {
                document.getElementById('password-error').style.display = 'block';
                valid = false;
            }

            // Confirm password validation
            if (password !== cPassword || !cPassword) {
                document.getElementById('c_password-error').style.display = 'block';
                valid = false;
            }

            if (valid) {
                alert('Sign up successful! (This is a demo)');
                // Add actual signup logic here (e.g., API call)
            }
        }
