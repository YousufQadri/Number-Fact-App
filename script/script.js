// Grab fact div and it's content
let fact = document.querySelector("#fact");
let factOutput = document.querySelector("#factOutput");

// Grab input element
let numberInput = document.querySelector("#numInput");

// Add event to input
numberInput.addEventListener("input", displayFactAjax);

function displayFactAjax() {
  let number = numberInput.value;

  if (number != "") {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://numbersapi.com/" + number);

    xhr.onload = function() {
      if (this.status == 200) {
        fact.style.display = "block";
        factOutput.innerHTML = this.responseText;
      }
    };

    xhr.send();
  } else {
    fact.style.display = "none";
  }
}
