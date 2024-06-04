import {} from "./jatek.js";
import { init } from "./main.js";
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
        txt += `<span id="${sor},${oszlop}" class="felkapcsolt"></span>`;
      } else {
        txt += `<span id="${sor},${oszlop}" class="lekapcsolt"></span>`;
      }
    }
    txt += "</div>";
  }
  txt += "</div>";
  return txt;
}
export function hagyLekapcsolva(txt) {
  let db = txt.match(/lekapcsolt/g).length;
  console.log(db);
  return db;
}

export function kapcsolas() {
  const lampaELEM = $("article span") 
  lampaELEM.on("click",function(event) {
    let index = event.target.id;
    console.log(index);
    if (index.includes("felkapcsolt")) {
      index.replace("felkapcsolt","lekapcsolt")
    }
    if (index.includes("lekapcsolt")) {
      index.replace("lekapcsolt","felkapcsolt")
    }
  })
  init()
}
