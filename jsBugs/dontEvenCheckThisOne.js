var p = document.createElement('p')
p.textContent =
  'When you click the following buttons, the alert should match the number on the button.'
document.body.appendChild(document.createElement('br'))
document.body.appendChild(p)
const buttonSpot = document.createElement('div')
buttonSpot.id = "democlass"
document.body.appendChild(buttonSpot)
for (var i = 1; i <= 10; i++) {
  let targetSpot = document.querySelector("#democlass")
  console.log(targetSpot)
  let button = document.createElement('button')
  button.textContent = 'Button ' + i
  targetSpot.appendChild(button)
  button.style = 'ui button'
  button.classList.add("fuckingButton")
  button.id = `${i}`
}

buttonSpot.addEventListener("click", function(e){
  if (e.target.className === "fuckingButton"){
    alert(`Hello from button ${e.target.id}!`)
  }
})
