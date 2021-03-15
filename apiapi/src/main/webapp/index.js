/**
 * 
 */
    console.log('dfasdfasdfasdfas');

   let buttonLogin = document.getElementById("buttonLogin");

          buttonLogin.addEventListener('click', ()=>{

          console.log("dugme pritisnuto");

    axios.get('http://localhost:8080/apiapi/webapi/myresource/all/objects/user2/456').then(res => {
	     console.log('dfasdfas');
        console.log(res);
    })
})


  let buttonInsert = document.getElementById("insert");

buttonInsert.addEventListener('click', ()=>{
	 	 axios.post('http://localhost:8080/apiapi/webapi/myresource/insert/Nokia/3300').then(res =>{ 
	console.log(res);
})


})

