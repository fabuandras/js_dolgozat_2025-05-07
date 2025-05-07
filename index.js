import Kerdesek from "./Kerdesek.js";
import { szenvedoMondatok } from "./angol.js";

const TAROLO = document.querySelector(".tarolo");
const PONTSZAM_ELEM = document.querySelector(".pontszam");

new Kerdesek(szenvedoMondatok, TAROLO, PONTSZAM_ELEM);