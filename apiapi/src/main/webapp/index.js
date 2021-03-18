
import repaintHome from './scriptFiles/repaintHome.js'

console.log("home.js");
console.log(localStorage.getItem('username'))
console.log(localStorage.getItem('password'))
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

