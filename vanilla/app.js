// const card = document.querySelector('.link')
// card.addEventListener('mouseover', changeTitleBG)
// card.addEventListener('click', changeTitleBG)

// function changeTitleBG() {
//   card.style.backgroundColor = 'green'
// }

const obj = {
  name: 'This website', // property name may be an identifier
  status: 'this is the status', // or a number
};

function load_home() {
  document.getElementsByClassName("list-projects").innerHTML='<object type="text/html" data="../templates/card.html" ></object>';
}
