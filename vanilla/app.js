const card = {
  id: 'card4',
  title: 'This website',
  title_link: 'https://santigo-zero.github.io',
  title_description: "Santiago's Portfolio, this same website",

  // This is an array
  status: 'THIS IS THE STATUS',
  description: `
    This page was entirely made by me, CSS3, HTML5 and vanilla
    Javascript, even the theme's accent is vanilla! The inspiration for
    the the UI/UX from
    <a
      class="link"
      target="_blank"
      rel="noopener noreferrer"
      title="Lightly"
      href="https://github.com/Luwx/Lightly"
      >this project</a
    >
  `,

  image: 'project_img_zap',
}

const objectList = [card]

function main() {
  const projectList = document.querySelector('.list-projects')
  projectList.insertAdjacentHTML(
    'beforeend',
    ` <div class="card">
        <div class="header">
          <h2 class="card_title">
            <a
              class="link"
              target="_blank"
              rel="noopener noreferrer"
              title=${objectList[0].title_description}
              href=${objectList[0].title_link}
              >This website
            </a>
            ${objectList[0].title}
          </h2>
          <div class="status">
            <div class="card_status">${objectList[0].status}</div>
          </div>
        </div>
        <div class="project_img_first"></div>
        <p class="card__description">${objectList[0].description}</p>
      </div> `
  )
}

window.onload = main()
