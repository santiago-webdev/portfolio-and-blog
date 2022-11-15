var card;
// <div class="card">
//   <div class="header">
//     <h2 class="card_title">
//       <a
//         class="link"
//         target="_blank"
//         rel="noopener noreferrer"
//         title="Santiago's Portfolio, this same website"
//         href="https://santigo-zero.github.io"
//         >This website
//       </a>
//     </h2>
//     <div class="status">
//       <div class="card_status">
//         <i class="fa-solid fa-ice-cream"></i> Vanilla
//       </div>
//       <div class="card_status">
//         <i class="fa-solid fa-user"></i> Solo
//       </div>
//       <div class="card_status">
//         <i class="fa-solid fa-candy-cane"></i> Eye Candy
//       </div>
//     </div>
//   </div>
//   <div class="project_img_zap"></div>
//   <p class="card__description">
//     This page was entirely made by me, CSS3, HTML5 and vanilla
//     Javascript, even the theme's accent is vanilla! The inspiration for
//     the the UI/UX from
//     <a
//       class="link"
//       target="_blank"
//       rel="noopener noreferrer"
//       title="Lightly"
//       href="https://github.com/Luwx/Lightly"
//       >this project</a
//     >
//   </p>
// </div>
card = {
    title: "This website",
    title_link: "https://santigo-zero.github.io",
    title_description: "Santiago's Portfolio, this same website",
    status: "\n    <div class=\"card_status\">\n      <i class=\"fa-solid fa-ice-cream\"></i> Vanilla\n    </div>\n    <div class=\"card_status\">\n      <i class=\"fa-solid fa-user\"></i> Solo\n    </div>\n    <div class=\"card_status\">\n      <i class=\"fa-solid fa-candy-cane\"></i> Eye Candy\n    </div> ",
    description: "\n    This page was entirely made by me, CSS3, HTML5 and vanilla\n    Javascript, even the theme's accent is vanilla! The inspiration for\n    the the UI/UX from\n    <a\n      class=\"link\"\n      target=\"_blank\"\n      rel=\"noopener noreferrer\"\n      title=\"Lightly\"\n      href=\"https://github.com/Luwx/Lightly\"\n      >this project</a\n    >.\n  ",
    // TODO(santigo-zero): Change this mechanism, access the image of a page with
    // meta tags
    image: "project_img_zap"
};
var objectList = [card];
window.onload = function () {
    var projectList = document.querySelector(".list-projects");
    // I'm not using a ! in here because I know projectList is not going to be null
    return projectList.insertAdjacentHTML("beforeend", "<div class=\"card\">\n        <div class=\"header\">\n          <h2 class=\"card_title\">\n            <a\n              class=\"link\"\n              target=\"_blank\"\n              rel=\"noopener noreferrer\"\n              title=".concat(objectList[0].title_description, "\n              href=").concat(objectList[0].title_link, "\n              >").concat(objectList[0].title, "\n            </a>\n          </h2>\n          <div class=\"status\">\n            ").concat(objectList[0].status, "\n          </div>\n        </div>\n        <div class=\"").concat(objectList[0].image, "\"></div>\n        <p class=\"card__description\">").concat(objectList[0].description, "</p>\n    </div>"));
};
// TODO(santigo-zero): Read directly from ./templates/card.html
