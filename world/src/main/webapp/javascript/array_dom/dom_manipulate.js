// element 생성: createElement()
// textNode 생성: createTextNode()
// 부모-자식 형성 : appendChild()

let frm = document.createElement('form');
frm.setAttribute('action','addMember.jsp');
frm.setAttribute('method','post');

// 자식요소(label-id)
let labelId = document.createElement('label');
labelId.setAttribute('for','user_id');
labelId.innerText = '사용자아이디';
frm.appendChild(labelId);

// 자식요소(input-id)
let inputId = document.createElement('input');
inputId.setAttribute('type', 'text');
inputId.setAttribute('name', 'user_id');
inputId.setAttribute('id', 'user_id');
frm.appendChild(inputId);

// 자식요소(label-pw)
let labelPw = document.createElement('label');
labelPw.setAttribute('for','passoword')
labelPw.innerText = '사용자비밀번호';
frm.appendChild(labelPw);

// 자식요소(input-pw)
let inputPw = document.createElement('input');
inputPw.setAttribute('type', 'password');
inputPw.setAttribute('name', 'password');
inputPw.setAttribute('id', 'password');
frm.appendChild(inputPw);

// 자식요소(button)
let button = document.createElement('button')
button.innerText = '로그인';
frm.appendChild(button);

// div#show의 자식요소로 지정.
document.getElementById('show').appendChild(frm);
console.log(frm);


