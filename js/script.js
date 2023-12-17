import { testomonail } from "./user.js";

let photo = document.getElementById("img");
let myname = document.getElementById("myname");
let fulltname = document.getElementById("fulltname");
let icons = document.getElementById("icons");
let randomUser = document.getElementById("random-user");

///icons
let iconPhone = document.getElementById("phone");
let iconFullname = document.getElementById("f-l-name");
let iconEmail = document.getElementById("emial");
let iconAge = document.getElementById("age");
let iconPassword = document.getElementById("password");
let iconJob = document.getElementById("job");


let mytestimonail;
function setValue(index) {
  mytestimonail = testomonail[index];
  myname.innerHTML= mytestimonail.myname;
  fulltname.innerHTML = mytestimonail.fname;
  photo.src = mytestimonail.img;
};

randomUser.addEventListener('click', function () {
  let nunmber = random();
  setValue(nunmber);
})

function random() {
  return Math.floor(Math.random() * testomonail.length)
}


// icons 
iconAge.addEventListener('click', function () {
  myname.innerHTML = 'My age is';
  fulltname.innerHTML = mytestimonail.age;
});

iconEmail.addEventListener('click', function () {
  myname.innerHTML = 'My email is';
  fulltname.innerHTML = mytestimonail.email;
});

iconPassword.addEventListener('click', function () {
  myname.innerHTML = 'My password is';
  fulltname.innerHTML = mytestimonail.password;
});

iconPhone.addEventListener('click', function () {
  myname.innerHTML = 'My phone is';
  fulltname.innerHTML = mytestimonail.phone;
});

iconJob.addEventListener('click', function () {
  myname.innerHTML = 'My job is';
  fulltname.innerHTML = mytestimonail.job;
});

iconFullname.addEventListener('click', function () {
  myname.innerHTML = 'My name is';
  fulltname.innerHTML = mytestimonail.fname;
});


window.addEventListener('DOMContentLoaded', function () {
  setValue(random());
});










