// Array.prototype.map(); => 매핑 (A => A') 같은내용을 다른 타입으로 변환
// Array.prototype.filter(); => 필터링(A -> a) 

const names = ['이현성', '이주훈', '황용주', '최승현'];

let mapfnc = (name, idx) => {
    let obj = {};
    obj.name = name;
    obj.sno = idx + 1; // {name:'이현성',sno:1}
    return obj;
}
let filfnc = (member)=> { // return 값이 true 이면 반환 false이면 반환안함.
    return  member.name.startsWith('이');
    // startsWith : 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 true 혹은 false로 반환
}
// map 메소드.
let members = names.map(mapfnc);
console.log(members);

// filter 메소드
let lees = members.filter(filfnc);
console.log(lees);

// map.filter 메소드 체인
let result = names.map(mapfnc).filter(filfnc);
console.log(result);

// reduce로 map과 같은 기능 구현.
let mapFnc = (acc,val,idx)=>{
    let obj = {}
    obj.name = val;
    obj.sno = idx + 1;
    acc.push(obj); // [{name:'이현성',sno:1}]
    return acc;
}

members = names.reduce(mapFnc,[]);
console.log(members);

// reduce로 filter와 같은 기능 구현.

let reduceFilFnc = (acc,val)=>{
    if(val.name.startsWith('이')){
    acc.push(val);
    }
    return acc;
}

lees = members.reduce(reduceFilFnc,[]);
console.log(lees);