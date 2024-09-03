let list = document.querySelectorAll(".navagetion li");
let btnn =document.querySelector(".toggle")
let menu =document.querySelector(".main")
let nav =document.querySelector(".navagetion")
let cansel =document.querySelector(".cansel")
console.log(list)

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
    nav.classList.remove("active");
    menu.classList.remove("active");
    item.classList.remove("titlecopy");
  });
  this.classList.add("hovered");
  this.classList.add("titlecopy");
  
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

btnn.onclick=function(){
  menu.classList.toggle("active")
  nav.classList.toggle("active")
}
cansel.onclick=function(){
  menu.classList.remove("active")
  nav.classList.remove("active")
}
