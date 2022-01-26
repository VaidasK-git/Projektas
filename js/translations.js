//Vertimo duomenys
function getTranslation(lang) {
    let translations = {
        en: {
            modal: {
                title: "Are you sure you want to order? ",
                yes: "YES",
                no: "NO"
            },
            menu: {
                partners: "Partners",
                feedback: "Feedback",
                order: "Order!"
            },
            description: {
                title: "Choose a plan"
            },
            plans: {
                planSolo: {
                    price: "0 €/month",
                    description: "For the hobby",
                    planFeatureOne: "1 Device",
                    planFeatureTwo: "Unlimited traffic",
                    planFeatureThree: "10GB Storage",
                    planFeatureFour: "Support"
                },
                planBasic: {
                    price: "19 €/month",
                    description: "For large projects",
                    planFeatureOne: "10 Devices",
                    planFeatureTwo: "Unlimited traffic ",
                    planFeatureThree: "10 GB Storage",
                    planFeatureFour: "24/7 Support"
                },
                planPremium: {
                    price: "49 €/month",
                    description: "For the company  ",
                    planFeatureOne: "50 Devices",
                    planFeatureTwo: "Unlimited traffic",
                    planFeatureThree: "Unlimited storage",
                    planFeatureFour: "24/7 Support"
                }
            },
            orderButton: {
                title: "Order!"
            },
            benefit: {
                title: "Why choose us",
                benefitOne: "1000 Satisfied Customers",
                benefitTwo: "24/7 Support",
                benefitThree: "360 days without interruption"
            },
            footer: {
                contacts: "Contacts: serveriai@serveriai.com"
            },
            orderPage: {
                title: "GREAT! LET'S START REGISTRATION ",
                plan: "Plan",
                name: "Name",
                lastName: "Surname",
                email: "Email",
                password: "Password",
                terms: "I agree to the terms and conditions",
                submit: "Submit"
            }
        },
        lt: {
            modal: {
                title: "Ar tikrai norite užsakyti?",
                yes: "TAIP",
                no: "NE"
            },
            menu: {
                partners: "Partneriai",
                feedback: "Atsiliepimai",
                order: "Užsakyk!"
            },
            description: {
                title: "Pasirinkite planą"
            },
            plans: {
                planSolo: {
                    price: "0 €/mėn",
                    description: "Hobiui",
                    planFeatureOne: "1 Įtaisas",
                    planFeatureTwo: "Neribotas srautas",
                    planFeatureThree: "10GB Vietos",
                    planFeatureFour: "Pagalba"
                },
                planBasic: {
                    price: "19 €/mėn",
                    description: "Dideliems projektams",
                    planFeatureOne: "10 Įtaisų",
                    planFeatureTwo: "Neribotas srautas",
                    planFeatureThree: "100GB Vietos",
                    planFeatureFour: "Pagalba 24/7"
                },
                planPremium: {
                    price: "49 €/mėn",
                    description: "Įmonei",
                    planFeatureOne: "50 Įtaisų",
                    planFeatureTwo: "Neribotas srautas",
                    planFeatureThree: "Neribota vieta",
                    planFeatureFour: "Pagalba 24/7"
                },

            },
            benefit: {
                title: "Kodėl verta rinktis mus",
                benefitOne: "1000 Patenkintų Klientų",
                benefitTwo: "Pagalba 24/7",
                benefitThree: "360 dienų be trigdžių"
            },
            orderButton: {
                title: "Užsakyti!"
            },
            footer: {
                contacts: "Kontaktai: serveriai@serveriai.com"
            },
            orderPage: {
                title: "PUIKU! PRADĖKIME REGISTRACIJĄ",
                plan: "Planas",
                name: "Vardas",
                lastName: "Pavardė",
                email: "El. paštas",
                password: "Slaptažodis",
                terms: "Sutinku su sąlygomis ir taisyklėmis",
                submit: "Pateikti"
            }
        }
    };

    return translations[lang];
}

let localStorage = window.localStorage;

let lang = localStorage.getItem("language");

if (!lang) {
    lang = document.querySelector("#languageChanger").value;
}
else {
    document.querySelector("#languageChanger").value = lang;
}

//Modal vertimas
function doTranslationsModal(kalba) {
    let translation = getTranslation(kalba);
    document.querySelector("[translation-modal-title]").innerText = translation.modal.title;
    document.querySelector("[translation-modal-yes]").innerText = translation.modal.yes;
    document.querySelector("[translation-modal-no]").innerText = translation.modal.no;
}

