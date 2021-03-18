








function addCheck1(naslov, marka, model, cena, procesor, os, ram, rom, standardi, file) {
     console.log('ajdeeeeedfas')
	let a = 0;
	if (naslov.value.trim().length < 3) {
		naslov.value = 'los unos';
		naslov.classList.add('input-error')
		setTimeout(() => {
			naslov.value = '';
			console.log('class.lis')
			naslov.classList.remove('input-error')
		}, 2000)
		a++;
	}
	if (marka.value == undefined || marka.value == '') {
		marka.classList.add('input-error')
		setTimeout(() => {
			marka.classList.remove('input-error')
		}, 2000)
		a++;
	}
	if (model.value.trim().length < 1) {
		model.value = 'los unos';
		model.classList.add('input-error')
		setTimeout(() => {
			model.value = '';
			model.classList.remove('input-error')
		}, 2000)
		a++;
	}
	if (!isNaN(cena.value) && cena.value < 50 || cena.value > 2000) {
		cena.classList.add('input-error')
		cena.value = '000';
		setTimeout(() => {
			cena.classList.remove('input-error')
			cena.value = '500';
		}, 2000)
		a++;
	}
	if (procesor.value == undefined || procesor.value == '') {
		procesor.classList.add('input-error')
		setTimeout(() => {
			procesor.classList.remove('input-error')
		}, 2000)
		a++;
	}
	if (os.value == undefined || os.value == '') {
		os.classList.add('input-error')
		setTimeout(() => {
			os.classList.remove('input-error')
		}, 2000)
		a++;
	}
	if (!isNaN(ram.value) && ram.value < 1 || ram.value > 32) {
		ram.classList.add('input-error')
		ram.value = '000';
		setTimeout(() => {
			ram.classList.remove('input-error')
			ram.value = '2';
		}, 2000)
		a++;
	}
	if (!isNaN(rom.value) && rom.value < 16 || rom.value > 1024) {
		rom.classList.add('input-error')
		rom.value = '000';
		setTimeout(() => {
			rom.classList.remove('input-error')
			rom.value = '32';
		}, 2000)
		a++;
	}
	if (standardi.length <= 0) {
		let checkDiv = document.getElementById('check-box-div');
		checkDiv.classList.add('input-error')
		setTimeout(() => {
			checkDiv.classList.remove('input-error')
		}, 2000)
		a++;
	}
	if(file.value=='' || file.files[0].size/1024/1024 > 1){
	                 
          file.classList.add('input-error')
		setTimeout(() => {
			file.classList.remove('input-error')
			file.value=''
		}, 2000)
		a++;
			//		console.log(file.files[0].size/1024/1024+" mib");
	}
	//	console.log(a)
	return a <= 0 && !(file.files[0].size/1024/1024 > 1 || file.value=='')
}

















function standardi(G3, G4, LTE, GSM) {

	let standardiReturnString = "";

	console.log(G3.value, G4.value, LTE.value, GSM.value)

	if (G3.checked) {
		standardiReturnString += G3.value + ","
	} if (G4.checked) {
		standardiReturnString += G4.value + ","
	} if (LTE.checked) {
		standardiReturnString += LTE.value + ","
	} if (GSM.checked) {
		standardiReturnString += GSM.value + ","
	}


	return standardiReturnString;
}





export { addCheck1, standardi }
