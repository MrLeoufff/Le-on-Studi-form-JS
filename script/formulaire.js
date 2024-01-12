export default class Formulaire {

    // Définition du constructeur
    
        constructor(id) {
            this.id = id;
            this.formulaireHtml = document.getElementById(this.id);
            this.formdata = new FormData(this.formulaireHtml);
            this.answers = new Array();
        }
    
        // Méthode pour récupérer le div parent
    
        getDiv(id) {
            return document.getElementById(id).parentNode;
        }
    
        // Méthode pour récupérer un élélment
    
        getElement(id) {
            return document.getElementById(id);
        }
    
        // Méthode permettant de masquer un élément sans animation
    
        maskChamp(id) {
            this.getDiv(id).classList.add("masque");
            this.getElement(id).require = false;
        }
    
        // Méthode permettant d'afficher le champ
    
        showChamp(id) {
            this.getDiv(id).classList.remove("disp");
            this.getDiv(id).classList.add("app");
            this.getElement(id).require = true;
        }
    
        // Méthode permettant de masquer le champ avec animation
    
        hideChamp(id) {
            this.getDiv(id).classList.remove("app");
            this.getDiv(id).classList.add("disp");
            this.getElement(id).require = false;
        }
    
        // Méthode pour savoir si un radio est selctionné

        isSelected(id, value, action, otherAction) {
            this.formdata = new FormData(this.formulaireHtml);
            if(this.formdata.get(id) == value) {
                action();
            } else {
                otherAction();
            }
        }

        // Méthode pour récupérer les élélments de chaque input (et les ajouter à answer)

        getAnswers() {
            this.formdata = new FormData(this.formulaireHtml);
            this.formdata.forEach (
                 (value, key) => {
                    if(value != "" && value != "on") {
                        this.answers.push([key, value]);
                    }
            }

            )
            return this.answers
        }

        // Méthode pour afficher dans un elert les résultats

        affAnswers() {
            let chaine = "Récapitulatif\n\n";
            for (let ligne of this.getAnswers()) {
                chaine += `${ligne [0]} : ${ligne [1]}\n`
            }
            alert(chaine);
        }
    }