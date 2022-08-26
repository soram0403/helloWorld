let numbers = [23, 33, 14, 52, 77, 55, 16];

// 1)
//짝수합 => result
let result = 0;
for(number of numbers) {
    if(number%2 == 0){
        result += number;
    }
}
let result2 = 0;
numbers.forEach((val,ind,ary) => {
    if( val % 2 == 0) {
        result2 += val;
    }
});
console.log('짝수합: ' + result);
console.log('짝수합: ' + result2);

// 홀수번째 합
let result3 = 0;
numbers.forEach((val,ind,ary) => {
    if(ind % 2 == 1) {
        result3 += val;
    }
});
console.log('홀수번째 숫자의 합: ' + result3);

let result4 = 0;
numbers.forEach((val,ind,ary) => {
    if(val > 30){
        result4 += val;
    }
});
console.log('30보다 큰 숫자의 합: ' + result4);