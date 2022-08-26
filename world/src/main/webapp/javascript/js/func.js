
let num = null;

console.log(num);

// 함수 선언식

// boolean : 0, null, undefined, '' = false
function sum(num1 = 0, num2 = 0) {
    //num1 + num2; // return undefined.
    // if (!num1 && !num2)
    //     return num1 + num2;
    // else return 0;
    return num1 + num2;
}

console.log(sum(1, 2, 3)); // 매개값의 개수에 상관없이 계산처리.
console.log(sum(1)); // NaN(Not a Number) 계산할 수 없는 값 => 1 + undefined
console.log(sum() + sum(2, 3));

console.log(sum);

// 함수 표현식
sum = function(num1, num2) {
    return num1 + num2 ;
}
sum(1,2);

let showInfo = function(name) {
    return `안녕하세요 ${name}님.`;
}

console.log(showInfo('홍길동'));

let welcome = showInfo;
console.log(welcome('김민수'));

let members= ['노은경','이준의','김민선'];
for(let member of members) {
    console.log(welcome(member));
}