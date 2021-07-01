let body = document.querySelector("body");
body.spellcheck = false;

let columnTags = document.querySelector(".column-tags");
let rowNumbers = document.querySelector(".row-numbers");

let formulaSelectCell = document.querySelector("#select-cell");

let forumlaInput = document.querySelector("#complete-formula");

let oldCell;

let grid = document.querySelector(".grid");

let menuBarPtags = document.querySelectorAll(".menu-bar p");

let fileOptions = menuBarPtags[0];

let dataObj = {};

fileOptions.addEventListener("click", function (e) {
  if (e.currentTarget.classList.length == 0) {
    e.currentTarget.innerHTML = `File
    <span>
     <span>Clear</span>
     <span>Open</span>
     <span>Save</span>
    </span>`;

    let allFileOptions = e.currentTarget.querySelectorAll("span>span");

    //clear
    allFileOptions[0].addEventListener("click", function () {
      let allCells = document.querySelectorAll(".cell");
      for (let i = 0; i < allCells.length; i++) {
        allCells[i].innerText = "";
        let cellAdd = allCells[i].getAttribute("data-address");
        console.log(cellAdd);
        dataObj[cellAdd] = {
          value: "",
          formula: "",
          upstream: [],
          downstream: [],
          fontSize: 10,
          fontFamily: "Arial",
          fontWeight: "normal",
          color: "black",
          backgroundColor: "white",
          underline: "none",
          italics: "normal",
          textAlign: "left",
        };
      }
    });

    //open
    allFileOptions[1].addEventListener("click", function () {
      //1 - Fetch dataObj from localstorage
      //2 - replace current dataObj with fetched obj
      dataObj = JSON.parse(localStorage.getItem("sheet"));

      //3 - Populate UI with this data

      for (let j = 1; j <= 100; j++) {
        for (let i = 0; i < 26; i++) {
          let address = String.fromCharCode(i + 65) + j;
          let cellObj = dataObj[address];
          let cellOnUi = document.querySelector(`[data-address=${address}]`);
          cellOnUi.innerText = cellObj.value;
          cellOnUi.style.backgroundColor = cellObj.backgroundColor;
          //same kaam css styling kelie kr sakta hu?
        }
      }
    });

    //save
    allFileOptions[2].addEventListener("click", function () {
      localStorage.setItem("sheet", JSON.stringify(dataObj));
    });
  } else {
    e.currentTarget.innerHTML = `File`;
  }
});

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
      fontSize: 10,
      fontFamily: "Arial",
      fontWeight: "normal",
      color: "black",
      backgroundColor: "white",
      underline: "none",
      italics: "normal",
      textAlign: "left",
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
    });

    cell.contentEditable = true;
    row.append(cell);
  }
  grid.append(row);
}

forumlaInput.addEventListener("change", function (e) {
  let formula = e.currentTarget.value; //"2 * A1"

  let selectedCellAddress = oldCell.getAttribute("data-address");

  dataObj[selectedCellAddress].formula = formula;

  let formulaArr = formula.split(" "); //["2","*","A1"]

  let elementsArray = [];

  for (let i = 0; i < formulaArr.length; i++) {
    if (
      formulaArr[i] != "+" &&
      formulaArr[i] != "-" &&
      formulaArr[i] != "*" &&
      formulaArr[i] != "/" &&
      isNaN(Number(formulaArr[i]))
    ) {
      elementsArray.push(formulaArr[i]);
    }
  }

  let oldUpstream = dataObj[selectedCellAddress].upstream;

  for (let k = 0; k < oldUpstream.length; k++) {
    removeFromUpstream(selectedCellAddress, oldUpstream[k]);
  }

  dataObj[selectedCellAddress].upstream = elementsArray;

  for (let j = 0; j < elementsArray.length; j++) {
    addToDownstream(selectedCellAddress, elementsArray[j]);
  }

  let valObj = {};

  for (let i = 0; i < elementsArray.length; i++) {
    let formulaDependency = elementsArray[i];

    valObj[formulaDependency] = dataObj[formulaDependency].value;
  }

  for (let j = 0; j < formulaArr.length; j++) {
    if (valObj[formulaArr[j]] != undefined) {
      formulaArr[j] = valObj[formulaArr[j]];
    }
  }

  formula = formulaArr.join(" ");
  let newValue = eval(formula);

  dataObj[selectedCellAddress].value = newValue;

  let selectedCellDownstream = dataObj[selectedCellAddress].downstream;

  for (let i = 0; i < selectedCellDownstream.length; i++) {
    updateDownstreamElements(selectedCellDownstream[i]);
  }

  oldCell.innerText = newValue;
  forumlaInput.value = "";
});

function addToDownstream(tobeAdded, inWhichWeAreAdding) {
  //get downstream of the cell in which we have to add
  let reqDownstream = dataObj[inWhichWeAreAdding].downstream;

  reqDownstream.push(tobeAdded);
}

function removeFromUpstream(dependent, onWhichItIsDepending) {
  let newDownstream = [];

  let oldDownstream = dataObj[onWhichItIsDepending].downstream;

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
  let formulaArr = currFormula.split(" ");
  //split marne ke baad jo array mili uspr loop ara and formula me jo variable h(cells) unko unki value se replace krdo using valObj
  for (let j = 0; j < formulaArr.length; j++) {
    if (valObj[formulaArr[j]]) {
      formulaArr[j] = valObj[formulaArr[j]];
    }
  }

  //3- Create krlo wapis formula from the array by joining it
  currFormula = formulaArr.join(" ");

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
