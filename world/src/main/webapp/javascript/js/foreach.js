const members = [
    {id: 'user1', name: '홍길동', score: 80, phone: '010-1234-1234', gender: 'M'},
    {id: 'user2', name: '김민식', score: 75, phone: '010-3456-3456', gender: 'W'},
    {id: 'user3', name: '최우신', score: 55, phone: '010-5678-5678', gender: 'M'},
    {id: 'user4', name: '황의겸', score: 88, phone: '010-6789-6789', gender: 'W'}
];

function makeTr(mem, color){
    let tr = `<tr style ='color: ${color}'>`;
    for (let prop in mem){
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '</tr>';
    return tr;
}

// for반복문. 배열메소드(forEach)
let str = '<table border =1>'
str += '<tr><th>아이디</th><th>이름</th><th>점수</th><th>연락처</th><th>성별</th>'
members.forEach((val,ind,ary) => {
    if(val.gender == 'M'){
       str += makeTr(val,'#0D6A9E');
    }else if(val.gender == 'W'){
       str += makeTr(val,'salmon');
    }
});  
document.write(str);


function callBackFnc(val,ind,ary){
    console.log(val);
}