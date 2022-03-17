let companyDescriptionTitle = document.getElementById('descriptionTitle');
let companyDescriptionBody = document.getElementById('descriptionBody');
let contactsTitle = document.getElementById('contactsTitle');
let languageWrap = document.getElementById('languageWrap');

// Get the default values for the ITA version
let defaultTitle = companyDescriptionTitle.innerHTML;
let defaultBody = companyDescriptionBody.innerHTML;
let defaultContactsTitle = contactsTitle.innerHTML;

function showOptions() {
    languageWrap.style.visibility = 'visible';
    languageWrap.style.opacity = '1';
}

function hideOptions() {
    languageWrap.style.visibility = 'hidden';
    languageWrap.style.opacity = '0';
}

function changeLanguage_eng() {
    companyDescriptionTitle.innerHTML = "Tools for metal moulding.";
    companyDescriptionBody.innerHTML = "TMCo - Tools Molding Company - is an Italian company based in Turin. We are specialised in the production of tools which are commonly used to mould steel - punches for instance - but we also manifacture machine components, like spacers or tension rollers. We utilize all types of steel made by the most renowned steelworks in Europe.";
    contactsTitle.innerHTML = "Contacts";
    hideOptions();
}

function changeLanguage_ita() {
    companyDescriptionTitle.innerHTML = defaultTitle;
    companyDescriptionBody.innerHTML = defaultBody;
    contactsTitle.innerHTML = defaultContactsTitle;
    hideOptions();
}

document.getElementById('btnIta').addEventListener('click', changeLanguage_ita);

document.getElementById('btnEng').addEventListener('click', changeLanguage_eng);

document.getElementById('globeBtn').addEventListener('click', showOptions)