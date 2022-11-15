let card: {
  title: string;
  title_link: string;
  title_description: string;
  status: string;
  description: string;
  image: string;
};

card = {
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
  // TODO(santigo-zero): Change this mechanism, access the image of a page with
  // meta tags
  image: "project_img_zap",
};

const objectList = [card];

window.onload = function () {
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
};
