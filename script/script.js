// Grab fact div and it's content
let fact = document.querySelector("#fact");
let factOutput = document.querySelector("#factOutput");

// Grab input element
let numberInput = document.querySelector("#numInput");

// Add event to input
numberInput.addEventListener("input", displayFactFetch);

// Fetching through AJAX
/*
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
}   */

// Fetching through Fetch API
function displayFactFetch() {
  let number = numberInput.value;

  if (number != "") {
    fetch("http://numbersapi.com/" + number)
      .then(response => response.text())
      .then(data => {
        fact.style.display = "block";
        factOutput.innerHTML = data;
      })
      .catch(err => console.log(err));
  } else {
    fact.style.display = "none";
  }
}
