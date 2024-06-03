import { megjelenit, palyaOsszeallit,hagyLekapcsolva } from "./fugvenyek.js";
const articleELEM = $("article");
const asideELEM = $("aside");

const PALYA = [];
let meret = 3;
let txt = palyaOsszeallit(meret);
megjelenit(txt, articleELEM);
let db = hagyLekapcsolva(txt);

