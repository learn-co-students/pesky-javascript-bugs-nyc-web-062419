var p = document.createElement("p")
p.textContent =
  "When you click the following buttons, the alert should match the number on the button."
document.body.appendChild(document.createElement("br"))
document.body.appendChild(p)
for (var i = 1; i <= 10; i++) {
  var button = document.createElement("button")
  button.textContent = "Button " + i
  document.body.appendChild(button)
  button.style = "ui button"
  button.onclick = function(e) {
    buttonClicked(e)
  }
}

function buttonClicked(e) {
  let buttonNum = e.target.innerText.split(" ")[1]
  alert(`Hello from button ${buttonNum}`)
}
