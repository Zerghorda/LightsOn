import {} from "./jatek.js";
import { init } from "./main.js";
export function megjelenit(txt, element) {
  element.html(txt);
}
export function palyaOsszeallit(meret) {
  let txt = "";
  txt += `<div class="row">`;
  for (let i = 0; i < meret * meret; i++) {
    txt += `<div class="col-4 lampa">`;
    let felVLe = Math.random();
    if  (felVLe >= 0.2) {
      txt += `<span  id="${i}"  class="felkapcsolt"></span>`;

    } else {
      txt += `<span  id="${i}"  class="lekapcsolt"></span>`;
    }
    txt += `</div>`;
  }
  txt += `</div>`;
  return txt;
}
export function hagyLekapcsolva(txt) {
  let db = txt.match(/lekapcsolt/g).length;
  return db;
}

export function kapcsolas() {
  const spanELEM = $(".lampa span");
  spanELEM.on("click", function (event) {
    let index = event.target.id;
    console.log(index);
    if (index.includes("felkapcsolt")) {
      index.replace("felkapcsolt", "lekapcsolt");
    }
    if (index.includes("lekapcsolt")) {
      index.replace("lekapcsolt", "felkapcsolt");
    }
  });
 
}
