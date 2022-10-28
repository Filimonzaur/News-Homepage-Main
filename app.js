const menuButton = document.querySelector('#menu');
const container = document.querySelector('#div');

menuButton.addEventListener('click',()=>{
  container.classList.remove("closed");
});
container.addEventListener('click',()=>{
  container.classList.add("closed");
});