// mysource.js
document.addEventListener('DOMContentLoaded',function(){ // 전체태그 감싸주기.
	let xhtp = new XMLHttpRequest();
xhtp.open('get', './board');
xhtp.send();
xhtp.onload = function() {
	let data = JSON.parse(xhtp.response);

	console.log(data);
	let list = document.getElementById('list'); // tbody

	data.forEach(data => {
		let tr = makeTr(data);
		list.append(tr);
	})
}


// tr생성
function makeTr(data) {
	let tr = document.createElement('tr');

	let td = document.createElement('td');
	let input = document.createElement('input');
	input.setAttribute('type', 'checkbox');
	td.appendChild(input);

	let td1 = document.createElement('td');
	let txt1 = document.createTextNode(data.bno);
	td1.appendChild(txt1);

	let td2 = document.createElement('td');
	let txt2 = document.createTextNode(data.title);
	td2.appendChild(txt2);

	let td3 = document.createElement('td');
	let txt3 = document.createTextNode(data.content);
	td3.appendChild(txt3);

	let td4 = document.createElement('td');
	let txt4 = document.createTextNode(data.writer);
	td4.appendChild(txt4);

	let td5 = document.createElement('td');
	let txt5 = document.createTextNode(data.creation_date);
	td5.appendChild(txt5);

	// 삭제버튼
	let td6 = document.createElement('td');
	let btn = document.createElement('button');
	let txt6 = document.createTextNode('삭제');
	btn.appendChild(txt6);
	td6.appendChild(btn);

	// 삭제 이벤트
	btn.addEventListener('click', function() {
		let delAjax = new XMLHttpRequest();
		delAjax.open('post', './board')
		delAjax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		delAjax.send('title=' + this.parentElement.parentElement.firstElementChild.nextSibling.nextSibling.textContent);
		delAjax.onload = function(e) {
			let result = delAjax.responseText;
			console.log(result);
			if (result == 'success') {
				btn.parentElement.parentElement.remove();
			} else {
				alert('처리중 에러발생.');
			}
		}
	})

	tr.append(td,td1, td2, td3, td4, td5, td6);
	return tr;
}

// 삭제버튼
let delBtn = document.getElementById('delBtn');
delBtn.addEventListener('click', delMemberFnc)
function delMemberFnc() {
	let bno = document.getElementById("bno").value;
	let title = document.getElementById("title").value;
	let content = document.getElementById("content").value;
	let writer = documnet.getElementById("writer").value;

	let param = 'bno=' + bno + '&title=' + title + '&content=' + content + '&writer=' + writer+'&job=delete';
	let delAjx = new XMLHttpRequest();
	delAjx.open('post', './board')
	delAjx.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	delAjx.send(param);
	delAjx.onload = function(e) {
		let result = delAjx.responseText;
		console.log(result);
		if (result == 'success') {
			delBtn.parentElement.parentElement.remove();
		} else {
			alert('처리중 에러발생.');
		}
	}
}
// 등록버튼
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', addMemberFnc)

// 등록버튼
function addMemberFnc() {
	let bno = document.getElementById("bno").value;
	let title = document.getElementById("title").value;
	let content = document.getElementById("content").value;
	let writer = documnet.getElementById("writer").value;

	let param = 'bno=' + bno + '&title=' + title + '&content=' + content + '&writer=' + writer+'&job=insert';
	let addAjx = new XMLHttpRequest();

	addAjx.open('post', './board');
	addAjx.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	addAjx.send(param);
	addAjx.onload = addMemberCallBack;

}

function addMemberCallBack() {
	let result = JSON.parse(this.responseText);
	console.log(result);
	if (result.retCode == 'success') {
		list.append(makeTr(result));
		console.log('success');
	} else if (result.retCode == 'fail') {
		alert('처리중 에러발생.')
	}
}

})


