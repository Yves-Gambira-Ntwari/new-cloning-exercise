const menu = document.querySelector("#menu")
const aside = document.querySelector("aside")
menu.addEventListener("click", ()=>{
  aside.classList.toggle("active")
})