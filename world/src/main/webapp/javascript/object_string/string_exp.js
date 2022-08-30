let now = new Date();
console.log(now.toDateString()); // Tue Aug 30 2022
console.log(now.toLocaleDateString()); // 2022. 8. 30.
console.log(now.toLocaleTimeString()); // 오후 5:28:10
console.log(`${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`) // 월정보는 0부터 시작

console.log(` ${now.getSeconds()<10?'0'+now.getSeconds():now.getSeconds()}`);
console.log(`0${now.getSeconds()}`.slice(-2));

console.log('abc'.toUpperCase());
console.log('ABC'.toLowerCase());

Date.prototype.hhmiss = function() {
    // 09:08:07 (시:분:초) 표현하는 함수
    let hh = now.getHours()<10?'0'+now.getHours():now.getHours();
    let mi = now.getMinutes()<10?'0'+now.getMinutes():now.getMinutes();
    let ss = now.getSeconds()<10?'0'+now.getSeconds():now.getSeconds();
    return `${hh}:${mi}:${ss}`;
}

console.log(now.hhmiss());