export default class Kerdes {
    #adat;
    #index;
    #szuloElem;

    #valaszolt = false;
    #callback;

    constructor(adat, szuloElem, index, callback) {
        this.#adat = adat;
        this.#szuloElem = szuloElem;
        this.#index = index;
        this.#callback = callback;
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

        this.#esemenyHozzaadas();
    }

    #esemenyHozzaadas() {
        const inputElem = document.getElementById(`valasz-${this.#index}`);
        const gomb = document.getElementById(`ellenor-${this.#index}`);
        const visszajelzesElem = document.getElementById(`visszajelzes-${this.#index}`);

        gomb.addEventListener("click", () => {
            if (this.#valaszolt) return;

            const beirt = inputElem.value.trim().toLowerCase();
            const helyes = this.#adat.valasztas[0].toLowerCase();

            if (beirt === helyes) {
                inputElem.classList.add("border-success");
                visszajelzesElem.innerHTML = "✅ Helyes!";
                visszajelzesElem.style.color = "green";
                this.#callback(true);
            } else {
                inputElem.classList.add("border-danger");
                visszajelzesElem.innerHTML = `❌ Helytelen! A helyes válasz: <strong>${this.#adat.valasztas[0]}</strong>`;
                visszajelzesElem.style.color = "red";
                this.#callback(false);
            }

            this.#valaszolt = true;
            inputElem.disabled = true;
            gomb.disabled = true;
        });
    }
}