import {addPhoneFnk} from './axiosServices.js'

var firebaseConfig = {
  apiKey: "AIzaSyAaNceFdTg4g-86wIR8R95q0eEOndG2ZmE",
  authDomain: "myfirstproject-1b7bc.firebaseapp.com",
  databaseURL: "https://myfirstproject-1b7bc-default-rtdb.firebaseio.com",
  projectId: "myfirstproject-1b7bc",
  storageBucket: "myfirstproject-1b7bc.appspot.com",
  messagingSenderId: "932787225168",
  appId: "1:932787225168:web:ee39b18787e4e9e4944755"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function firebase1 (naslov, marka, model, cena, procesor, os, ram, rom,standardi, file){
	      console.log('firebase fnk')
	     console.log(file)
	    let ref = firebase.storage().ref("myPictures/");
      let myname = new Date()+" - "+file.name;
      let metadata = {
        contentType: file.type
      }
      let task = ref.child(myname).put(file, metadata);

        task.then(snapshot => snapshot.ref.getDownloadURL())
        .then(url =>{
	      addPhoneFnk(naslov, marka, model, cena, procesor, os, ram, rom, standardi, url)
	
        //  console.log(url);
       //   alert("uspesno uploadovana slika")
        })
	
	console.log("firebase1 funkcija")
}


export default firebase1