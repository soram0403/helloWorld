// mysource.js
document.addEventListener('DOMContentLoaded', function() { // 전체태그 감싸주기.
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
		input.id = 'check';
		td.appendChild(input);

		input.addEventListener('click', function(e) {
			e.stopPropagation();
		})

		input.addEventListener('change', function(e) {
			let checkProp = document.querySelectorAll('tbody tr input[type="checkbox"]');
			document.getElementById('selectAll').checked = [...checkProp].every(item => item.checked);
		})

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

		// 삭제 이벤트(게시글 옆 하나씩 삭제)
		btn.addEventListener('click', function() {
			let bno = btn.parentElement.parentElement.firstElementChild.nextSibling.textContent;
			
			let param = 'bno=' + bno + '&job=delete';
			let delAjx = new XMLHttpRequest();
			delAjx.open('post', './board')
			delAjx.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			delAjx.send(param);
			delAjx.onload = function(e) {
				let result = delAjx.responseText;
				console.log(result);
				if (result == 'success') {
					btn.parentElement.parentElement.remove();
					alert('성공!');
				} else {
					alert('처리중 에러발생.');
				}
			}
		})
		tr.append(td, td1, td2, td3, td4, td5, td6);
		return tr;
	}

	// 삭제버튼(선택 삭제)
	let delBtn = document.getElementById('delBtn');
	delBtn.addEventListener('click', function(e) {
		let check = document.getElementById('check');
		let bno = check.parentElement.parentElement.firstElementChild.nextSibling.textContent;
		console.log(bno);
		if (check.checked = true) {
			let param = 'bno=' + bno + '&job=delete';
			let delAjx = new XMLHttpRequest();
			delAjx.open('post', './board')
			delAjx.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			delAjx.send(param);
			delAjx.onload = function(e) {
				let result = delAjx.responseText;
				console.log(result);
				if (result == 'success') {
					check.parentElement.parentElement.remove();
					alert('success');
				} else {
					alert('처리중 에러발생.');
				}
			}
		}

	})
	let allCheck = document.getElementById('selectAll');
	allCheck.addEventListener('change', checkAll);
	// 체크박스
	function checkAll() {
		let checkBoxes = document.querySelectorAll('input[type="checkbox"]');
		for (let i = 0; i < checkBoxes.length; i++) {
			checkBoxes[i].checked = this.checked;
		}

	}
	// 등록버튼
	let addBtn = document.getElementById('addBtn');
	addBtn.addEventListener('click', addMemberFnc)

	// 등록버튼
	function addMemberFnc() {

		let title = document.getElementById('title').value;
		let content = document.getElementById('content').value;
		let writer = document.getElementById('writer').value;

		let param = 'title=' + title + '&content=' + content + '&writer=' + writer + '&job=insert';
		let addAjx = new XMLHttpRequest();

		addAjx.open('post', './board');
		addAjx.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		addAjx.send(param);
		addAjx.onload = addMemberCallBack;

	}

	function addMemberCallBack() {
		let result = this.responseText;
		console.log(result);
		if (result.retCode == 'success') {
			list.append(makeTr(result));
			console.log('success');
		} else if (result.retCode == 'fail') {
			alert('처리중 에러발생.')
		}
	}

})


