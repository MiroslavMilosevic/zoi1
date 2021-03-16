/**
 * 
 */
import urlConvert from './scriptFiles/urlConvert.js'
    console.log('index 222222222222222222222222222222222 index 222222222222222222222222222222     565675674562463456');

   let buttonLogin = document.getElementById("buttonLogin");
     //  urlConvert('blaURLblaURL');
          buttonLogin.addEventListener('click', ()=>{

           let user = {username: "user555", password: 555}
     // let imgUrl = 'https://firebasestorage.googleapis.com/v0/b/myfirstproject-1b7bc.appspot.com/o/myPictures%2FThu%20Mar%2011%202021%2022%3A13%3A38%20GMT%2B0100%20(Central%20European%20Standard%20Time)%20-%20milan.jpg?alt=media&token=167bcca1-01b9-49ad-a6f9-e8dd941df070';
   axios.get(`http://localhost:8080/apiapi/webapi/myresource/all/objects`,{
	  params: {
   username:user.username,
    password:user.password,
    imgUrl:'https://firebasestorage.googleapis.com/v0/b/myfirstproject-1b7bc.appspot.com/o/myPictures%2FThu%20Mar%2011%202021%2022%3A13%3A38%20GMT%2B0100%20(Central%20European%20Standard%20Time)%20-%20milan.jpg?alt=media&token=167bcca1-01b9-49ad-a6f9-e8dd941df070',
    token: 'ovo je token'
  }
	
}).then(res => {
	    console.log(user)
        console.log(res);
   })
})

//let adress = encodeURI("https:firebasestorage.googleapis.comv0bmyfirstproject-1b7bc.appspot.comomyPictures%2FThu%20Mar%2011%202021%2022%3A13%3A38%20GMT%2B0100%20(Central%20European%20Standard%20Time)%20-%20milan.jpg?alt=media&token=167bcca1-01b9-49ad-a6f9-e8dd941df070");
let buttonInsert = document.getElementById("insert");

buttonInsert.addEventListener('click', ()=>{
	 	 axios.get('http://localhost:8080/apiapi/webapi/myresource/insert', {
		// axios.post('http://localhost:8080/apiapi/webapi/myresource/insert/Nokia/3300/1000/b3/windows/4/128/cc5/'+adress+'+/blaaaaopisss', {
			  params: {
    username:user.username,
    password:user.password,
    marka:'Nokia',
    model: '3300',
    cena: '1000',
    kategorija: 'b3',
    os: 'windows',
    ram: '4',
    rom: '128',
    standardi: 'cc',
    imgUrl:'https://firebasestorage.googleapis.com/v0/b/myfirstproject-1b7bc.appspot.com/o/myPictures%2FThu%20Mar%2011%202021%2022%3A13%3A38%20GMT%2B0100%20(Central%20European%20Standard%20Time)%20-%20milan.jpg?alt=media&token=167bcca1-01b9-49ad-a6f9-e8dd941df070',
    naslov: '3300',
}
		
	}).then(res =>{ 
	console.log(res);
	  console.log(user)
})

})

