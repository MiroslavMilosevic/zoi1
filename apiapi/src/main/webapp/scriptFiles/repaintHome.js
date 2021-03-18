

function repaintHome(niz, app_home_div){
	
	
	
	app_home_div.innerHTML='';
	
	let ul = document.createElement('ul');
	ul.classList.add('main-li')
	
	niz.forEach(el => {
		console.log(el)
		let li = document.createElement('li');
	    li.classList.add('li-home');
        let innerUl =  document.createElement('ul');
        innerUl.classList.add('inner-ul-home');

        let innerLi1 = document.createElement('li');
        innerLi1.classList.add('inner-li-home');
        let img = document.createElement('img');
        img.src=el.image;
        img.id='img_home';
        innerLi1.appendChild(img);
      
        let innerLi2 = document.createElement('li');
        innerLi2.classList.add('inner-li-home');
        innerLi2.innerText='Model: '+el.mark+" "+el.model;


         	let button = document.createElement('button');
		button.innerText='Detalji'
		button.classList.add('button-detalji')
		button.addEventListener('click', ()=>{
			localStorage.setItem('currentPhone', JSON.stringify(el))
			window.location.href = "./onePhone.html";
			
		})
        
          let innerLi3 = document.createElement('li');
        innerLi3.classList.add('inner-li-home');
        innerLi3.append(button)
         

           innerUl.append(innerLi1, innerLi2, innerLi3);
           li.append(innerUl);
           ul.append(li);

	})
	
	
	app_home_div.append(ul)
		

	
	
}
export default repaintHome