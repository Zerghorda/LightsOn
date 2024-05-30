import { meret } from "./jatek.js";
import { megjelenit, palyaOsszeallit } from "./fugvenyek.js";
const articleELEM = $("article");
const asideELEM = $("aside");
const PALYA = []
init(PALYA)
megjelenit(txt, articleELEM);
export function init(lista) {
    let txt =  palyaOsszeallit(meret);
    megjelenit(txt, $("article"));
  
    kosarbaTesz();
  
  }