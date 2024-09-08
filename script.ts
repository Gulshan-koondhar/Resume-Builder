const hide1: HTMLElement | null = document.querySelector(".hide1");
const hide: HTMLElement | null = document.querySelector(".hide");
const edSkill: HTMLElement | null = document.querySelector(".ed-skills");
const projectList: HTMLElement | null = document.querySelector(".project-list");
const nameField: HTMLInputElement | null = document.querySelector("#nameField");
const nameT :HTMLElement | null =document.querySelector("#nameT")
const emailField: HTMLInputElement | null = document.querySelector("#emailField");
const emailT :HTMLElement | null =document.querySelector("#emailT")
const contactField: HTMLInputElement | null = document.querySelector("#contactField");
const contactT :HTMLElement | null =document.querySelector("#contactT")
const modal = document.querySelector(".modal")
const jobTitle: HTMLInputElement | null = document.querySelector("#jobTitle");
const jobT :HTMLElement | null =document.querySelector("#jobT")
const objField: HTMLInputElement | null = document.querySelector("#objField");
const objT :HTMLElement | null =document.querySelector("#objT")
const weField: HTMLInputElement | null = document.querySelector(".weField");
const weT :HTMLElement | null =document.querySelector("#weT")
const skField: HTMLInputElement | null = document.querySelector(".skField");
const skillT :HTMLElement | null =document.querySelector("#skillT")
const langField: HTMLInputElement | null = document.querySelector(".langField");
const langT :HTMLElement | null =document.querySelector("#langT")

const proField: HTMLInputElement | null = document.querySelector(".proField");
const proT :HTMLElement | null =document.querySelector("#proT")


const editPage:()=>void= ()=>{
    if(modal)
        modal.classList.add("active-1")
    if(nameT){
        if(nameField){
            nameField.innerText = nameT.innerHTML
            console.log(nameField.innerHTML)
        }
    }
    if(emailT){
        if(emailField){
            emailField.innerText = emailT.innerText
        }
    }
    if(contactT){
        if(contactField){
            contactField.innerText = contactT.innerText
        }
    }
    if(jobT){
        if(jobTitle){
            jobTitle.innerText = jobT.innerText
        }
    }
    if(objT){
        if(objField){
            objField.innerText = objT.innerText
        }
    }
    if(weT){
        if(weField){
            weField.innerText = weT.innerText
        }
    }
    if(skillT){
        if(skField){
            skField.innerText = skillT.innerText
        }
    }
    if(langT){
        if(langField){
            langField.innerText = langT.innerText
        }
    }
    if(proT){
        if(proField){
            proField.innerText = proT.innerText
        }
    }
}

const createResume: ()=>void = ()=>{
if(modal)
modal.classList.add("active-1")

if(generatedurl)
    generatedurl.innerText= ""

}


hide1?.addEventListener("click", (e: MouseEvent): void => {
    projectList?.classList.toggle("active");
});

hide?.addEventListener("click", (e: MouseEvent): void => {
    edSkill?.classList.toggle("active");
});


const generateCV:()=>void=()=>{

        if (nameField) {
            if(nameT){
                nameT.innerText = nameField.value;
            }
        }

        if (emailField) {
            if(emailT){
                emailT.innerText = emailField.value;
            }
        }

        if (contactField) {
            if(contactT){
                contactT.innerText = contactField.value;
            }
        }

        if (jobTitle) {
            if(jobT){
                jobT.innerText = jobTitle.value;
            }
        }
        if (objField) {
            if(objT){
                objT.innerText = objField.value;
            }
        }

        if (weField) {
            if(weT){
                weT.innerText = weField.value;
            }
        }

        if (skField) {
            if(skillT){
                skillT.innerText = skField.value;
            }
        }

        if (langField) {
            if(langT){
                langT.innerText = langField.value;
            }
        }
        if (proField) {
            if(proT){
                proT.innerText = proField.value;
            }
        }
        
        modal?.classList.remove("active-1")
        
}

const printCV:()=> void= ()=>{
    window.print()
    
if(generatedurl)
    generatedurl.innerText= ""
}
const generatedurl:HTMLElement | null = document.querySelector(".url")
function generateShareableURL(): string {
    const name: string | undefined = document.getElementById('nameT')?.innerText;
    const url: URL = new URL(window.location.href);
    url.searchParams.set('name', encodeURIComponent(name || ''));
    if(generatedurl)
    generatedurl.innerHTML = url.toString() 

    return url.toString();
}

const closeModal : ()=>void = ()=>{
    if(modal){
        modal.classList.remove("active-1")
    }
}