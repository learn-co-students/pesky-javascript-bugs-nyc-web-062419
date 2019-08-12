var p = document.createElement("p");
p.textContent =
  "When you click the following buttons, the alert should match the number on the button.";
document.body.appendChild(document.createElement("br"));
document.body.appendChild(p);
for (var i = 1; i <= 10; i++) {
  const button = document.createElement("button");
  button.textContent = "Button " + i;
  button.dataset.num = i;
  console.log(i);
  button.onclick = function() {
    alert(`Hello from button ${button.dataset.num}`);
  };
  button.style = "ui button";
  document.body.appendChild(button);
}
