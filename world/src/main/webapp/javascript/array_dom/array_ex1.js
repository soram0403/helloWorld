const data =`[{"id":1,"first_name":"Gregoor","last_name":"McGinty","email":"gmcginty0@patch.com","gender":"Male","salary":6029},
{"id":2,"first_name":"Julian","last_name":"Lamp","email":"jlamp1@sciencedirect.com","gender":"Polygender","salary":4245},
{"id":3,"first_name":"Carline","last_name":"Gotfrey","email":"cgotfrey2@example.com","gender":"Female","salary":5336},
{"id":4,"first_name":"Lorie","last_name":"Heymes","email":"lheymes3@mapy.cz","gender":"Female","salary":2755},
{"id":5,"first_name":"Zilvia","last_name":"Dunsford","email":"zdunsford4@boston.com","gender":"Female","salary":5462},
{"id":6,"first_name":"Tamqrah","last_name":"Hilland","email":"thilland5@weather.com","gender":"Female","salary":2188},
{"id":7,"first_name":"Chrystel","last_name":"McShee","email":"cmcshee6@stanford.edu","gender":"Female","salary":5014},
{"id":8,"first_name":"Catlee","last_name":"Bainton","email":"cbainton7@comsenz.com","gender":"Polygender","salary":4163},
{"id":9,"first_name":"Debora","last_name":"Bernollet","email":"dbernollet8@businesswire.com","gender":"Female","salary":2459},
{"id":10,"first_name":"Rollins","last_name":"Crosoer","email":"rcrosoer9@photobucket.com","gender":"Male","salary":6821},
{"id":11,"first_name":"Zilvia","last_name":"Hanhard","email":"zhanharda@princeton.edu","gender":"Female","salary":8007},
{"id":12,"first_name":"Colby","last_name":"Como","email":"ccomob@cmu.edu","gender":"Polygender","salary":6759},
{"id":13,"first_name":"Zacharia","last_name":"Pettiford","email":"zpettifordc@nsw.gov.au","gender":"Male","salary":2708},
{"id":14,"first_name":"Georges","last_name":"Langstaff","email":"glangstaffd@ucoz.com","gender":"Male","salary":2505},
{"id":15,"first_name":"Calvin","last_name":"Dowzell","email":"cdowzelle@amazon.de","gender":"Male","salary":2873}]`;

let result = JSON.parse(data); // string -> object 변환
// result.forEach(element => {
//     console.log(element.first_name);
// });
// console.log(result[0]);

// 성별이 Femail 이고 salary 5000이상인 사람.
let str;
let filMems = result.filter((member) => {
    return member.gender == 'Female' && member.salary >= 5000;
});
str = filMems.reduce((acc,val,idx)=>{
    if(idx == 0) {
        acc = '<ul>';
    }
    
    acc += `<li>'id:${val.id}, first_name: ${val.first_name}, last_name: ${val.last_name}, salary:${val.salary}'</li>`;
    
    if(idx == result.length-1){
        acc += '</ul>';
    }
    return acc;
}, '')

document.write(str); // <ul><li>id 15, Carolin  5500</li></ul>
