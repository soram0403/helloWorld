// chartAt(index) => 문자 반환.

console.log('World'.charCodeAt(3));

function checkGender(no) {
    let gender = no.replace('-', '').charAt(6);
    if (gender == '1' || gender == '3') {
        console.log('남자입니다.')
    } else if (gender == '2' || gender == '4') {
        console.log('여자입니다.')
    } else {
        console.log('잘못된 번호입니다.')
    }
    
}

// function checkGender(no) {
//     if (no.length == 14) {
//         if (no.charAt(7) == 1) {
//             console.log('남자입니다.')
//         } else if (no.charAt(7) == 2) {
//             console.log('여자입니다.')
//         }
//     } else if (no.length == 13) {
//         if (no.charAt(6) == 1) {
//             console.log('남자입니다.')
//         } else if (no.charAt(6) == 2) {
//             console.log('여자입니다.')
//         }
//     }
// }
checkGender('970301-2345678');
checkGender('950301-1367234');
checkGender('9503011367234');