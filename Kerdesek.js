import Kerdes from "./Kerdes.js";

export default class Kerdesek {

    #adatok = [];
    #pontszam = 0;
    #pontElem;
    #tarolo;

    constructor(adatok, taroloElem, pontszamElem) {
        const kerdesLista = adatok.slice(22);
        this.#adatok = adatok.slice(2);
        this.#tarolo = taroloElem;
        this.#pontElem = pontszamElem;
        const megjelenitendo = kerdesLista.slice(0, 22);

        megjelenitendo.forEach((adat, index) => {
            new Kerdes(adat, taroloElem, index);
        });

        this.#megjelenitKerdesek();
        this.#frissitPontszam();
        this.#valaszErtekeles();
    }

    #megjelenitKerdesek() {
        this.#adatok.slice(0, 22).forEach((adat, index) => {
            new Kerdes(adat, this.#tarolo, index, (helyes) => this.#valaszErtekeles(helyes));
        });
    }

    #valaszErtekeles(helyes) {
        if (helyes) {
            this.#pontszam++;
        }
        this.#frissitPontszam();
    }

    #frissitPontszam() {
        this.#pontElem.innerHTML = `<h3 class="text-center mt-4">Pontszám: ${this.#pontszam} / ${this.#adatok.length}</h3>`;
    }
}