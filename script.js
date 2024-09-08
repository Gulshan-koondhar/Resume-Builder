var hide1 = document.querySelector(".hide1");
var hide = document.querySelector(".hide");
var edSkill = document.querySelector(".ed-skills");
var projectList = document.querySelector(".project-list");
var modal = document.querySelector(".modal");
var createResume = function () {
    if (modal)
        modal.classList.add("active-1");
    if (generatedurl)
        generatedurl.innerText = "";
};
hide1 === null || hide1 === void 0 ? void 0 : hide1.addEventListener("click", function (e) {
    projectList === null || projectList === void 0 ? void 0 : projectList.classList.toggle("active");
});
hide === null || hide === void 0 ? void 0 : hide.addEventListener("click", function (e) {
    edSkill === null || edSkill === void 0 ? void 0 : edSkill.classList.toggle("active");
});
var generateCV = function () {
    var nameField = document.querySelector("#nameField");
    var nameT = document.querySelector("#nameT");
    if (nameField) {
        if (nameT) {
            nameT.innerText = nameField.value;
        }
    }
    var emailField = document.querySelector("#emailField");
    var emailT = document.querySelector("#emailT");
    if (emailField) {
        if (emailT) {
            emailT.innerText = emailField.value;
        }
    }
    var contactField = document.querySelector("#contactField");
    var contactT = document.querySelector("#contactT");
    if (contactField) {
        if (contactT) {
            contactT.innerText = contactField.value;
        }
    }
    var jobTitle = document.querySelector("#jobTitle");
    var jobT = document.querySelector("#jobT");
    if (jobTitle) {
        if (jobT) {
            jobT.innerText = jobTitle.value;
        }
    }
    var objField = document.querySelector("#objField");
    var objT = document.querySelector("#objT");
    if (objField) {
        if (objT) {
            objT.innerText = objField.value;
        }
    }
    var weField = document.querySelector(".weField");
    var weT = document.querySelector("#weT");
    if (weField) {
        if (weT) {
            weT.innerText = weField.value;
        }
    }
    var skField = document.querySelector(".skField");
    var skillT = document.querySelector("#skillT");
    if (skField) {
        if (skillT) {
            skillT.innerText = skField.value;
        }
    }
    var langField = document.querySelector(".langField");
    var langT = document.querySelector("#langT");
    if (langField) {
        if (langT) {
            langT.innerText = langField.value;
        }
    }
    var proField = document.querySelector(".proField");
    var proT = document.querySelector("#proT");
    if (proField) {
        if (proT) {
            proT.innerText = proField.value;
        }
    }
    modal === null || modal === void 0 ? void 0 : modal.classList.remove("active-1");
};
var printCV = function () {
    window.print();
    if (generatedurl)
        generatedurl.innerText = "";
};
var generatedurl = document.querySelector(".url");
function generateShareableURL() {
    var _a;
    var name = (_a = document.getElementById('nameT')) === null || _a === void 0 ? void 0 : _a.innerText;
    var url = new URL(window.location.href);
    url.searchParams.set('name', encodeURIComponent(name || ''));
    if (generatedurl)
        generatedurl.innerHTML = url.toString();
    return url.toString();
}
