const hide1: HTMLElement | null = document.querySelector(".hide1");
const hide: HTMLElement | null = document.querySelector(".hide");
const edSkill: HTMLElement | null = document.querySelector(".ed-skills");
const projectList: HTMLElement | null = document.querySelector(".project-list");

hide1?.addEventListener("click", (e: MouseEvent): void => {
    projectList?.classList.toggle("active");
});

hide?.addEventListener("click", (e: MouseEvent): void => {
    edSkill?.classList.toggle("active");
});