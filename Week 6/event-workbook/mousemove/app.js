document.getElementById("red-box").addEventListener("mousemove",function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("red-box").innerHTML = coor;
  })


  document.getElementById("red-box").addEventListener('mouseout',function clearCoor() {
    document.getElementById("red-box").innerHTML = "";
  })
  
