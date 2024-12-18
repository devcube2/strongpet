document.addEventListener('DOMContentLoaded', function () {

    const loginModal = document.getElementById('loginModal');
    const emailInput = document.querySelector('#loginModal input[type="email"]');

    loginModal.addEventListener('shown.bs.modal', () => {
        emailInput.focus();
    });

    const rememberMeCheckbox = document.getElementById('rememberMe');
    rememberMeCheckbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log("로그인 상태 유지 활성화");
        } else {
            console.log("로그인 상태 유지 비활성화");
        }
    });
});
document.getElementById('signupButton').addEventListener('click', function(e) {
    
    window.location.href = "joinModal/terms"; 
});