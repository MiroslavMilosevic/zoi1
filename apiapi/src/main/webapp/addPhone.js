import repaintAddPhone from './scriptFiles/repaintAddPhone.js'
import firebase1 from './scriptFiles/firebase1.js'
import {addCheck1, standardi} from './scriptFiles/addCheckFnk.js'
let logOutButton=document.getElementById("logOutButton");
logOutButton.addEventListener('click', function(){
			localStorage.setItem('username', '');
			localStorage.setItem('password', '');
			localStorage.setItem('loged', 'false');
		window.location.href = "./index.html";
		
})
let buttonDodaj = document.getElementById('buttonDodaj');

buttonDodaj.addEventListener('click', ()=>{
	
	let naslov = document.getElementById('naslov');
	let marka = document.getElementById('marka');
	let model = document.getElementById('model');
	let cena = document.getElementById('cena');
	let procesor = document.getElementById('procesor');
	let os = document.getElementById('os');
	let ram = document.getElementById('ram');
	let rom = document.getElementById('rom');
	let G3 = document.getElementById('3G');
	let G4 = document.getElementById('4G');
    let LTE = document.getElementById('LTE');
	let GSM = document.getElementById('GSM');
	let slika = document.getElementById('file');
	
	let standardiStr = standardi(G3, G4, LTE, GSM)
	
	let isValid = addCheck1(naslov, marka, model, cena, procesor, os, ram, rom, standardiStr, slika)
	if(isValid){ 
		             console.log('slika[0]', slika.files[0]);
			       firebase1(naslov.value, marka.value, model.value, cena.value, procesor.value, os.value, ram.value, rom.value, standardiStr, slika.files[0])
	}//if

})///event listener


axios.get(`http://localhost:8080/apiapi/webapi/myresource/all/objects`).then(res=>{
	
	repaintAddPhone(res.data, document.getElementById('delete-app'))
	
})


