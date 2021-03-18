
function inputPretraga(niz, pretraga) {

	console.log(niz, pretraga, 'ajde breeeee')

	niz = niz.filter(element => {

		return element.mark.toUpperCase().includes(pretraga.toUpperCase()) || element.model.toUpperCase().includes(pretraga.toUpperCase()) || element.os.toUpperCase().includes(pretraga.toUpperCase())
	})
	return niz;
}

function proizvodjacPretraga(niz, pretraga){
	
		niz = niz.filter(element => {
		return element.mark.toUpperCase().includes(pretraga.toUpperCase())
	})
	return niz;
	
}

function cenaFilter(niz, cena1, cena2){
	console.log(cena1, cena2)
	if(cena1==''||cena1==undefined){cena1=50}
		if(cena2==''||cena2==undefined){cena2=2000}
			console.log(cena1, cena2)

	niz=niz.filter(element =>{
		
			return element.cena > cena1 && element.cena < cena2;
	})

return niz;	
}





export { inputPretraga, cenaFilter, proizvodjacPretraga }