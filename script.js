

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

let coins = 100;


let callButtons = document.querySelectorAll('.call');


let coinBox = document.querySelector('.coin span');


let historyBox = document.querySelector('.history');


let clearButton = document.querySelector('.clear');


for (let i = 0; i < callButtons.length; i++) {
  let button = callButtons[i];

  button.addEventListener('click', function () {

    let card = button.closest('.card');

    
    let name = card.querySelector('h3').innerText;
    let number = card.querySelector('h2').innerText;


    if (coins < 20) {
      alert("Apnar kache sufficient coin nai!");
      return;
    }

    
    coins = coins - 20;
    coinBox.innerText = coins;

  
    alert("Calling " + name + " at " + number);

    
    let now = new Date();
    let time = now.toLocaleTimeString(); 

   
    let newHistory = document.createElement('div');
    newHistory.classList.add('history-item');

  
    newHistory.innerHTML = `
      <span>${name} - ${number}</span>
      <span class="time">${time}</span>
    `;


    historyBox.appendChild(newHistory);
  });
}


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