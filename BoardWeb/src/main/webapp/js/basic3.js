/**
 * 
 */

let addBtn = document.querySelector('#addBtn');

addBtn.addEventListener('click', function(e){
	//클릭이벤트가 발생하면 해야할 일.
	//tr요소를 생성해서 id,name,point의 각 요소의 값을 td에 담아서 append.
	//만들어진 tr을 tbody에 append.
	let tr = document.createElement('tr');
	let obj = {
		id: document.querySelector('#id').value,
		name: document.querySelector('#name').value,
		point: document.querySelector('#point').value
	}
	for(let prop in obj){
		let td = document.createElement('td');
		td.innerHTML = obj[prop];
		tr.appendChild(td);
	}
	document.querySelector('#list').appendChild(tr);
	
	document.querySelector('#id').value = '';
	document.querySelector('#name').value = '';
	document.querySelector('#point').value = '';
	
});

