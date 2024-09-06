/**
 *  DOM 연습
 */
console.log("basic.js");
let myName = 'Hong';
let myAge = 20;

const member = {
	id: 'user01',
	pw: '1111',
	email : 'user01@email.com',
	hobbies : ['slepping', 'eating' ],
	friends: [
		{name: 'Kim', phone: '1234-1234'},
		{name: 'Son', phone: '1111-1111'}
	],
	showHobby: function(){
		let result = '';
		this.hobbies.forEach(item => {
			result+= item + '';
		});
		return result;
	}
}

member.phone = '010-1111-1111';
member.name = 'Hong'

console.log(member.id);
console.log(member['pw']);
let mailAddress = 'email';
console.log(member[mailAddress]);

console.log(member.hobbies[1]);
console.log(member['friends'][0]['name']);

let tag = document.createElement('p');
tag.innerText = '이름: ' + member.name;
document.querySelector('#show').appendChild(tag);

tag = document.createElement('p');
tag.innerHTML = '취미: ' + '<b>' + member.showHobby() + '</b>'
document.querySelector('#show').appendChild(tag);


//ul>li*2
/*for(let i=0; i<=frineds.length; i++){
	console.log('테스트'+ member.frineds[i]);
	tag.innerHTML = '<ul><li>' + member.frineds[i] + '</li></ul>'
}*/

tag = document.createElement('li');

member.friends.forEach(friend => {
	let li = document.createElement('li');
	li.innerHTML = '이름' + friend.name + ', 연락처' + friend.phone;
	
	let btn = document.createElement('button');
	btn.innerHTML = '삭제';
	btn.addEventListener('click', function(){ li.remove(); });
	
	li.appendChild(btn);
	
	tag.appendChild(li);
});
document.querySelector('#show').appendChild(tag);