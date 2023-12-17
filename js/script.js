import { testomonail } from "./user.js";

let photo = document.getElementById("img");
let myName = document.getElementById("myname");
let fullName = document.getElementById("fullname");
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
  myName.innerHTML= mytestimonail.myname;
  fullName.innerHTML = mytestimonail.fname;
  photo.src = mytestimonail.img;
};

randomUser.addEventListener('click', function () {
  let number = random();
  setValue(number);
})

function random() {
  return Math.floor(Math.random() * testomonail.length)
}

// icons 
iconAge.addEventListener('click', function () {
  myName.innerHTML = 'My age is';
  fullName.innerHTML = mytestimonail.age;
});

iconEmail.addEventListener('click', function () {
  myName.innerHTML = 'My email is';
  fullName.innerHTML = mytestimonail.email;
});

iconPassword.addEventListener('click', function () {
  myName.innerHTML = 'My password is';
  fullName.innerHTML = mytestimonail.password;
});

iconPhone.addEventListener('click', function () {
  myName.innerHTML = 'My phone is';
  fullName.innerHTML = mytestimonail.phone;
});

iconJob.addEventListener('click', function () {
  myName.innerHTML = 'My job is';
  fullName.innerHTML = mytestimonail.job;
});

iconFullname.addEventListener('click', function () {
  myName.innerHTML = 'My name is';
  fullName.innerHTML = mytestimonail.fname;
});


window.addEventListener('DOMContentLoaded', function () {
  setValue(random());
});










