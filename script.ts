const hide1: HTMLElement | null = document.querySelector(".hide1");
const hide: HTMLElement | null = document.querySelector(".hide");
const edSkill: HTMLElement | null = document.querySelector(".ed-skills");
const projectList: HTMLElement | null = document.querySelector(".project-list");
const modal = document.querySelector(".modal")

const createResume: ()=>void = ()=>{
if(modal)
modal.classList.add("active-1")

}



hide1?.addEventListener("click", (e: MouseEvent): void => {
    projectList?.classList.toggle("active");
});

hide?.addEventListener("click", (e: MouseEvent): void => {
    edSkill?.classList.toggle("active");
});


const generateCV:()=>void=()=>{
        const nameField: HTMLInputElement | null = document.querySelector("#nameField");
        const nameT :HTMLElement | null =document.querySelector("#nameT")
        if (nameField) {
            if(nameT){
                nameT.innerText = nameField.value;
            }
        }
        const emailField: HTMLInputElement | null = document.querySelector("#emailField");
        const emailT :HTMLElement | null =document.querySelector("#emailT")
        if (emailField) {
            if(emailT){
                emailT.innerText = emailField.value;
            }
        }
        const contactField: HTMLInputElement | null = document.querySelector("#contactField");
        const contactT :HTMLElement | null =document.querySelector("#contactT")
        if (contactField) {
            if(contactT){
                contactT.innerText = contactField.value;
            }
        }
        const jobTitle: HTMLInputElement | null = document.querySelector("#jobTitle");
        const jobT :HTMLElement | null =document.querySelector("#jobT")
        if (jobTitle) {
            if(jobT){
                jobT.innerText = jobTitle.value;
            }
        }
        const objField: HTMLInputElement | null = document.querySelector("#objField");
        const objT :HTMLElement | null =document.querySelector("#objT")
        if (objField) {
            if(objT){
                objT.innerText = objField.value;
            }
        }
        const weField: HTMLInputElement | null = document.querySelector(".weField");
        const weT :HTMLElement | null =document.querySelector("#weT")
        if (weField) {
            if(weT){
                weT.innerText = weField.value;
            }
        }
        const skField: HTMLInputElement | null = document.querySelector(".skField");
        const skillT :HTMLElement | null =document.querySelector("#skillT")
        if (skField) {
            if(skillT){
                skillT.innerText = skField.value;
            }
        }
        const langField: HTMLInputElement | null = document.querySelector(".langField");
        const langT :HTMLElement | null =document.querySelector("#langT")
        if (langField) {
            if(langT){
                langT.innerText = langField.value;
            }
        }
        const proField: HTMLInputElement | null = document.querySelector(".proField");
        const proT :HTMLElement | null =document.querySelector("#proT")
        if (proField) {
            if(proT){
                proT.innerText = proField.value;
            }
        }
        
        modal?.classList.remove("active-1")
        
}

const printCV:()=> void= ()=>{
    window.print()
}