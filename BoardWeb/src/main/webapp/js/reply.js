let replyer = 'user01';
let bno = 148;

const xhttp = new XMLHttpRequest();

xhttp.open('get', 'replyList.do?bno=148');
xhttp.send();
xhttp.onload = function() {
	console.log(xhttp.responseText);
	let result = JSON.parse(xhttp.responseText);
	console.log(result);
	result.forEach(reply => {
		document.querySelector('.list').appendChild(makeRow(reply));
	});
}

let fields = ['replyNo', 'reply', 'replyer', 'replyDate'];

function makeRow(reply = {}) {
	let tr = document.createElement('tr');

	// 체크박스 생성
	let checkbox = document.createElement('input');
	checkbox.setAttribute('type', 'checkbox');

	let td = document.createElement('td');
	td.appendChild(checkbox);
	tr.appendChild(td);

	fields.forEach(field => {
		let td = document.createElement('td');
		td.innerHTML = reply[field];
		tr.appendChild(td);
	});

	// 삭제 버튼
	let deleteBtn = document.createElement('button');
	deleteBtn.innerHTML = '삭제';
	deleteBtn.addEventListener('click', deleteRowFnc);
	td = document.createElement('td');
	td.appendChild(deleteBtn);
	tr.appendChild(td);

	return tr;
}

function selectAll(selectAll) {
	const checkboxes = document.querySelectorAll('input[type="checkbox"]');
	checkboxes.forEach(checkbox => {
		checkbox.checked = selectAll.checked;
	});
}

//선택 삭제 함수
function deleteSelected() {
	const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
	checkboxes.forEach(checkbox => {
		let row = checkbox.parentElement.parentElement;
		let rno = row.children[1].innerHTML;
		const delHtp = new XMLHttpRequest();
		delHtp.open('get', 'removeReply.do?rno=' + rno);
		delHtp.send();
		delHtp.onload = function() {
			let result = JSON.parse(delHtp.responseText);
			if (result.retCode === 'OK') {
				row.remove();
			} else if (result.retCode === 'NG') {
				alert('오류 발생');
			} else {
				alert('잘못된 변환 코드...');
			}
		}
	});
}

//댓글 등록 처리
document.querySelector('#addReply').addEventListener('click', function() {
	let reply = document.querySelector('#reply').value;
	const addHtp = new XMLHttpRequest();
	addHtp.open('get', 'addReply.do?bno=' + bno + '&reply=' + reply + '&replyer=' + replyer);
	addHtp.send();
	addHtp.onload = function() {
		let result = JSON.parse(addHtp.responseText);
		console.log(result); // retCode, retVal=>{}
		if(result.retCode == 'OK'){		
			let tr = makeRow(result.retVal);
			document.querySelector('.list').appendChild(tr);
		} else {
			console.log('삭제 불가X')
		}

	}
})

// 삭제 처리할 함수
function deleteRowFnc(e) {
	let row = e.target.parentElement.parentElement;
	let rno = row.children[1].innerHTML;
	const delHtp = new XMLHttpRequest();
	delHtp.open('get', 'removeReply.do?rno=' + rno);
	delHtp.send();
	delHtp.onload = function() {
		let result = JSON.parse(delHtp.responseText);
		if (result.retCode === 'OK') {
			row.remove();
		} else if (result.retCode === 'NG') {
			alert('오류 발생');
		} else {
			alert('잘못된 변환 코드...');
		}
	}
}
