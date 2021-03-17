/**
 * 
 */

let buttonSubmit = document.getElementById("buttonSubmit");
buttonSubmit.addEventListener('click', function() {

	let username_input = document.getElementById("username");
	let password_input = document.getElementById("password");

	//     console.log("Submit", username_input.value, password_input.value);

	axios.get(`http://localhost:8080/apiapi/webapi/myresource/log?username=${username_input.value}&password=${password_input.value}`).then(res => {
		if (res.data == true) {
			localStorage.setItem('username', username_input.value);
			localStorage.setItem('password', password_input.value);
			localStorage.setItem('loged', 'true');
			console.log('uspesno setovan localStorage')
			window.location.href = "./addPhone.html";
		} else {
			let errorH2 = document.getElementById('errorHeader')
			errorH2.innerText = 'pogresno korisnicko ime ili lozinka!'
			errorH2.classList.add('login-error')
			username_input.classList.add('login-error')
			password_input.classList.add('login-error')

			setTimeout(() => {
				errorH2.classList.remove('login-error')
				errorH2.innerText = ''
				username_input.classList.remove('login-error')
				password_input.classList.remove('login-error')
				username_input.value = '';
				password_input.value = '';

			}, 1500)

		}

	})



})




