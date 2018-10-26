let cells = 1320
//44 per row


document.addEventListener('DOMContentLoaded', function(){

var selectedColor = "white"
let board = document.querySelector(".board")

for (let i = 0; i < cells; i++){
  let cell = document.createElement("div")
  cell.className += `cell${i}`
  cell.style.height ="20px"
  cell.style.width ="20px"
  cell.style.float = "left"
  cell.style.border = "solid black 1px"

  board.appendChild(cell)

  document.querySelector(".board").addEventListener("click", function () {
    cell.style.backgroundColor = selectedColor
    board.appendChild(cell)
  })
}

  document.getElementById("red").addEventListener("click", function () {
  selectedColor = ("red")
  })

  document.getElementById("blue").addEventListener("click", function () {
  selectedColor = ("blue")
  })

  document.getElementById("yellow").addEventListener("click", function () {
  selectedColor = ("yellow")
  })


})
