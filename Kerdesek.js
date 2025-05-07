import Kerdes from "./Kerdes.js";

export default class Kerdesek {

    constructor(adatok, taroloElem) {
        const kerdesLista = adatok.slice(2);
        const megjelenitendo = kerdesLista.slice(0, 22);

        megjelenitendo.forEach((adat, index) => {
            new Kerdes(adat, taroloElem, index);
        });
    }


}