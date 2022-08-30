// 함수호이스팅.
function myFunc(param) { // parameter 매개변수
    console.log('Hello ' + param);
}

function myFunc2(param1, param2) {
    console.log(param1 + param2);
}

// 함수선언식.
myFunc('World'); // argument 매개값
myFunc2('Welcome ', 'Home!!');

// 함수표현식.
let myFunc3 = function (param) {
    document.write(`<p>Hello, ${param}</p>`);
}
myFunc3('홍길동');

let myFunc4 = myFunc3;
myFunc4('World');

//매개값을 처리하는 arguments 객체
function mySum(n1=0, n2=0) {
    let sum = 0;
    console.log(arguments);
    // console.log(n1+n2);
    
    for(let num of arguments)
        sum += num;
           console.log(sum);
}

mySum(1,2,3,4,5,6,7);

// 화살표 함수
function mySum5(a, b){
    console.log(a + b);
}

// forEach메소드의 매개값으로 화살표함수를 사용.
['Hello','World'].forEach((val, idx) => console.log(val, idx));
