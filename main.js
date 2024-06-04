import { megjelenit, palyaOsszeallit, hagyLekapcsolva } from "./fugvenyek.js";
const articleELEM = $("article");
const asideLeirasELEM = $("#leiras");

let meret = 3;

init();

export function init() {
  let txt = palyaOsszeallit(meret);
  megjelenit(txt, articleELEM);
  let db = hagyLekapcsolva(txt);
  megjelenit(
    `<p>Kapcsold le a lehető<br> legtöbb lámpát!(Legyen az összes zöld!)<br>A lekapcsolt lámpák száma:<br><span id="lekapcsoltakSz">${db}</span></p>`,
    asideLeirasELEM
  );
}
