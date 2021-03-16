/**
 * 
 */

function urlConvert(url){
	
	
	let charArray = url.split("");
	
	charArray = charArray.map(char =>{
		
		if(char == '/'){
			return '|';
		}else if(char == "?"){
			return '~'; 
			
		}else{
			return char;
		}
		
	})
	
	console.log(charArray.join(''));
	return charArray.join('');
	
}

export default urlConvert