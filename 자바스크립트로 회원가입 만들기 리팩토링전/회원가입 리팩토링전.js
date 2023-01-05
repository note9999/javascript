// 정규식 조건
const regexId = /^\w{8,20}$/;
const regexPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
const regexMail = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
const regexPhone = /^\d{2,3}-\d{3,4}-\d{4}$/;

// 올바르게 입력했는 지 저장해주는 변수들
let isId = false;
let isPw = false;
let isEmail = false;
let isPhone = false;

// 로그인 버튼 클릭시
const idBtn = document.querySelector('#id_confirm');
const pwBtn = document.querySelector('#pw_confirm');
const emailBtn = document.querySelector('#email_confirm');
const phoneBtn = document.querySelector('#phone_confirm');
// 유효성 검사 후 결과 표시해주는 p태그들 
let idCheck = document.querySelector('.id_input_check');
let pwCheck = document.querySelector('.pw_input_check');
let emailCheck = document.querySelector('.email_input_check');
let phoneCheck = document.querySelector('.phone_input_check');

 idBtn.addEventListener('click', function(e){
    e.preventDefault(); 
  let val = document.querySelector('#id_txt').value;
  // console.log(document.querySelector('#id_txt').value);

  if(regexId.test(val)) {
    isId = true;
    idCheck.textContent = '사용가능 한 id입니다';
    /*idCheck.innerHTML = '입력되었습니다.';*/
    idCheck.style.color = 'green';
  } else {
    isId = false;
    idCheck.textContent = '사용불가능 한 아이디입니다.';
    /*idCheck.innerHTML = '입력되지 않았습니다.';*/
    idCheck.style.color ='red';
  }
  isOk(); 
});

pwBtn.addEventListener('click', function(e){
  e.preventDefault();
  let val = document.querySelector('#pw_txt').value; 

  if(regexPw.test(val)) {
    isPw = true;
    pwCheck.textContent = '사용가능 한 비밀번호입니다.'
    /*pwCheck.innerHTML = '입력되었습니다.';*/
    pwCheck.style.color = 'green';

  } else {
    isPw = false;
    pwCheck.textContent = '사용불가능 한 비밀번입니다.'
    /*pwCheck.innerHTML = '입력되지 않았습니다.';*/
    pwCheck.style.color ='red'; 
  }
  isOk(); 
});

emailBtn.addEventListener('click', function(e){
  e.preventDefault();
  let val = document.querySelector('#email_txt').value;
  if(regexMail.test(val)) {
    isEmail = true;
    emailCheck.textContent = '사용가능 한 이메일입니다.';
    /*emailCheck.innerHTML = '입력되었습니다.';*/
    emailCheck.style.color = 'green';
    
  } else {
    isEmail = false;
    emailCheck.textContent = '사용불가능 한 이메일입니다.'
    /*emailCheck.innerHTML = '입력되지 않았습니다.';*/
    emailCheck.style.color ='red';
  }
  isOk(); 
});

phoneBtn.addEventListener('click', function(e){
  e.preventDefault();
  let val = document.querySelector('#phone_txt').value;
  if(regexPhone.test(val)) {
    isPhone = true;
    phoneCheck.textContent = '사용가능 한 전화번호입니다.';
    /*phoneCheck.innerHTML = '입력되었습니다.';*/
    phoneCheck.style.color = 'green';

  } else {
    isPhone = false;
    phoneCheck.textContent = '사용불가능 한 전화번호입니다.';
    /*phoneCheck.innerHTML = '입력되지 않았습니다.';*/
    phoneCheck.style.color ='red';
  }
    isOk(); 
});


function isOk() {
  if(isId && isPw && isEmail && isPhone) {
   document.querySelector('.reg_req_btn').style.background = 'blue';
    }
  }