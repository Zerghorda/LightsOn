import { meret } from "./jatek.js";
export function megjelenit(txt, element) {
  element.html(txt);
}
export function palyaOsszeallit(meret) {
  palyaMeret = meret * meret;
  let txt = "";
  txt += '<div class="row">';
  for (let index = 0; index < palyaMeret; index++) {
    felVLe = Math.random() * 2;
    txt += '<div clas="card col-lg-6">';
    if (felVLe === 1) {
      txt += '<span class="felkapcsolt"></span>';
    }
    if (felVLe === 0) {
      txt += '<span class="lekapcsolt"></span>';
    }
  }
  txt += "</div>";
  return txt;
}
