let items = document.getElementsByClassName("list");
let rightBox = document.getElementById("drop-target");
let leftBox = document.getElementById("draggable-list");
let reset = document.getElementById("reset-btn");

for (const item of items) {
  item.addEventListener("dragstart", function (e) {
    let select = e.target;

    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", function () {
      rightBox.appendChild(select);
      select = null;
    });

    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    leftBox.addEventListener("drop", function () {
      leftBox.appendChild(select);
      select = null;
    });
  });
}

reset.addEventListener("click", function () {
  while (rightBox.firstChild) {
    rightBox.removeChild(rightBox.firstChild);
  }
});

