// 메소드: trim() > trimStart() > trimEnd()
// 메소드: replace(a,b) : a문자를 b문자 변환.
// 정규표현식: replace(/\s+/, '표현값')
// 메소드: split('구분자') => 문자열을 배열생성.
// 메소드: join('구분자') => 배열 -> 문자열()

let str1 = 'Hello';
let str2 = new String('Hello');

console.log(str1, str2, str1==str2, str1 === str2);
console.log(str1.substring(0,3));

// String => string
str2.valueOf(); // 객체 -> 기본타입
console.log(typeof str2.valueOf());

let result = eval(new String('1+2*3').valueOf());
console.log(result);

let trimStr = ' 모든 공백을 제거하는 메소 드s   ';
console.log(trimStr.trimStart().trimEnd()); // trim: 앞뒤 공백 제거

// String 객체의 메소드 추가 정의.
let obj = {}; // new Object()
let ary = []; // new Array();
let regExp = /\s+$/; // new RegExp();

String.prototype.ltrim = function(){
    return this.replace(/^\s/,'');
}
String.prototype.rtrim = function(){
    return this.replace(/\s+$/,'');
}
console.log(trimStr.ltrim().rtrim());

trimStr = '             how are you      to   day          everyone. ';
console.log(trimStr.trim().replace(/ \s+/g, ''));

const trimAry = trimStr.split(' ');
// forEach, map, filter
const filAry = trimAry.filter(function (str) {
    return str != '';
});
console.log(filAry.join('-'));

const str = 'The quick brown fox jumps over the lazy dog.';
const strAry = str.split(' '); // String -> array
console.log(strAry.join('-')); // array -> String