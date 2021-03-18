console.log('dfasasdf213123')
var retrievedPhone = localStorage.getItem('currentPhone');

if(retrievedPhone.length > 0){
let el = JSON.parse(retrievedPhone)
console.log(el);
let app_div=document.getElementById('one_phone_app');
app_div.innerHTML='';

let ul = document.createElement('ul');
ul.classList.add('ul-one-phone');

let li1 =document.createElement('li');
li1.classList.add('li-one-phone');
li1.id='naslov';
li1.innerText="ponuda: "+el.naslov;
///
let li2 =document.createElement('li');
li2.classList.add('li-one-phone');
li2.id='marka';
li2.innerText="marka: "+el.mark;
///
let li6 =document.createElement('li');
li6.classList.add('li-one-phone');
li6.id='model';
li6.innerText="procesor: "+el.model;
///
let li3 =document.createElement('li');
li3.classList.add('li-one-phone');
li3.id='cena';
li3.innerText="cena: "+el.cena+" EUR";
///
let li4 =document.createElement('li');
li4.classList.add('li-one-phone');
li4.id='procesor';
li4.innerText="procesor: "+el.kategorija;
///
let li5 =document.createElement('li');
li5.classList.add('li-one-phone');
li5.id='os';
li5.innerText="operativni sistem: "+el.os;
///
let li7 =document.createElement('li');
li7.classList.add('li-one-phone');
li7.id='os';
let img = document.createElement('img');
img.setAttribute('style', 'width:150px ; height:250px');
img.src=el.image;
li7.append(img)
///
let li8 =document.createElement('li');
li8.classList.add('li-one-phone');
li8.id='ram';
li8.innerText="RAM memorija: "+el.ram+"GB";
///
let li9 =document.createElement('li');
li9.classList.add('li-one-phone');
li9.id='rom';
li9.innerText="ROM memorija "+el.rom+'GB';
///
let li10 =document.createElement('li');
li10.classList.add('li-one-phone');
li10.id='standardi';
li10.innerText="Standardi: "+el.standardi;
///
     ul.append(li7,li1,li2,li6,li3,li4,li5,li8,li9,li10);
     app_div.append(ul); 
}