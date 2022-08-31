const numbers = [-2, -3, -8, -5, -1];
let sum = 0;

// numbers.forEach(num =>{
//     sum += num;
// })
// console.log(sum);

// 누적
let result = numbers.reduce(function(acc,val,idx,ary){ // acc:누적값
    return acc + val;
},0 /* 초기값 */);

result = numbers.reduce((acc, val /*, idx, ary */)=>{
    console.log(acc,val);
    acc.push(val + 2 ); // [4, 5, 10, 7, 3]
    return acc;
}, [] /* 초기값 : 배열 */);

// <ul><li>2</li><li>3</li><li>8</li><li>5</li><li>1</li></ul>
result = numbers.reduce((acc,val,idx)=>{
    console.log(acc);
       if(idx == 0){
        acc = '<ul>';
       }
       acc += '<li>' + val + '</li>';
       if(idx == numbers.length-1) {
        acc += '</ul>';
       }
       return  acc; // 다음순번의 누적초기값으로 사용.
},'');
document.write(result);
console.log('최종결과:', result);

// 배열요소의 가장 큰 값
let max = numbers[0];

// numbers.forEach(num => {
//     if(num>max) {
//         max = num;
//     }
// })

// for(let i=0; i<numbers.length;i++){
//     if(numbers[i]>max) {
//         max = numbers[i];
//     }
// }
max = numbers.reduce((acc,val) => {
    return acc > val ? acc : val;
},Number.MIN_SAFE_INTEGER); // Number.MIN_SAFE_INTEGER : 가장 작은값 구하는 정적 속성 (상수)

console.log('max: ' + max);

let min = numbers[0];
min = numbers.reduce((acc,val) => {
    return acc < val ? acc :val;
},Number.MAX_SAFE_INTEGER)
console.log('min: ' + min);