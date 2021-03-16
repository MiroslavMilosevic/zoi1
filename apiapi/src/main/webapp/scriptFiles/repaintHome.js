

function repaintHome(niz, app_home_div){
	
	console.log(niz, app_home_div)
	
	app_home_div.innerHTML='';
	
	niz.forEach(el => {
	//	console.log(el)
		let p1 = document.createElement('p');
		p1.innerText=el.mark+"   "+el.model
		app_home_div.append(p1);
		
	})
	
		

	
	
	
}

export default repaintHome