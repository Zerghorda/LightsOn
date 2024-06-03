import {} from "./jatek.js";
export function megjelenit(txt, element) {
  element.html(txt);
}
export function palyaOsszeallit(meret) {
  let txt = "";
  txt += '<div class="row">';
  for (let sor = 0; sor < meret; sor++) {
    txt += '<div clas="col-lg-6">';
    for (let oszlop = 0; oszlop < meret; oszlop++) {
      let felVLe = Math.floor(Math.random() * 2);
      if (felVLe === 1) {
        txt += '<span class="felkapcsolt"></span>';
      } else {
        txt += '<span class="lekapcsolt"></span>';
      }
    }
    txt += "</div>";
  }
  txt += "</div>";
  return txt;
}
export function hagyLekapcsolva(txt) {
  let db = 0;
  let i = 0;
  return db;
}
export function kapcsolas() {}
