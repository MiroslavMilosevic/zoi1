/**
 * 
 */
import urlConvert from './scriptFiles/urlConvert.js'
    console.log('index 222222222222222222222222222222222 index 222222222222222222222222222222');

   let buttonLogin = document.getElementById("buttonLogin");
     //  urlConvert('blaURLblaURL');
          buttonLogin.addEventListener('click', ()=>{

           
     // let imgUrl = 'https://firebasestorage.googleapis.com/v0/b/myfirstproject-1b7bc.appspot.com/o/myPictures%2FThu%20Mar%2011%202021%2022%3A13%3A38%20GMT%2B0100%20(Central%20European%20Standard%20Time)%20-%20milan.jpg?alt=media&token=167bcca1-01b9-49ad-a6f9-e8dd941df070';
   axios.get(`http://localhost:8080/apiapi/webapi/myresource/all/objects/user2/456`,{
	  params: {
    url1:'url1',
    url2:'url2',
    imgUrl:'https://firebasestorage.googleapis.com/v0/b/myfirstproject-1b7bc.appspot.com/o/myPictures%2FThu%20Mar%2011%202021%2022%3A13%3A38%20GMT%2B0100%20(Central%20European%20Standard%20Time)%20-%20milan.jpg?alt=media&token=167bcca1-01b9-49ad-a6f9-e8dd941df070',
    token: 'ovo je token'
  }
	
}).then(res => {
	     console.log('dfasdfas555');
        console.log(res);
   })
})

let adress = encodeURI("https:firebasestorage.googleapis.comv0bmyfirstproject-1b7bc.appspot.comomyPictures%2FThu%20Mar%2011%202021%2022%3A13%3A38%20GMT%2B0100%20(Central%20European%20Standard%20Time)%20-%20milan.jpg?alt=media&token=167bcca1-01b9-49ad-a6f9-e8dd941df070");
  let buttonInsert = document.getElementById("insert");

buttonInsert.addEventListener('click', ()=>{
	 	 axios.post('http://localhost:8080/apiapi/webapi/myresource/insert/Nokia/3300/1000/b3/windows/4/128/cc5/'+adress+'+/blaaaaopisss').then(res =>{ 
	console.log(res);
})

//
})