//Menu vertimas
function doTranslationsMenu(kalba) {
    let translation = getTranslation(kalba);
    for (let index = 0; index < document.querySelectorAll("[translation-menu-partners]").length; index++) {
        const elementParter = document.querySelectorAll("[translation-menu-partners]")[index];
        elementParter.innerText = translation.menu.partners;
        const elementFeedback = document.querySelectorAll("[translation-menu-feedback]")[index];
        elementFeedback.innerText = translation.menu.feedback;
        const elementOrder = document.querySelectorAll("[translation-menu-order]")[index];
        elementOrder.innerText = translation.menu.order;
    }
}

//Aprasymo vertimas
function doTranslationsDescription(kalba) {
    let translation = getTranslation(kalba);
    document.querySelector("[translation-description-title]").innerText = translation.description.title;
}

//Planu vertimas
function doTranslationsPlans(kalba) {
    let translation = getTranslation(kalba);
    //planSolo
    document.querySelector("[translation-plans-planSolo-price]").innerText = translation.plans.planSolo.price;
    document.querySelector("[translation-plans-planSolo-description]").innerText = translation.plans.planSolo.description;
    document.querySelector("[translation-plans-planSolo-planFeatureOne]").innerText = translation.plans.planSolo.planFeatureOne;
    document.querySelector("[translation-plans-planSolo-planFeatureTwo]").innerText = translation.plans.planSolo.planFeatureTwo;
    document.querySelector("[translation-plans-planSolo-planFeatureThree]").innerText = translation.plans.planSolo.planFeatureThree;
    document.querySelector("[translation-plans-planSolo-planFeatureFour]").innerText = translation.plans.planSolo.planFeatureFour;
    //planBasic
    document.querySelector("[translation-plans-planBasic-price]").innerText = translation.plans.planBasic.price;
    document.querySelector("[translation-plans-planBasic-description]").innerText = translation.plans.planBasic.description;
    document.querySelector("[translation-plans-planBasic-planFeatureOne]").innerText = translation.plans.planBasic.planFeatureOne;
    document.querySelector("[translation-plans-planBasic-planFeatureTwo]").innerText = translation.plans.planBasic.planFeatureTwo;
    document.querySelector("[translation-plans-planBasic-planFeatureThree]").innerText = translation.plans.planBasic.planFeatureThree;
    document.querySelector("[translation-plans-planBasic-planFeatureFour]").innerText = translation.plans.planBasic.planFeatureFour;
    //planPremium
    document.querySelector("[translation-plans-planPremium-price]").innerText = translation.plans.planPremium.price;
    document.querySelector("[translation-plans-planPremium-description]").innerText = translation.plans.planPremium.description;
    document.querySelector("[translation-plans-planPremium-planFeatureOne]").innerText = translation.plans.planPremium.planFeatureOne;
    document.querySelector("[translation-plans-planPremium-planFeatureTwo]").innerText = translation.plans.planPremium.planFeatureTwo;
    document.querySelector("[translation-plans-planPremium-planFeatureThree]").innerText = translation.plans.planPremium.planFeatureThree;
    document.querySelector("[translation-plans-planPremium-planFeatureFour]").innerText = translation.plans.planPremium.planFeatureFour;
}

//Uzsakymo mygtuko vertimas
function doTranslationsOrderButton(kalba) {
    let translation = getTranslation(kalba);
    document.querySelector("[translation-orderButton-title]").innerText = translation.orderButton.title;
}

//Naudu vertimas
function doTranslationsOrderBenefit(kalba) {
    let translation = getTranslation(kalba);
    document.querySelector("[translation-benefit-title]").innerText = translation.benefit.title;
    document.querySelector("[translation-benefit-benefitOne]").innerText = translation.benefit.benefitOne;
    document.querySelector("[translation-benefit-benefitTwo]").innerText = translation.benefit.benefitTwo;
    document.querySelector("[translation-benefit-benefitThree]").innerText = translation.benefit.benefitThree;
}

//Footer vertimas
function doTranslationsFooter(kalba) {
    let translation = getTranslation(kalba);
    document.querySelector("[translation-footer-contacts]").innerText = translation.footer.contacts;
}

//Uzsakymu puslapio vertimas
function doTranslationsOrderPage(kalba) {
    let translation = getTranslation(kalba);
    document.querySelector("[translation-orderPage-title]").innerText = translation.orderPage.title;
    document.querySelector("[translation-orderPage-plan]").innerText = translation.orderPage.plan;
    document.querySelector("[translation-orderPage-name]").innerText = translation.orderPage.name;
    document.querySelector("[translation-orderPage-lastName]").innerText = translation.orderPage.lastName;
    document.querySelector("[translation-orderPage-email]").innerText = translation.orderPage.email;
    document.querySelector("[translation-orderPage-password]").innerText = translation.orderPage.password;
    document.querySelector("[translation-orderPage-terms]").innerText = translation.orderPage.terms;
    document.querySelector("[translation-orderPage-submit]").value = translation.orderPage.submit;
}





