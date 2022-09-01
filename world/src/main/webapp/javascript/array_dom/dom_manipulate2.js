const members = [{
        mid: 'admin',
        mname: '관리자',
        mphone: '010-1111-2222'
    },
    {
        mid: 'hong12',
        mname: '홍길동',
        mphone: '010-3333-4444'
    },
    {
        mid: 'parkgr',
        mname: '박규림',
        mphone: '010-5555-6666'
    },
]
document.addEventListener('DOMContentLoaded', function () { // dom요소에 이벤트 등록.(이벤트타입,이벤트핸들러)

    showMember();
    // 등록버튼 이벤트.
    let addBtn = document.querySelector('button');
    addBtn.addEventListener('click', addMember);

    // 회원찾기 이벤트.
    let findBtn = document.getElementById('findMember');
    findBtn.addEventListener('click', findMember);

    // 체크박스 전체선택/ 해제 이벤트.
    let allCheck = document.getElementById('allCheck');
    allCheck.addEventListener('change', allChecked);

}); // dom 요소에 이벤트 등록.

function allChecked() {
    // true / false 값은 this의 checked 값을 할당.
    let chks = document.querySelectorAll('tbody input[type="checkbox"]');
    chks.forEach(check =>{
        check.checked = this.checked; // prop
       
    })

}

function findMember() {
    // 찾을 아이디.
    let id = document.getElementById('mid').value;

    let trs = document.getElementsByTagName('tbody')[0].children;
    trs = document.querySelectorAll('tbody>tr');
    // console.log(trs); // NodeList[tr, tr, tr]
    trs.forEach(tr => {
        // tr.className = '';
        tr.removeAttribute('class');
    })
    trs.forEach(tr => {
        // console.log(tr.firstElementChild.textContent);
        if (tr.firstElementChild.textContent == id) {
            tr.setAttribute('class', 'focus');
            // 값 변경.
            let childTd = tr.children;
            console.log(childTd);
            childTd[1].textContent = document.getElementById('mname').value; // 이름 변경
            childTd[2].textContent = document.getElementById('mphone').value; // 연락처 변경
        }
    });
}

function showMember() {
    // 리스트 보여주기
    let table = document.getElementById('list');
    members.forEach(member => {
        let mValues = [];
        // object -> array.
        // for (let prop in member){
        //     mValues.push(member[prop]);
        // }
        mValues = Object.values(member); // Object.keys(member): [속성,속성]
        let tr = makeTr(mValues);
        table.appendChild(tr); // <table><td><button>삭제</button></td></tr></table>
    })
}

function addMember() {
    let mid = document.getElementById('mid');
    let mname = document.getElementById('mname');
    let mphone = document.getElementById('mphone');

    console.log(mid.value, mname.value, mphone.value);
    const mValues = [mid.value, mname.value, mphone.value]

    // 저장값이 없으면 warning 메시지.
    if (!mid.value || !mname.value || !mphone.value) {
        alert('필수값을 입력하세요')
        return; // 함수에서 return은 함수의 강제종료
    }


    let tr = makeTr(mValues);
    document.getElementById('list').appendChild(tr);

    // 초기화.
    mid.value = '';
    mname.value = '';
    mphone.value = '';
    mid.focus();
} // end of addMember().

function makeTr(mValues = []) {
    let tr = document.createElement('tr');
    // addEventListener(이벤트종류, 콜백함수, 캡쳐옵션[기본: false] -> false:버블링(하-상 전파) / true:캡쳐링(상-하 전파)) 

    tr.addEventListener('click', function () { // tr에 'click' 이벤트 등록.

        //  alert(this.firstElementChild.innerText); // <td><button>user1</button></td>

        // let mid = document.getElementById('mid');
        // let mname = document.getElementById('mname');
        // let mphone = document.getElementById('mphone');
        // mid.value = this.firstElementChild.innerText
        // mname.value = this.firstElementChild.nextSibling.innerText
        // mphone.value = this.firstElementChild.nextSibling.nextSibling.innerText
        document.getElementById('mid').value = this.firstElementChild.innerText
        document.getElementById('mname').value = this.firstElementChild.nextSibling.innerText
        document.getElementById('mphone').value = this.firstElementChild.nextSibling.nextSibling.innerText


    }, false);

    
    mValues.forEach((value) => {
        let td = document.createElement('td'); // id위치 <td>user1</td> user1 : textNode
        let txt = document.createTextNode(value);

        td.appendChild(txt); // <td> user1 </td>
        tr.appendChild(td); // <tr><td> user1 </td></tr>
    })



    // 삭제버튼 추가.
    let td = document.createElement('td');
    let btn = document.createElement('button'); // <button></button>
    let txt = document.createTextNode('삭제');
    btn.addEventListener('click', function (e) {
        this.parentElement.parentElement.remove(); // <tr> 삭제
        e.stopPropagation(); // 현재 이벤트가 캡처링/버블링 단계에서 더 이상 전파되지 않도록 방지
    });

    btn.appendChild(txt);
    td.appendChild(btn); // <td><button>삭제</button></td>
    tr.appendChild(td); // <tr><td><button>삭제</button></td></tr>

    //체크박스 추가.

    let chk = document.createElement('input');
    chk.setAttribute('type', 'checkbox');
    
    chk.addEventListener('click', function(e) {
        // tr의 이벤트가 발생하지 않도록 하기 위해서.
        e.stopPropagation();})
        
    chk.addEventListener('change',function(){
        let checkProp = document.querySelectorAll('tbody tr input[type="checkbox"]');
        // [input, input, input] 배열(forEach) :every(), some()
        
        // let checkAry = [];
        // checkProp.forEach(item => {
        //     checkAry.push(item);
        // })
        
        // document.getElementById('allCheck').checked = [...checkProp].every(item=>{return item.checked == true});
        document.getElementById('allCheck').checked = [...checkProp].every(item=> item.checked);

    })
        
    // chk.checked = true; // 체크.
    td = document.createElement('td');
    td.appendChild(chk);
    tr.appendChild(td);

    // 체크 선택된값 삭제 : true 면 해당 <tr> 삭제


    return tr;
}