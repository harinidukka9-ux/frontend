document.addEventListener('DOMContentLoaded', () => {
  // Tab Switching
  const loginTab = document.getElementById('loginTab');
  const registerTab = document.getElementById('registerTab');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
  });

  registerTab.addEventListener('click', () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
  });

  // Password Visibility Toggle
  const togglePasswordIcons = document.querySelectorAll('.toggle-password');
  togglePasswordIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const input = icon.previousElementSibling;
      if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
      } else {
        input.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
      }
    });
  });

  // Form Submission & Basic Validation Examples
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    alert(`Login Submitted:\nEmail: ${email}`);
  });

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    if (password.length < 8) {
      alert('Password must be at least 8 characters long!');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    alert('Registration successful!');
  });
});