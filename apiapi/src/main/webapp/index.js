/**
 * 
 */
import urlConvert from './scriptFiles/urlConvert.js'
    console.log('dfasdfasdfasdfas');

   let buttonLogin = document.getElementById("buttonLogin");
     //  urlConvert('blaURLblaURL');
          buttonLogin.addEventListener('click', ()=>{
//urlConvert('https://images.samsung.com/is/image/samsung/ie-galaxy-a51-sm-a515fzkveua-front-206100441?$720_576_PNG$');
          console.log("dugme pritisnuto222");

   axios.get('http://localhost:8080/apiapi/webapi/myresource/all/objects/user2/456?rec=YupiYupiTupiUKlupi').then(res => {
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


//https://firebasestorage.googleapis.com/v0/b/myfirstproject-1b7bc.appspot.com/o/myPictures/Thu%20Mar%2011%202021%2022:13:38%20GMT+0100%20(Central%20European%20Standard%20Time)%20-%20milan.jpg?alt=media&token=167bcca1-01b9-49ad-a6f9-e8dd941df070
//https://firebasestorage.googleapis.com/v0/b/myfirstproject-1b7bc.appspot.com/o/myPictures%2FThu%20Mar%2011%202021%2022%3A13%3A38%20GMT%2B0100%20(Central%20European%20Standard%20Time)%20-%20milan.jpg?alt=media&token=167bcca1-01b9-49ad-a6f9-e8dd941df070