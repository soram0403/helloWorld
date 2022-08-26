const members = [
    {id: 'user1', name: '홍길동', score: 80, phone: '010-1234-1234', gender: 'M'},
    {id: 'user2', name: '김민식', score: 75, phone: '010-3456-3456', gender: 'W'},
    {id: 'user3', name: '최우신', score: 55, phone: '010-5678-5678', gender: 'M'},
    {id: 'user4', name: '황의겸', score: 88, phone: '010-6789-6789', gender: 'W'}
];

// 테이블형식(표) =>
// 성별: 남자 => 파란색글씨, 여자 => 빨간색 글씨
//makeTr(파란색,빨간색)/makeBlueTr(),makeRedTr()

// 1
function makeTr(mem, color){
    let tr = `<tr style ='color: ${color}'>`;
    for (let prop in mem){
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '</tr>';
    return tr;
}

// 2
function makeBlueTr(mem){
    let tr = `<tr style = 'color:blue'>`;
    for(let prop in mem){
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '</tr>';
    return tr;
}

function makeRedTr(mem){
    let tr = `<tr style = 'color:red'>`;
    for(let prop in mem){
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '</tr>';
    return tr;
}

let str = '<table border =1>';
str += '<tr><th>아이디</th><th>이름</th><th>점수</th><th>연락처</th><th>성별</th>'
for(let i = 0 ; i<members.length; i++){
    if(members[i].gender == 'M'){
        str += makeTr(members[i],'#7D6B9E');
    }else if(members[i].gender == 'W'){
        str += makeTr(members[i],'salmon');
    }
}
str += '</table>'
document.write(str);

/////////////////////////////////////////////////////////
const passMember = [];

for(let i = 0 ; i < members.length; i++){
    if(members[i].score>60) {
        console.log('이름: ' + members[i].name);
        passMember[passMember.length] = members[i].name;
    }
}
console.log(passMember);

const women = [];
for (let member of members){
    if(member.gender == 'W'){
        women[women.length] = member;
    }
}
console.log(women);
// let welcomeFnc = function(param) {}
function welcomeFnc(param) {
    console.log('Welcome ' + param);
}

// let helloFnc = function(param) {}
// function helloFnc(param) {}

// 화살표 함수.
let helloFnc = param => console.log('Hello ' + param);

// 함수를 매개값으로 받는 함수.
function callFunc(fnc){
    let name = 'Hong';
    fnc(name);
}

callFunc(helloFnc);