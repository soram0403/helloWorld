//상수 constant

function makeTr(mem={}){
    let tr = '<tr>';
    // `<td> ${member.id} </td> <td>${member.name}</td><td>${member.score}</td>`
    for (let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;
    }
    tr +='<td><button>확인</button></td>'
    tr += '</tr>';
    return tr;
}

function makeHd(){
    let titles = ['아이디', '이름', '점수', '연락처'];
    let tr = '<tr>';
    // '<tr><th>아이디</th><th>이름</th><th>점수</th></tr>'
    for (let title of titles) {
        tr += `<th>${title}</th>`;
    }
    
    tr += '</tr>';
    return tr;
}

const members = [
    {id: 'user1', name: '홍길동', score: 80, phone: '010-1234-1234'},
    {id: 'user2', name: '김민식', score: 75, phone: '010-3456-3456'},
    {id: 'user3', name: '황의겸', score: 88, phone: '010-5678-5678'}
];

let str = '<table border=1>';
str += makeHd();
for(let member of members){
    // str += '<tr>';
    // str += `<td> ${member.id} </td> <td>${member.name}</td><td>${member.score}</td>`;
    // str += '</tr>';
    str += makeTr(member);
}

str += '</table>';
document.write(str);
