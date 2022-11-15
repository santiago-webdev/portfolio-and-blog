const card = {
  title: "This website",
  title_link: "https://santigo-zero.github.io",
  title_description: "Santiago's Portfolio, this same website",
  status: `
    <div class="card_status">
      <i class="fa-solid fa-ice-cream"></i> Vanilla
    </div>
    <div class="card_status">
      <i class="fa-solid fa-user"></i> Solo
    </div>
    <div class="card_status">
      <i class="fa-solid fa-candy-cane"></i> Eye Candy
    </div> `,
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
    >.
  `,
  image: "project_img_zap",
};

const card2 = {
  title: 'Website for Zap <i class="fa-solid fa-bolt-lightning"></i>',
  title_link: "https://zapzsh.org",
  title_description: "Website for Zap zsh plugin manager",
  status: `
    <div class="card_status">
      <i class="fa-solid fa-check"></i>
    </div>
    <div class="card_status">
      <i class="fa-brands fa-osi"></i> Open Source
    </div>
    <div class="card_status">
      <i class="fa-solid fa-earth-americas"></i> Community
    </div> `,
  description: `
    A page that I build with another member of the zap-zsh organization.
    It's a plain javascript, html and css page with no frameworks
    involved to match the ideology of the zap plugin manager,
    minimalism.
  `,
  image: "project_img_first",
};

const objectList = [card, card2];

function main() {
  const projectList = document.querySelector(".list-projects");
  // I'm not using a ! in here because I know projectList is not going to be null
  return projectList!.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <div class="header">
          <h2 class="card_title">
            <a
              class="link"
              target="_blank"
              rel="noopener noreferrer"
              title=${objectList[0].title_description}
              href=${objectList[0].title_link}
              >${objectList[0].title}
            </a>
          </h2>
          <div class="status">
            ${objectList[0].status}
          </div>
        </div>
        <div class="${objectList[0].image}"></div>
        <p class="card__description">${objectList[0].description}</p>
    </div>`
  );
}

function main2() {
  const projectList = document.querySelector(".list-projects");
  // I'm not using a ! in here because I know projectList is not going to be null
  return projectList!.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <div class="header">
          <h2 class="card_title">
            <a
              class="link"
              target="_blank"
              rel="noopener noreferrer"
              title=${objectList[1].title_description}
              href=${objectList[1].title_link}
              >${objectList[1].title}
            </a>
          </h2>
          <div class="status">
            ${objectList[1].status}
          </div>
        </div>
        <div class="${objectList[1].image}"></div>
        <p class="card__description">${objectList[1].description}</p>
    </div>`
  );
}

window.onload = function () {
  main();
  main2();
};
