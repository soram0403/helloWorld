// 배열에 요소 추가/삭제
// push() : 가장 마지막 위치에 추가. pop() : 가장 마지막 위치에 존재하는 것 제거
// unshift() : 가장 첫번째 위치에 추가. shift() : 가장 첫번째 위치에 존재하는 것 제거
// slice(firstindex, lastindex); 얕은 복사본을 새로운 배열 객체로 반환
// end 값이 배열의 길이보다 크다면, slice()는 배열의 끝까지(arr.length) 추출
// splice(위치, 대체할 갯수, 대체할 값...) : 추가, 수정, 삭제
const names =[];

names[0]= '정다슬';
names[names.length]='백진희';
names[names.length]='황용주';
names[names.length]='손정빈';

names.push('김아현');

names.pop(); // 매개값x
names.pop();
names.shift();

names.unshift('손정빈');

const newNames = names.slice(0,2);
newNames.splice(1,1,'홍길동');

console.log(newNames);

// 추가. 수정. 삭제
names.splice(2,0,'홍길동');

const otherNames = names.concat(newNames);
console.log(otherNames);

names.length=0; // 크기를 0 으로 지정하면 모두 삭제됨.

names.forEach(name=> {
    console.log(name);
})