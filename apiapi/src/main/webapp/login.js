
//import urlConvert from './scriptFiles/urlConvert.js'
let buttonSubmit = document.getElementById("buttonSubmit");
buttonSubmit.addEventListener('click', function() {
	let username_input = document.getElementById("username");
	let password_input = document.getElementById("password");



    

                      console.log("Submit", username_input.value, password_input.value);

	axios.get(`http://localhost:8080/apiapi/webapi/myresource/log?username=${username_input.value}&password=${password_input.value}`).then(res => {
		if (res.data == true) {
			localStorage.setItem('username', username_input.value);
			localStorage.setItem('password', password_input.value);
			localStorage.setItem('loged', 'true');
			console.log('uspesno setovan localStorage')
			window.location.href = "./addPhone.html";
		}

	})



})
































////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('index 222222222222222222222222222222222 index 222222222222222222222222222222     565675674562463456');
let user = { username: "user1", password: 123 }
let buttonLogin = document.getElementById("buttonLogin");
//  urlConvert('blaURLblaURL');
buttonLogin.addEventListener('click', () => {


	// let imgUrl = 'https://firebasestorage.googleapis.com/v0/b/myfirstproject-1b7bc.appspot.com/o/myPictures%2FThu%20Mar%2011%202021%2022%3A13%3A38%20GMT%2B0100%20(Central%20European%20Standard%20Time)%20-%20milan.jpg?alt=media&token=167bcca1-01b9-49ad-a6f9-e8dd941df070';
	axios.get(`http://localhost:8080/apiapi/webapi/myresource/all/objects`, {
		params: {
			username: user.username,
			password: user.password,
			imgUrl: 'https://firebasestorage.googleapis.com/v0/b/myfirstproject-1b7bc.appspot.com/o/myPictures%2FThu%20Mar%2011%202021%2022%3A13%3A38%20GMT%2B0100%20(Central%20European%20Standard%20Time)%20-%20milan.jpg?alt=media&token=167bcca1-01b9-49ad-a6f9-e8dd941df070',
			token: 'ovo je token'
		}

	}).then(res => {
		console.log(user)
		console.log(res);
	})
})

let buttonInsert = document.getElementById("insert");

buttonInsert.addEventListener('click', () => {
	axios.get('http://localhost:8080/apiapi/webapi/myresource/insert', {
		params: {
			username: user.username,
			password: user.password,
			marka: 'Nokia',
			model: '3300',
			cena: '1000',
			kategorija: 'b3',
			os: 'windows',
			ram: '4',
			rom: '128',
			standardi: 'cc',
			imgUrl: 'https://firebasestorage.googleapis.com/v0/b/myfirstproject-1b7bc.appspot.com/o/myPictures%2FThu%20Mar%2011%202021%2022%3A13%3A38%20GMT%2B0100%20(Central%20European%20Standard%20Time)%20-%20milan.jpg?alt=media&token=167bcca1-01b9-49ad-a6f9-e8dd941df070',
			naslov: '3300',
		}

	}).then(res => {
		console.log(res);
		console.log(user)
	})

})
