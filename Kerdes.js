export default class Kerdes {
    #adat;
    #index;
    #szuloElem;

    constructor(adat, szuloElem, index) {
        this.#adat = adat;
        this.#szuloElem = szuloElem;
        this.#index = index;
        this.megjelenit();
    }

    megjelenit() {
        const LISTA = this.#adat.mondat.split("_");

        const valaszokHTML = this.#adat.valasztas.map(valasz => `<li>${valasz}</li>`).join("");

        let html = `
            <div class="col-md-6 mb-4">
                <div class="card p-3">
                    <p class="valaszlehetosegek">Válaszlehetőségek: ${valaszokHTML}</p>
                    <p class="megfeleloAlak">Gépeld be a megfelelő alakot!</p>
                    <p class="mondat">${LISTA[0]} <input type="text" id="valasz-${this.#index}" /> ${LISTA[1]}</p>
                    <button class="btn btn-primary" id="ellenor-${this.#index}">Ellenőrzés</button>
                    <div id="visszajelzes-${this.#index}" class="mt-2"></div>
                </div>
            </div>
        `;
        this.#szuloElem.insertAdjacentHTML("beforeend", html);
    }
}