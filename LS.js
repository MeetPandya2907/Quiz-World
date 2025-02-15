const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const inlineRegisterBtn = document.getElementById('inline-register');
const inlineLoginBtn = document.getElementById('inline-login');

// Desktop toggle buttons (from the toggle container)
if (registerBtn) {
  registerBtn.addEventListener('click', () => {
    container.classList.add("active");
  });
}
if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
  });
}

// Inline toggle buttons (always visible)
if (inlineRegisterBtn) {
  inlineRegisterBtn.addEventListener('click', () => {
    container.classList.add("active");
  });
}
if (inlineLoginBtn) {
  inlineLoginBtn.addEventListener('click', () => {
    container.classList.remove("active");
  });
}
