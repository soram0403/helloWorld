let originObj = {
    sname: 'Park',
    age:10,
    changeAge : function(){
        this.age++;
    }
}

let cloneObj = originObj; // originObj 참조값을 cloneObj.
cloneObj.sname = 'Choi';
console.log(originObj.sname);
originObj.changeAge();
console.log(cloneObj.age);

// 복사.
let obj2 = new Object();
let copyObj = Object.assign({}, originObj); // assign(새로만들객체, 복사할개체) : 비어있는 값에 originObj의 값을 담아주겠다.

copyObj.sname = 'Hong';
console.log(originObj.sname);

let newObj = {
    sname: 'Kim',
    phone: '010-1234',
    age : 10
}

let dupObj = Object.assign(newObj, originObj); // newObj와 originObj 같은 항목은 덮어쓰기 됨.
console.log(dupObj);

// 객체의 속성을 지정.
let s1 = {
    sname : 'Hong'
}
s1.age = 10; // delete s1.age;
s1['phone'] = '010-1111';
s1.friends = [{name: '김영식', phone:'010-2222', age:20},
              {name: '홍명식', phone:'010-2345', hobbies:['독서','수영']}
             ];

console.log(s1.friends[1].hobbies[0]);

class Student {
    constructor(sname, age){
        this.sname = sname;
        this.age = age;
    }
}

let s2 = new Student('홍길동',20);
Object.defineProperty(s2, 'score', {
    set: function(score){
        if(score > 100){
            throw '잘못된 값을 입력했습니다. (100보다 적은 값)'
        } else if (score < 0){
            throw '잘못된 값을 입력했습니다. (0보다 큰 값)'
        } else {
            this._score = score;
        }
    },
    get: function () {
        return this._score;
    }
});
s2.score = 80;
console.log('점수는 ' + s2.score);

let s3 = new Student('김민규', 22);

Student.prototype.showInfo = function() { //prptotype : 전체 클래스에 반영
    return `이름은 ${this.sname}, 나이는 ${this.age}입니다.`;
}
console.log(s2.showInfo());
console.log(s3.showInfo());