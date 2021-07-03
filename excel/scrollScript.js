grid.addEventListener("scroll", function (e) {

  let currDistanceFromTop = e.currentTarget.scrollTop; //vertical
  let currDistanceFromleft = e.currentTarget.scrollLeft;

  columnTags.style.transform = `translateX(-${currDistanceFromleft}px)`;

  rowNumbers.style.transform = `translateY(-${currDistanceFromTop}px)`;
  
});
