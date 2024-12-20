
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

function keywordSearch() {
    const inputbox = document.querySelector('#top-search-inputbox')
    console.log(inputbox.value)
}

let users = JSON.parse(localStorage.getItem('users')) || []

function joinBtn() {
    // 필드 값 가져오기
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    const confirmPassword = document.querySelectorAll('input[type="password"]')[1].value;
    const name = document.querySelector('input[type="name"]').value;
    const phoneNum = document.querySelector('input[type="phoneNum"]').value;
    const address = document.querySelector('input[placeholder="주소"]').value;
    const detailAddress = document.querySelector('input[placeholder="상세주소"]').value;

    // 회원 정보를 객체로 저장
    const user = {
        email: email,
        password: password,
        name: name,
        phoneNum: phoneNum,
        address: address,
        detailAddress: detailAddress
    };

    users.push(user); // users 배열에 추가

    // 로컬 스토리지에 저장
    localStorage.setItem('users', JSON.stringify(users));

    console.log(users); // 콘솔 로그로 확인

    // 폼 초기화
    document.querySelector('form').reset();
    alert("가입완료!")
}


function loginBtn() {
    // 로컬스토리지에서 사용자 데이터 가져오기
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // 입력 값 가져오기
    const email = document.querySelector('input[placeholder="이메일"]').value;
    const password = document.querySelector('input[placeholder="비밀번호"]').value;

    
    let userFound = false; 
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            userFound = true;
            
            alert("로그인 성공!");
            localStorage.setItem('loggedInUser', JSON.stringify(users[i]));  
            
            break;

        }
    }

    // 로그인 실패 시 처리
    if (!userFound) {
        alert("이메일 또는 비밀번호가 잘못되었습니다.");
    }
}