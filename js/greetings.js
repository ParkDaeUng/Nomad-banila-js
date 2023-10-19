const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//반복되는 string들은 변수(대문자로 구분)로 저장..
//"hidden", "username" 등 string로 계속 작성하다 오타가 나면 스크립트에서는 감지를 못해서 error찾는데 시간이 걸릴수도..
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); //브라우저 기본동작 막기(자동새로고침x)
    loginForm.classList.add(HIDDEN_CLASSNAME);  //로그인폼에 class="hidden" 추가
    const username = loginInput.value;  //로그인폼에 있는 input에 value값 담기
    localStorage.setItem(USERNAME_KEY, username); //localstorage에 저장할 data입력 ("저장할 key값", value)
    paintGreetings(username);
};

function paintGreetings(username) {
    //"Hello " + username; 과 같다
    greeting.innerText = `Hello ${username}`;   //id="greeting"에 값넣기
    greeting.classList.remove(HIDDEN_CLASSNAME);    //greeting에 있는 class="hidden" 삭제
};

const savedUsername = localStorage.getItem(USERNAME_KEY);   //localStorage에서 username가져와서 변수에 담기

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else {
    paintGreetings(savedUsername);
};