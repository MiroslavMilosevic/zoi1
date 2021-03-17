
function addPhoneFnk(naslov1, marka1, model1, cena1, procesor1, os1, ram1, rom1, standardi1, imgUrl1) {

	console.log("add phone fnk started");
	axios.get('http://localhost:8080/apiapi/webapi/myresource/insert', {
		params: {
			username: localStorage.getItem('username'),
			password: localStorage.getItem('password'),
			marka: marka1,
			model: model1,
			cena: cena1,
			kategorija: procesor1,
			os: os1,
			ram: ram1,
			rom: rom1,
			standardi: standardi1,
			imgUrl: imgUrl1,
			naslov: naslov1,
		}
	}).then(res => {
		console.log('___________________________________________________________________________________________________________________________')
		console.log('uspeson upisano u bazu')
		location.reload();
	})
	
}///addPhoneFnk

function getAllPhones() {

	let usernameLS = localStorage.getItem('username')
	let passwordLS = localStorage.getItem('password')
	axios.get(`http://localhost:8080/apiapi/webapi/myresource/all/objects`, {
		params: {
			username: usernameLS,
			password: passwordLS,
		}

	})
}///getAllPhones 

//function logInAxios(username, password){
	//         console.log('blabababa')
//	return axios.get(`http://localhost:8080/apiapi/webapi/myresource/log?username=${username}&password=${password}`)
	
//}///logInAxios









export { addPhoneFnk, getAllPhones, }

