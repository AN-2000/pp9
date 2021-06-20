let body = document.querySelector("body");
body.spellcheck = false;

let menuBarPtags = document.querySelectorAll(".menu-bar p");

for (let i = 0; i < menuBarPtags.length; i++) {
  menuBarPtags[i].addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("menu-bar-option-selected")) {
      e.currentTarget.classList.remove("menu-bar-option-selected");
    } else {

        for(let j = 0;j<menuBarPtags.length;j++){
            if(menuBarPtags[j].classList.contains("menu-bar-option-selected"))
            menuBarPtags[j].classList.remove("menu-bar-option-selected")
        }

      e.currentTarget.classList.add("menu-bar-option-selected");
    }
  });
}
