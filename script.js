var hide1 = document.querySelector(".hide1");
var hide = document.querySelector(".hide");
var edSkill = document.querySelector(".ed-skills");
var projectList = document.querySelector(".project-list");
hide1 === null || hide1 === void 0 ? void 0 : hide1.addEventListener("click", function (e) {
    projectList === null || projectList === void 0 ? void 0 : projectList.classList.toggle("active");
});
hide === null || hide === void 0 ? void 0 : hide.addEventListener("click", function (e) {
    edSkill === null || edSkill === void 0 ? void 0 : edSkill.classList.toggle("active");
});
