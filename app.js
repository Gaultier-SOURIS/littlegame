const app = {
    init: function() {
        console.log('start init');
        app.createPads(); // Appelle la fonction pour créer les pads
        app.addRadioListeners(); // Appelle la fonction pour ajouter les écouteurs d'événements aux boutons radio
    },

    createPads: function() {
        const padsContainer = document.querySelector(".pads"); // Sélectionne le conteneur des pads

        // Crée une grille de 3x3 pour les pads
        for (let row = 0; row < 3; row++) {
            const rowDiv = document.createElement('div'); // Crée une ligne pour chaque rangée de pads
            rowDiv.classList.add('row'); // Ajoute la classe 'row' à la ligne créée
            padsContainer.appendChild(rowDiv); // Ajoute la ligne au conteneur des pads

            for (let column = 0; column < 3; column++) {
                const padDiv = document.createElement('div'); // Crée un pad individuel
                padDiv.classList.add('pad'); // Ajoute la classe 'pad' au pad créé
                rowDiv.appendChild(padDiv); // Ajoute le pad à la ligne correspondante

                // Crée un bouton radio et une étiquette associée pour chaque pad
                const radioInput = document.createElement('input');
                radioInput.classList.add('selected-pad');
                radioInput.setAttribute('type', 'radio');
                radioInput.setAttribute('id', `pad${row * 3 + column + 1}`); // Définit un identifiant unique pour chaque bouton radio

                const label = document.createElement('label'); // Crée une étiquette pour chaque bouton radio
                label.setAttribute('for', `pad${row * 3 + column + 1}`); // Associe l'étiquette au bouton radio correspondant

                padDiv.appendChild(radioInput); // Ajoute le bouton radio au pad
                padDiv.appendChild(label); // Ajoute l'étiquette au pad

                padDiv.addEventListener('click', app.clickOnPads) // ajoute un ecouteur d'evenement sur le pad pr activer le son
                padDiv.addEventListener('mousedown', app.changeColorPad) // ajoute un ecouteur d'evenement sur le pad pr changer couleur
                padDiv.addEventListener('mouseup', app.removeColorPads) // ajoute un ecouteur d'evenement sur le pad pr restaurer la couleur

            }
        }
    },

    addRadioListeners: function() {
        const radioInputs = document.querySelectorAll('.selected-pad'); // Sélectionne tous les boutons radio créés

        radioInputs.forEach(input => {
            input.addEventListener('click', function() {
                // Lorsqu'un bouton radio est cliqué, cela décochera tous les autres boutons radio
                radioInputs.forEach(radio => {
                    radio.checked = false;
                });

                // Coche le bouton radio actuel qui a été cliqué
                this.checked = true;
            });
        });
    },

    clickOnPads: function(event) {
     const clickPad = event.currentTarget;//cible le pad sur lequel on clique
    },
    changeColorPad: function(event) {
        console.log('je change la couleur');
        const clickPad = event.currentTarget;//cible le pad sur lequel on clique
        clickPad.classList.add("pad-color");// change la couleur du pad
        
    },
    removeColorPads: function(event) {
        console.log('je restaure la couleur');
        const clickPad = event.currentTarget;//cible le pad sur lequel on clique
        clickPad.classList.remove("pad-color");//restaure la couleur du pad
    },
};

app.init(); // Appelle la fonction initiale pour lancer l'application
