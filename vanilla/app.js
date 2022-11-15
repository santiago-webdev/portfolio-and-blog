var card = {
    title: "This website",
    title_link: "https://santigo-zero.github.io",
    title_description: "Santiago's Portfolio, this same website",
    status: "\n    <div class=\"card_status\">\n      <i class=\"fa-solid fa-ice-cream\"></i> Vanilla\n    </div>\n    <div class=\"card_status\">\n      <i class=\"fa-solid fa-user\"></i> Solo\n    </div>\n    <div class=\"card_status\">\n      <i class=\"fa-solid fa-candy-cane\"></i> Eye Candy\n    </div> ",
    description: "\n    This page was entirely made by me, CSS3, HTML5 and vanilla\n    Javascript, even the theme's accent is vanilla! The inspiration for\n    the the UI/UX from\n    <a\n      class=\"link\"\n      target=\"_blank\"\n      rel=\"noopener noreferrer\"\n      title=\"Lightly\"\n      href=\"https://github.com/Luwx/Lightly\"\n      >this project</a\n    >.\n  ",
    image: "project_img_zap"
};
var card2 = {
    title: 'Website for Zap <i class="fa-solid fa-bolt-lightning"></i>',
    title_link: "https://zapzsh.org",
    title_description: "Website for Zap zsh plugin manager",
    status: "\n    <div class=\"card_status\">\n      <i class=\"fa-solid fa-check\"></i>\n    </div>\n    <div class=\"card_status\">\n      <i class=\"fa-brands fa-osi\"></i> Open Source\n    </div>\n    <div class=\"card_status\">\n      <i class=\"fa-solid fa-earth-americas\"></i> Community\n    </div> ",
    description: "\n    A page that I build with another member of the zap-zsh organization.\n    It's a plain javascript, html and css page with no frameworks\n    involved to match the ideology of the zap plugin manager,\n    minimalism.\n  ",
    image: "project_img_first"
};
var objectList = [card, card2];
function main() {
    var projectList = document.querySelector(".list-projects");
    // I'm not using a ! in here because I know projectList is not going to be null
    return projectList.insertAdjacentHTML("beforeend", "<div class=\"card\">\n        <div class=\"header\">\n          <h2 class=\"card_title\">\n            <a\n              class=\"link\"\n              target=\"_blank\"\n              rel=\"noopener noreferrer\"\n              title=".concat(objectList[0].title_description, "\n              href=").concat(objectList[0].title_link, "\n              >").concat(objectList[0].title, "\n            </a>\n          </h2>\n          <div class=\"status\">\n            ").concat(objectList[0].status, "\n          </div>\n        </div>\n        <div class=\"").concat(objectList[0].image, "\"></div>\n        <p class=\"card__description\">").concat(objectList[0].description, "</p>\n    </div>"));
}
function main2() {
    var projectList = document.querySelector(".list-projects");
    // I'm not using a ! in here because I know projectList is not going to be null
    return projectList.insertAdjacentHTML("beforeend", "<div class=\"card\">\n        <div class=\"header\">\n          <h2 class=\"card_title\">\n            <a\n              class=\"link\"\n              target=\"_blank\"\n              rel=\"noopener noreferrer\"\n              title=".concat(objectList[1].title_description, "\n              href=").concat(objectList[1].title_link, "\n              >").concat(objectList[1].title, "\n            </a>\n          </h2>\n          <div class=\"status\">\n            ").concat(objectList[1].status, "\n          </div>\n        </div>\n        <div class=\"").concat(objectList[1].image, "\"></div>\n        <p class=\"card__description\">").concat(objectList[1].description, "</p>\n    </div>"));
}
window.onload = function () {
    main();
    main2();
};
