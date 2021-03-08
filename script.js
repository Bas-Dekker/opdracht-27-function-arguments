const paintWall1 = function () {
  console.log("The wall has been painted red");
};

paintWall1();

const paintWall2 = function (color) {
  console.log("The wall has been painted ${color}");
};

paintWall2("green");
paintWall2("blue");

const paintWall3 = function (whichWall, color) {
  console.log("The ${whichWall} has been painted ${color}");
};

paintWall3("south-east", "orange");
paintWall3("north", "yellow");
