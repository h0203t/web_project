/**
 * 
 */
let data = JSON.parse(json); // 문자열 -> 객체 변경.
// console.log(data);

let resutl = data.filter(function(item, idx, ary){
	if(item.salary >= 8000 && item.gender =='Female'){
		
		return true;
	}
});
console.log(resutl);