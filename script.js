//All images taken from PEXELS.COM - free stock images
"use strict";

window.onload = function() {


//Navigation bar buttons
var about = document.querySelector("#navabout");
var services = document.querySelector("#navServices");
var contact = document.querySelector("#navDay");
var write = document.querySelector("#navwrite");
var read = document.querySelector("#navread");
var expert = document.querySelector("#navexpert");
var books = document.querySelector("#navbooks");

about.onclick = function() {
  document.querySelector("#aboutRow").scrollIntoView();
  window.scrollBy(0, -50);
}

services.onclick = function() {
  document.querySelector("#servicesRow").scrollIntoView();
  window.scrollBy(0, -50);
}

contact.onclick = function() {
  document.querySelector("#phoneDay").scrollIntoView();
  window.scrollBy(0, -50);
}

write.onclick = function() {
  document.querySelector("#phonewrite").scrollIntoView();
  window.scrollBy(0, -50);
}

read.onclick = function() {
  document.querySelector("#phoneread").scrollIntoView();
  window.scrollBy(0, -50);
}

expert.onclick = function() {
  document.querySelector("#phoneexpert").scrollIntoView();
  window.scrollBy(0, -50);
}

books.onclick = function() {
  document.querySelector("#phonebooks").scrollIntoView();
  window.scrollBy(0, -50);
}

//Learn more jumbotron button jump to about div
var bannerBtn = document.querySelector("#bannerBtn");
bannerBtn.onclick = function() {
  document.querySelector("#aboutRow").scrollIntoView();
  window.scrollBy(0, -50);
}

//Clear input on click in the form
var formName = document.querySelector("#formName");
formName.onclick = function() {
  formName.value = "";
}

var formEmail = document.querySelector("#formEmail");
formEmail.onclick = function() {
  formEmail.value = "";
}

var formMessage = document.querySelector("#formMessage");
formMessage.onclick = function() {
  formMessage.value = "";
}
}