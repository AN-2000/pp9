let req = indexedDB.open("Camera", 1);
let body = document.querySelector("body");
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

function deleteMedia(id) {
  if (!db) return;

  let tx = db.transaction("Gallery", "readwrite");
  let gallery = tx.objectStore("Gallery");
//when we set id as an attribute to delete btn it becomes a string but we have stored the id as a number in db so we have to typecast.
  gallery.delete(Number(id));
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
      let div = document.createElement("div");
      div.classList.add("media-container");
      let linkForDownloadBtn = "";
      if (mo.type == "video") {
        let url = window.URL.createObjectURL(cursor.value.media);
        linkForDownloadBtn = url;
        div.innerHTML = `<div class="media">
          <video src="${url}" autoplay loop controls muted></video>
      </div>
      <button class="download">Download</button>
      <button class="delete" data-id="${mo.mId}" >Delete</button>`;
        //I have to render a video tag
      } else {
        linkForDownloadBtn = cursor.value.media;
        div.innerHTML = `<div class="media">
          <img src="${cursor.value.media}"/>
      </div>
      <button class="download">Download</button>
      <button class="delete" data-id="${mo.mId}">Delete</button>`;
        //I have to render a image tag
      }

      let downloadBtn = div.querySelector(".download");
      downloadBtn.addEventListener("click", function () {
        let a = document.createElement("a");
        a.href = linkForDownloadBtn;

        if (mo.type == "video") {
          a.download = "video.mp4";
        } else {
          a.download = "img.png";
        }
        a.click();
        a.remove();
      });

      let deleteBtn = div.querySelector(".delete")
      deleteBtn.addEventListener("click",function(e){
          //removing from db
         let id = e.currentTarget.getAttribute("data-id")
         deleteMedia(id)

         //removing from ui
         e.currentTarget.parentElement.remove()
      })

      body.append(div);
      cursor.continue();
    }
  });
}


