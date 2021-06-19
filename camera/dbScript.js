let req = indexedDB.open("Camera", 1);
let db;

req.addEventListener("success", function () {
  db = req.result;
});

req.addEventListener("upgradeneeded", function () {
  let accessToNotesDB = req.result;
  accessToNotesDB.createObjectStore("Gallery", { keyPath: "mId" });
});

req.addEventListener("error", function () {
  console.log("error");
});

//script.js
function addMedia(media, type) {
  if (!db) return;
  let obj = { mId: Date.now(), media, type };

  let tx = db.transaction("Gallery", "readwrite");
  let gallery = tx.objectStore("Gallery");
  gallery.add(obj);
}

//gallery.html
function viewMedia() {
  let tx = db.transaction("Gallery", "readonly");
  let gallery = tx.objectStore("Gallery");
  let cReq = gallery.openCursor();

  cReq.addEventListener("success", function () {
    let cursor = cReq.result;
    if (cursor) {
      let mo = cursor.value;

      //dom ke through media container banao
      if(mo.type=="video"){
        //I have to render a video tag
      }else{
        //I have to render a image tag
      }

      cursor.continue();
    }
  });
}
