let str = 'Good, Morning!';

console.log(str.length);
console.log(str.slice(2, 7)); // index:2(include) ~ index:7(exclude)
console.log(str.slice(2)); // index:2 ~ 끝까지
console.log(str.slice(2, -2)); // index:2(include) ~ index:12(14-2 / exclude)
console.log(str.slice(-2)); // index:12 ~ 끝까지

console.log(str.substring(0,7));
// substr(3,5); index:3부터 5문자.

// 문자열을 찾아서 해당되는 위치의 값을 리턴.
console.log(str.indexOf('Mor'));
console.log('Good Morning, Good Afternoon, Good Evening'.lastIndexOf('Goods'));

str = 'Good Morning, Good Afternoon, Good Evening';
let position = str.indexOf('Good',str.indexOf('Good')+1); // => 0

console.log(position); // 두번째 Good 문자가 있는 위치 인덱스.

// 문자열에서 반복되는 구문의 횟수.
let cnt = 0;
let pos = str.indexOf('Good');

while(pos != -1){
    cnt ++;
    pos = str.indexOf('Good', pos+1);
}

console.log(cnt + ' 회');

const members =[
    {name: "황병걸", age:25},
    {name: "김효인", age:22},
    {name: "이상욱", age:18},
    {name: "최근석", age:29}
]

let searchKey = prompt('찾는 이름을 입력하세요');
// members 배열에서 searchKey 을 찾아서 나이 콘솔 출력.
// members.forEach(member=> {
//     if(member.name.indexOf(searchKey) != -1){
//         console.log(`${member.name}은 ${member.age}살입니다.`);
//     }
// })

members.forEach(member=> {
    if(member.name.includes(searchKey)){ // includes() => true / false
        console.log(`${member.name}은 ${member.age}살입니다.`);
    }
})