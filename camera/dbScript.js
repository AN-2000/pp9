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

function addMedia(media, type) {
  if (!db) return;
  let obj = { mId: Date.now(), media, type };


  let tx = db.transaction("Gallery", "readwrite");
  let gallery = tx.objectStore("Gallery");
  gallery.add(obj);
}
