/**
 * replyBoard.js
 * replyService에 정의된 메소드를 통해서 기능 실행.
 */

/*
================
 이벤트(댓글등록)
================
*/
document.querySelector('#addReply').addEventListener('click', addReplyFnc);



console.log(bno, writer);

svc.replyList(bno,
	function(result) {
		console.log(result)
		result.forEach(reply => {
			document.querySelector('div.content ul').appendChild(makeLi(reply));
		})
	},
	function(err) {
		console.log(err);
	});

/*
========================
 댓글정보 -> li 생성하는 함수.
========================
*/

function makeLi(reply = {}) {
	let cloned = document.querySelector('#template').cloneNode(true);
	cloned.style.display = 'block';
	cloned.setAttribute('data-rno', reply.replyNo);
	cloned.querySelector('span').innerHTML = reply.replyNo;
	cloned.querySelector('span:nth-of-type(2)').innerHTML = reply.reply;
	cloned.querySelector('span:nth-of-type(3)').innerHTML = reply.replyer;
	cloned.querySelector('button').addEventListener('click', deleteLiFnc);

	console.log(cloned);
	return cloned;
}

/*
=====================
 함수:deleteLiFnc
 기능:버튼이 포함된 row 삭제. ajax 사용
======================
*/

function deleteLiFnc(e) {
	let rno = e.target.parentElement.parentElement.dataset.rno;
	svc.removeReply(rno,
		function(result) {
			if (result.retCode == 'OK') {
				alert('삭제성공');
				e.target.parentElement.parentElement.remove();
			} else {
				alert('삭제중 예외발생')
			}
		},
		function(err) {
			console.log(err);
		}
	);
}

/*
================
 댓글등록 이벤트핸들러.
================
*/
function addReplyFnc(e) {
	//bno, replyer, reply
	let reply = document.querySelector('#reply').value
	
	let param = { bno: bno, replyer: writer, reply: reply }
	
	svc.addReply(param,
		function(result) {
			if (result.retCode == 'OK') {
				console.log(result.retVal.replyNo);
				let newReply = result.retVal;
				Swal.fire("SweetAlert2 is working!");
				document.querySelector('div.content ul').appendChild(makeLi(newReply));
			} else {
				alert('삭제중 예외발생')
			}
		},
		function(err) {
			console.log(err);
		}

	);
}
