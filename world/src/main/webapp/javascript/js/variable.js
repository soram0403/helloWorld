var age; // undefined (선언만 하고 값은 할당 안된 상태) : - 호이스팅(hoisting)  
// 전역변수(윈도우 안의 변수) / 지역변수(함수 안에 선언된 변수:함수가 끝나면 사라짐)

// ES6:
let name = 'Hong'; // 변수선언. 전역변수 / 지역변수 / 블락레벨변수.
fname = 'Hwang';
console.log(fname);

const PI = 3.14; // 상수선언 : 재할당 불가
// PI = 1.23;

console.log(age);
// var age = 20; 
age = 20; 

function localfnc(){
    var age = 30; // 지역변수
    console.log('지역변수: ' + age);
    age = 35;
    console.log('지역변수: ' + age);

    let fname = 'Kim';
    console.log('지역변수: '+fname);
}

localfnc();

{
    let fname = 'Park';
    console.log('블락레벨변수: ' + fname);
    var age = 22; // 전역변수. 에러X
}

console.log('전역변수: ' + age);
console.log('전역변수: ' + fname);

console.log(window);
