import Formulaire  from "./formulaire.js";

// Créer le formulaire

const formulaire = new Formulaire("formulaire");

formulaire.maskChamp("societe");

formulaire.maskChamp("email");

// addeventlistener pour changer le comportement en fonction du radio coché

formulaire.getElement("particulier").addEventListener("change", () => {
    formulaire.hideChamp("societe")
});

formulaire.getElement("professionnel").addEventListener("change", () => {
    formulaire.showChamp("societe")
});

// addevenlistener pour changer le comportement en fonction de objet

formulaire.getElement("objet").addEventListener("change", () => {
    formulaire.isSelected("objet", "demande_de_contact", () => {formulaire.showChamp("email")}, () => formulaire.hideChamp ())
});

// addeventlistener pour récupérer les données du formulaire

formulaire.formulaireHtml.addEventListener("submit",
    (event) => {
        event.preventDefault();
        formulaire.affAnswers();
    }
)

