/**
 * fetch.js(비동기처리 : 서비상의 리소스 요청)
 */

// 서버의 댓글목록 요청작업

// 초기변수 선언
let bno = 148;
let writer = 'user01';
console.log(fields);

//서버의 댓글목록 요청작업
fetch('js/data.js') // promise 반환 -> 정상실핼일 경우 then(함수), 비정상 실행일 경우(catch)

	.then(function(resolve) {
		console.log(resolve); //response객체
		return resolve.text();
	})
	.then(function(result) {
		// console.log(result)
		let json = result.substring(result.indexOf('['), result.indexOf(']') + 1); // [의 위치]의 위치의 사이의 substring.
		console.log(JSON.parse(json));

	})
	.catch(function(err) {
		console.log('에러가 발생했습니다.')
	})

//서버의 댓글목록 요청작업
const list = document.querySelector('tbody.list');
fetch('replyList.do?bno=' + bno)
	.then(resolve => resolve.json()) // 응답객체(response)의 정보를 json문자열 -> 객체 변경메소드:json()

	.then(result => {
		console.log(result);
		//반복처리.
		result.forEach(reply => {
			let tr = makeRow(reply)
			list.appendChild(tr);
		})
	})
	.catch(err => {
		console.log('예외 ' + err);
	})

// 삭제 처리를위한 함수 : deleteRowFrn
function deleteRowFnc(e) {
	let rno = e.target.parentElement.parentElement.dataset.rno;
	
	fetch('removeReply.do?rno=' + rno)
	.then(resolve => resolve.json())
	.then(result => {
		if(result.retCode === 'OK'){
			alert('삭제완료')
			e.target.parentElement.parentElement.remove()
		} else {
			alert('삭제 처리중 예외발생')
		}
	})
}

/*
========
이벤트 등록
========
*/
document.querySelector('#addReply').addEventListener('click', addReplyFnc)

function addReplyFnc(e) {
	let reply = document.querySelector('#reply').value;
	
	fetch('addReply.do',{
		method: 'post',
		headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
		body: 'bno=' + bno + '&reply=' + reply + '&replyer=' + writer
	}) // 주소표시줄 addReply.do?=bno=148&reply=test&replyer=user01
	.then(resolve => resolve.json())
	.then(result=>{
		console.log(result)
		//정상일 경우 => result.retCode 확인.
		if(result.retCode == 'OK'){
			list.appendChild(makeRow(result.retVal));
		} else {
			alert('처리중 예외발생')
		}
	})
}