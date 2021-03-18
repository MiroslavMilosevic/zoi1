

function repaintHome(niz, app_home_div){
	
	console.log('pppppppp')
	
	app_home_div.innerHTML='';
	
	niz.forEach(el => {
		console.log('ell')
		let p1 = document.createElement('p');
		p1.innerText=el.mark+"   "+el.model
		
		let button = document.createElement('button');
		button.innerText='detalji'
		button.addEventListener('click', ()=>{
			localStorage.setItem('currentPhone', JSON.stringify(el))
			window.location.href = "./onePhone.html";
			
		})
		app_home_div.append(p1, button)
	})
	
		

	
	
	
}

export default repaintHome