document.addEventListener('DOMContentLoaded', function () {
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
        const emailInput = loginModal.querySelector('input[type="email"]');
        loginModal.addEventListener('shown.bs.modal', () => {
            emailInput.focus();
        });
    }

    const rememberMeCheckbox = document.getElementById('rememberMe');
    if (rememberMeCheckbox) {
        rememberMeCheckbox.addEventListener('change', (event) => {
            if (event.target.checked) {
                console.log("로그인 상태 유지 활성화");
            } else {
                console.log("로그인 상태 유지 비활성화");
            }
        });
    }
});



function allcheck(){
    const agreeAll = document.getElementById('agreeAll');
    const agreeTerms = document.getElementById('agreeTerms');
    const agreePrivacy = document.getElementById('agreePrivacy');
    const agreeAge = document.getElementById('agreeAge');
    
    if (agreeAll.checked) {
        agreeTerms.checked = true;
        agreePrivacy.checked = true;
        agreeAge.checked = true;
    } else {
        agreeTerms.checked = false;
        agreePrivacy.checked = false;
        agreeAge.checked = false;
    }
}