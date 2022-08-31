const members = [
    ['홍길동',20],
    ['김익수',25],
    ['손봉호',23]
]
members.push(['도소람',31]);
members[0][1] = 22;

const objMembers = [];

// members.forEach(member=>{
//     console.log(`이름: ${member[0]}, 나이:${member[1]}`)
// })

members.forEach(member=>{
    let obj = ({name:member[0], age: member[1]});
    objMembers.push(obj);
})
console.log(objMembers);

const aryMembers = [];
objMembers.forEach(member =>{
    let ary = [member.name, member.age];
    aryMembers.push(ary);
})
console.log(aryMembers);

// console.table(members);