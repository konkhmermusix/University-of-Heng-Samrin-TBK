 const password = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const icon = togglePassword.querySelector('i');

togglePassword.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text';
        icon.classList.remove('bi-eye-fill');
        icon.classList.add('bi-eye-slash-fill');
    } else {
        password.type = 'password';
        icon.classList.remove('bi-eye-slash-fill');
        icon.classList.add('bi-eye-fill');
    }
});

const confirm_password = document.getElementById('confirm_password');
const toggleConfirmPassword = document.getElementById('toggleComfirmPassword');
const icon1 = toggleConfirmPassword.querySelector('i');

toggleConfirmPassword.addEventListener('click', () => {
    if (confirm_password.type === 'password') {
        confirm_password.type = 'text';
        icon1.classList.remove('bi-eye-fill');
        icon1.classList.add('bi-eye-slash-fill');
    } else {
        confirm_password.type = 'password';
        icon1.classList.remove('bi-eye-slash-fill');
        icon1.classList.add('bi-eye-fill');
    }
});

const scrollBtn = document.getElementById('scrollTopBtn');
const path = scrollBtn.querySelector('path');
const pathLength = path.getTotalLength();

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    const drawLength = pathLength * (1 - scrollPercent);
    path.style.strokeDashoffset = drawLength;

    scrollTop > 100 ? scrollBtn.classList.remove('hide') : scrollBtn.classList.add('hide');
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});