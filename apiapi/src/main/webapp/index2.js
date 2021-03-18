
import repaintHome from './scriptFiles/repaintHome.js'
import {inputPretraga, cenaFilter, proizvodjacPretraga} from './scriptFiles/filteri.js'
let gotoLoginButton = document.getElementById('gotoLogin');
gotoLoginButton.addEventListener('click', ()=>{
			window.location.href = "./login.html";
})///gotoLoginButton funkcionalnost


let niz = [];  
let usernameLS = localStorage.getItem('username')
let passwordLS = localStorage.getItem('password')
axios.get(`http://localhost:8080/apiapi/webapi/myresource/all/objects`, {
		params: {
			username: usernameLS,
			password: passwordLS,
	
		}
//
	}).then(res => {
		  niz=res.data;
          let app_home_div = document.getElementById("home-app");
          repaintHome(niz,app_home_div);
	})
	
	let input_pretraga = document.getElementById('pretraga');
	input_pretraga.addEventListener('input', (e)=>{
		let tmpNiz = inputPretraga(niz, e.target.value);
	    let app_home_div = document.getElementById("home-app");
		repaintHome(tmpNiz, app_home_div);
	})
	
	let buttonPoCeni = document.getElementById('poCeni');
	
	buttonPoCeni.addEventListener('click', ()=>{
		let cenaOd = document.getElementById('cenaOd');
		let cenaDo = document.getElementById('cenaDo');
		let tmpNiz = cenaFilter(niz, cenaOd.value, cenaDo.value);
		   let app_home_div = document.getElementById("home-app");
		repaintHome(tmpNiz, app_home_div)
	})
	
	let proizvodjac= document.getElementById('proizvodjac');
	proizvodjac.addEventListener('input', (e)=>{
		
			let tmpNiz = proizvodjacPretraga(niz, e.target.value)
		    let app_home_div = document.getElementById("home-app");
		    repaintHome(tmpNiz, app_home_div)
		
		
		
	})




