/**
 * 비동기처리 객체
 */

const xhttp = new XMLHttpRequest(); //객체 생성
xhttp.open('get', 'js/MOCK_DATA.json'); //서버 페이지를 요청
xhttp.send(); //서버 요청
xhttp.onload = function() {
	console.log(xhttp.responseText);
	let result = JSON.parse(xhttp.responseText); //문자열 -> 객체 변경
	
	//보여줄 항복을 배열 담기
	let fields = ['id', 'first_name', 'last_name', 'gender', 'salary'];
	
	
	result.forEach(function(item, idx, ary){	
		if(item.salary >= 5000 && item.gender == 'Female'){
			console.log(item); // {id, first_name, last_name.../} => tr>td*5 생성
			let tr = document.createElement('tr');
			//보여줄 필드 출력
			fields.forEach(field => {
				let td = document.createElement('td');
				td.innerHTML = item[field] // item.id, item.first_name, last_name ....
				tr.appendChild(td);				
			})
			// 요소 생성
			let btn = document.createElement('button');// <button>삭제</button>
			btn.innerHTML = '삭제';
			btn.addEventListener('click', () => {tr.remove();})
			let td = document.createElement('td');
			td.appendChild(btn);
			tr.appendChild(td);
			
			document.querySelector('.list').appendChild(tr);
		}
	})
}