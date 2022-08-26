// multi.js : 구구단 출력.

// <p> 3 x 1 = 3 </p>

function gugudan(numb) {
    let num = numb;
    let str = '';
    for (let i = 1; i <= 9; i++) {
        // str += '<p>' + num + 'x' + i + " = " + (num * i) + '</p>';
        str += `<p>${num} x ${i} = ${num*i} </p>`
    }
    return str;
}
let result = gugudan(8);
document.write(result);

let numb = 30;
console.log(`numb의 값은 ${numb} 입니다.`);