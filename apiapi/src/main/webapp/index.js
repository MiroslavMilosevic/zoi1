
import repaintHome from './scriptFiles/repaintHome.js'

//console.log("home.js");
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
	//		imgUrl: 'https://firebasestorage.googleapis.com/v0/b/myfirstproject-1b7bc.appspot.com/o/myPictures%2FThu%20Mar%2011%202021%2022%3A13%3A38%20GMT%2B0100%20(Central%20European%20Standard%20Time)%20-%20milan.jpg?alt=media&token=167bcca1-01b9-49ad-a6f9-e8dd941df070',
		//	token: 'ovo je token'
		}
//
	}).then(res => {
		  niz=res.data;
          let app_home_div = document.getElementById("home-app");
          repaintHome(niz,app_home_div);
		
	})

