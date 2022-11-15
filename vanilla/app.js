const card = {
  id: 'card4',
  title: 'This website',
  title_link: 'https://santigo-zero.github.io',
  title_description: "Santiago's Portfolio, this same website",

  status: 'THIS IS THE STATUS',
  description: 'This page was entirely made by me, CSS3, TODO.......',

  image: 'project_img_zap',
}

let objectList = [card]

function main() {
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.setAttribute('id', objectList[0].id)
  newCard.insertAdjacentText('beforeend', 'test')

  // This is where we put all the cards
  const projectList = document.querySelector('.list-projects')
  projectList.append(newCard)
}

window.onload = main()
