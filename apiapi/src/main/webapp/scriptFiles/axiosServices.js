/**
 * 
 */

function addPhoneFnk(naslov1, marka1, model1, cena1, procesor1, os1, ram1, rom1, standardi1, imgUrl1){


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
		console.log(res)
		console.log('uspeson upisano u bazu')
	})


}

export {addPhoneFnk}

