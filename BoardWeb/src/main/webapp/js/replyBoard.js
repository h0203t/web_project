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

document.querySelectorAll('ul.pagination a').forEach(aTag => {
	aTag.addEventListener('click', showReplyListFnc);
})

let page = 1;

svc.replyList({ bno, page },
	function(result) {
		console.log(result)
		result.forEach(reply => {
			document.querySelector('div.content ul').appendChild(makeLi(reply));

		});
		showPagingListFnc();
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

/*
========================
  링크클릭시 댓글목록 새로출력
  함수: showReplyListFnc
========================
*/

function showReplyListFnc(e) {

	//기존에 출력 리스트 지워주고.
	document.querySelectorAll('div.content li').forEach((li, indx) => {
		if (indx > 2) {
			li.remove();
		}
	})

	page = e.target.dataset.page; // 페이지번호
	svc.replyList({ bno, page },
		function(result) {
			console.log(result)
			result.forEach(reply => {
				document.querySelector('div.content ul').appendChild(makeLi(reply));
			});
			showPagingListFnc();
		},
		function(err) {
			console.log(err);
		});
}

/*
=============================
 댓글갯수를 활용해서  페이지리스트 생성
 함수 : showPagingListFnc
=============================
*/

let pagination = document.querySelector('ul.pagination')

function showPagingListFnc() {
	svc.replyRagingCount(bno, // 게시글번호
		makePagingList, // 성공 시 실행 함수(콜백 함수)
		function(err) {
			console.log(err);
		}
	)
}

// 정상처리 실행할 콜백함수
function makePagingList(result) {
	pagination.innerHTML = '';

	let totalCnt = result.totalCount;
	//페이지목록 만들기.
	let startPage, endPage, realEnd; //첫페이지 ~ 마지막페이지
	let prev, next; // 이전페이지, 이후페이지

	endPage = Math.ceil(page / 5) * 5;
	startPage = endPage - 4;
	realEnd = Math.ceil(totalCnt / 5);

	endPage = endPage > realEnd ? realEnd : endPage;

	prev = startPage > 1;
	next = endPage < realEnd;

	// 이전 페이지 생성
	let li = document.createElement('li');
	li.className = 'page-item';
	let aTag = document.createElement('a');
	aTag.className = 'page-link';
	aTag.innerHTML = 'Previous';
	li.appendChild(aTag);
	if (prev) {
		aTag.setAttribute('href', '#');
		aTag.setAttribute('data-page', startPage - 1);
	} else {
		li.classList.add('disabled');
	}
	pagination.appendChild(li);

	// li 생성. 페이지 범위에 들어갈...
	for (let p = startPage; p <= endPage; p++) {
		let li = document.createElement('li');
		li.className = 'page-item';
		let aTag = document.createElement('a');
		aTag.className = 'page-link';
		aTag.setAttribute('href', '#');
		aTag.setAttribute('data-page', p);
		aTag.innerHTML = p;
		li.appendChild(aTag);
		if (p == page) {
			li.classList.add('active');
			li.setAttribute('aria-current', 'page');
		}

		pagination.appendChild(li);

		// 이벤트 등록
		document.querySelectorAll('ul.pagination a').forEach(aTag => {
			aTag.addEventListener('click', showReplyListFnc);
		})
	}

	// 이후 페이지 생성
	li = document.createElement('li');
	li.className = 'page-item';
	aTag = document.createElement('a');
	aTag.className = 'page-link';
	aTag.innerHTML = 'Next';
	li.appendChild(aTag);
	if (next) {
		aTag.setAttribute('href', '#');
		aTag.setAttribute('data-page', endPage + 1);
	} else {
		li.classList.add('disabled');
	}
	pagination.appendChild(li);

	document.querySelectorAll('ul.pagination a').forEach(aTag => {
		aTag.addEventListener('click', showReplyListFnc);
	})
}

function showReplyListAndRagingList() {
	svc.replyList({ bno, page },
		function(result) {
			console.log(result)
			result.forEach(reply => {
				document.querySelector('div.content ul').appendChild(makeLi(reply));

			});
			showPagingListFnc();
		},
		function(err) {
			console.log(err);
		});
}

showPagingListFnc();