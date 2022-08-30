// 원시형 vs. 참조형
let str1 = 'Hello'; // string
let str2 = new String('Hello'); // object

console.log(str1 == str2); // 값을 비교.
console.log(str1 === str2); // 값과 타입을 비교.

let num1 = 20; // number 
let num2 = new Number(20); // object

console.log(num1 == num2);

let obj; // undefined.
obj = null; // null.

let sym1 = Symbol('symbol'); // unique 키 값을 생성.
let sym2 = Symbol('symbol'); // 
console.log(sym1 == sym2);

// 객체(Object) {}
obj = {
    sname: 'Hong', // 속성: 속성값
    age: 20,
    showAge: function () {
        console.log('나이는 ' + this.age + ' 입니다.');
    } // 메소드
}
console.log(obj.sname);
console.log(obj['age']);
obj.showAge();

obj.sname = 'Hwang'; // 값 할당.

// 배열 []
const numbers = []; // new Array();
numbers[numbers.length] = 10; // 추가.
numbers[numbers.length] = 20; // 추가.
numbers[numbers.length] = 30; // 추가.

numbers.forEach(function (val) {
    console.log(val);
}); // 메소드(함수(값, 인덱스, 배열))

const randomVals = [];
for (let i = 0; i < 5; i++) {
    let val = Math.ceil(Math.random() * 10); // 0 ~ 1 임의의값을 생성. ceil : 올림
    randomVals[i] = val;
}

console.clear(); // 콘솔메시지 초기화.
randomVals.forEach(function (val) {
    if (val > 5) {
        console.log(val);
    }
});

console.log(Math.ceil(.8)); // 0 ~ 1 올림

console.clear(); // 콘솔메시지 초기화.
randomVals.splice(0, randomVals.length); //

// Math.random() : 0 ~1 임의 값 생성.
// 21 ~ 50

for (let i = 0; i < 5; i++) {
    let val = Math.ceil(Math.random() * 30) + 20; // 0~50
    randomVals[i] = val;
}
console.log(randomVals);

console.clear(); // 콘솔메시지 초기화.
randomVals.forEach(showEven); // 짝수만 출력.

// 콜백 함수 (callback function)
function showEven(val) {
    if (val % 2 == 0) {
        console.log(val);
    }
};

console.clear(); // 콘솔메시지 초기화.

console.log('3' + 4); // '34'
console.log(-'3' + 4); // '1'
console.log('3' * 4); // '12'

console.log((3).toString());

console.log(Math.abs(-20));
console.log(Math.sign(-30));

console.clear(); // 콘솔메시지 초기화.

const arr2 = [-3, 2, -45, 0, 4, 7];
const arr3 = arr2.map(function(val){
    return Math.sign(val);
}); // 배열의 갯수만큼 콜백함수 실행 => 새로운 배열 반환.
console.log(arr3);

// NaN, Infinity
console.log(3/'five');
console.log(1/0);
