

window.onload = function () {

  var allHearts = document.querySelectorAll(".fav");

  var heartCount = document.querySelector(".heart span");

  
  var count = 0;

  
  for (var i = 0; i < allHearts.length; i++) {

    allHearts[i].addEventListener("click", function () {

     
      if (this.textContent === "♡") {
        this.textContent = "❤️"; 
        count = count + 1;         
        heartCount.textContent = count; 
      }

    });
  }

};



/*  caling ar jonno alart box hobe  */

// Surute coin set kora holo
let coins = 100;

// Call button gulo select kora holo
let callButtons = document.querySelectorAll('.call');

// Coin show korar jaiga select kora holo
let coinBox = document.querySelector('.coin span');

// Call history box select kora holo
let historyBox = document.querySelector('.history');

// Clear button select kora holo
let clearButton = document.querySelector('.clear');

// Prottek call button er jonno alada event
for (let i = 0; i < callButtons.length; i++) {
  let button = callButtons[i];

  button.addEventListener('click', function () {

    // Button ta je card er vitore ache, seta ber kora holo
    let card = button.closest('.card');

    // Service name and number ber kora holo
    let name = card.querySelector('h3').innerText;
    let number = card.querySelector('h2').innerText;

    // Coin check
    if (coins < 20) {
      alert("Apnar kache sufficient coin nai!");
      return;
    }

    // Coin komano holo
    coins = coins - 20;
    coinBox.innerText = coins;

    // Alert dekhano holo
    alert("Calling " + name + " at " + number);

    // Current time ber kora holo
    let now = new Date();
    let time = now.toLocaleTimeString(); // shudhu time

    // Call history er notun line toiri kora holo
    let newHistory = document.createElement('div');
    newHistory.classList.add('history-item');

    // Duto part: name + number (left), time (right)
    newHistory.innerHTML = `
      <span>${name} - ${number}</span>
      <span class="time">${time}</span>
    `;

    // Call history te add kora holo
    historyBox.appendChild(newHistory);
  });
}

// Clear button e click hole sob history remove
clearButton.addEventListener('click', function () {
  let allHistory = document.querySelectorAll('.history-item');

  for (let i = 0; i < allHistory.length; i++) {
    allHistory[i].remove();
  }
});


var copyCount = 0;

var copyButtons = document.querySelectorAll(".card .actions button:first-child");

for (var i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener("click", function() {
    var card = this.closest(".card");
    var number = card.querySelector("h2").innerText;

    navigator.clipboard.writeText(number).then(function() {
      copyCount++;
      alert("Hotline number copied!");

      var headerCopyBtn = document.querySelector(".copy-btn");
      headerCopyBtn.textContent = copyCount + " Copy";
    }).catch(function() {
      alert("Failed to copy!");
    });
  });
}