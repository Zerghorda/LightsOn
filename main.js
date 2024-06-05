import {
  megjelenit,
  palyaOsszeallit,
  hagyLekapcsolva,
  kapcsolas,
} from "./fugvenyek.js";
const articleELEM = $("article");
const asideLeirasELEM = $("#leiras");

let meret = 3;
const PALYA = [];
//function listaTolt(PALYA) {
// let txt = palyaOsszeallit(meret);
//for (let index = 0; index < meret * meret; index++) {
//if (txt.match("lekapcsolt")) {

//}
//}
//}

init();

export function init() {
  let txt = palyaOsszeallit(meret);
  megjelenit(txt, articleELEM);
  kapcsolas()
  let db = hagyLekapcsolva(txt);
  megjelenit(
    `<p>Kapcsold le a lehető<br> legtöbb lámpát!(Legyen az összes zöld!)<br>A lekapcsolt lámpák száma:<br><span id="lekapcsoltakSz">${db}</span></p>`,
    asideLeirasELEM
  );
}
