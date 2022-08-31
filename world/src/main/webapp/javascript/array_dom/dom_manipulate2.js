let addBtn = document.querySelector('button');
addBtn.onclick = function () {
    let mid = document.getElementById('mid');
    let mname = document.getElementById('mname');
    let mphone = document.getElementById('mphone');

    console.log(mid.value, mname.value, mphone.value);

    // 저장값이 없으면 warning 메시지.
    if(!mid.value || !mname.value || !mphone.value){
        alert('필수값을 입력하세요')
        return; // 함수에서 return은 함수의 강제종료
    }

    const mValues = [mid.value, mname.value, mphone.value]

    let tr = document.createElement('tr');

    mValues.forEach((value) => {
        let td = document.createElement('td'); // id위치 <td>user1</td> user1 : textNode
        let txt = document.createTextNode(value);
        td.appendChild(txt); // <td> user1 </td>
        tr.appendChild(td); // <tr><td> user1 </td></tr>
    })
    document.getElementById('list').appendChild(tr);

    // 초기화.
    mid.value='';
    mname.value='';
    mphone.value='';
    mid.focus();
}