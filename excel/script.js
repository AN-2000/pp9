let body = document.querySelector("body");
body.spellcheck = false;

let columnTags = document.querySelector(".column-tags");
let rowNumbers = document.querySelector(".row-numbers");

let formulaSelectCell = document.querySelector("#select-cell");

let oldCell;

let grid = document.querySelector(".grid");

let menuBarPtags = document.querySelectorAll(".menu-bar p");

let dataObj = {};

for (let i = 0; i < menuBarPtags.length; i++) {
  menuBarPtags[i].addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("menu-bar-option-selected")) {
      e.currentTarget.classList.remove("menu-bar-option-selected");
    } else {
      for (let j = 0; j < menuBarPtags.length; j++) {
        if (menuBarPtags[j].classList.contains("menu-bar-option-selected"))
          menuBarPtags[j].classList.remove("menu-bar-option-selected");
      }

      e.currentTarget.classList.add("menu-bar-option-selected");
    }
  });
}

for (let i = 0; i < 26; i++) {
  let div = document.createElement("div");
  div.classList.add("column-tag-cell");
  div.innerText = String.fromCharCode(65 + i);
  columnTags.append(div);
}

for (let i = 1; i <= 100; i++) {
  let div = document.createElement("div");
  div.classList.add("row-number-cell");
  div.innerText = i;
  rowNumbers.append(div);
}

for (let j = 1; j <= 100; j++) {
  let row = document.createElement("div");
  row.classList.add("row");

  for (let i = 0; i < 26; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    let address = String.fromCharCode(i + 65) + j;
    cell.setAttribute("data-address", address);

    dataObj[address] = {
      value: "",
      formula: "",
      upstream: [],
      downstream: [],
    };

    cell.addEventListener("click", function (e) {
      //check kro koi old cell hai kya pehli se selected
      if (oldCell) {
        // agr han to use deselect kro class remove krke
        oldCell.classList.remove("grid-selected-cell");
      }
      //jis cell pr click kra use select kro class add krke
      e.currentTarget.classList.add("grid-selected-cell");

      let cellAddress = e.currentTarget.getAttribute("data-address");

      formulaSelectCell.value = cellAddress;

      //and ab jo naya cell select hogya use save krdo old cell wali variable taki next time agr click ho kisi nye cell pr to ise deselect kr pai
      oldCell = e.currentTarget;
    });

    cell.addEventListener("input", function (e) {
      console.log(e.currentTarget.innerText);
      let address = e.currentTarget.getAttribute("data-address");
      dataObj[address].value = Number(e.currentTarget.innerText);

      dataObj[address].formula = "";

      //upstream clear krni hai

      let currCellUpstream = dataObj[address].upstream;

      for (let i = 0; i < currCellUpstream.length; i++) {
        removeFromUpstream(address, currCellUpstream[i]);
      }

      dataObj[address].upstream = [];
      //downstream ke cells ko update krna hai

      let currCellDownstream = dataObj[address].downstream;

      for (let i = 0; i < currCellDownstream.length; i++) {
        updateDownstreamElements(currCellDownstream[i]);
      }

      console.log(dataObj[address]);
    });

    cell.contentEditable = true;
    row.append(cell);
  }
  grid.append(row);
}

function removeFromUpstream(dependent, onWhichItIsDepending) {
  let newDownstream = [];

  let oldDownstream = dataObj[onWhichItIsDepending].downstream;
  [C1, Z2];

  for (let i = 0; i < oldDownstream.length; i++) {
    if (oldDownstream[i] != dependent) newDownstream.push(oldDownstream[i]);
  }
  dataObj[onWhichItIsDepending].downstream = newDownstream;
}

function updateDownstreamElements(elementAddress) {
  //1- jis element ko update kr rhe hai unki upstream elements ki current value leao
  //unki upstream ke elements ka address use krke dataObj se unki value lao 
  //unhe as key value pair store krdo valObj naam ke obj me
  let valObj = {};

  let currCellUpstream = dataObj[elementAddress].upstream; 

  for (let i = 0; i < currCellUpstream.length; i++) {
    let upstreamCellAddress = currCellUpstream[i]; 
    let upstreaCellValue = dataObj[upstreamCellAddress].value; 

    valObj[upstreamCellAddress] = upstreaCellValue;

  }

  //2- jis element ko update kr rhe hai uska formula leao
  let currFormula = dataObj[elementAddress].formula;
  //formula ko space ke basis pr split maro
  let forumlaArr = currFormula.split(" ");
  //split marne ke baad jo array mili uspr loop ara and formula me jo variable h(cells) unko unki value se replace krdo using valObj
  for (let j = 0; j < forumlaArr.length; j++) {
    if (valObj[forumlaArr[i]]) {
      forumlaArr[i] = valObj[forumlaArr[i]];
    }
  }


  //3- Create krlo wapis formula from the array by joining it 
  currFormula = forumlaArr.join(" ");

  //4- evaluate the new value using eval function 
  let newValue = eval(currFormula);


  //update the cell(jispr function call hua) in dataObj
  dataObj[elementAddress].value = newValue;

  //5- Ui pr update krdo new value 
  let cellOnUI = document.querySelector(`[data-address=${elementAddress}]`);
  cellOnUI.innerText = newValue;

  //6- Downstream leke ao jis element ko update kra just abhi kuki uspr bhi kuch element depend kr sakte hai
  //unko bhi update krna padega
  let currCellDownstream = dataObj[elementAddress].downstream;

  //check kro ki downstream me elements hai kya agr han to un sab pr yehi function call krdo jise wo bhi update hojai with new value 
  if (currCellDownstream.length > 0) {
    for (let k = 0; k < currCellDownstream.length; k++) {
      updateDownstreamElements(currCellDownstream[k]);
    }
  }
}
