// JavaScript a kártyák feltöltéséhez
document.addEventListener("DOMContentLoaded", function () {
  // Az adatokat tartalmazó tömb
  let data;

  // XMLHttpRequest használata
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      populateCards(data);
    }
  };
  xhr.open("GET", "./data.json", true);
  xhr.send();

  // Vagy a fetch API használata
  // fetch('./path/to/data.json')
  //   .then(response => response.json())
  //   .then(data => populateCards(data));

  function populateCards(data) {
    const totalNumber = document.querySelector('.totalNumber');
    const resultDescription = document.querySelector('.result h2');
    const resultText = document.querySelector('.text');
    const reactionCard = document.querySelector('.reaction p');
    const memoryCard = document.querySelector('.memory p');
    const verbalCard = document.querySelector('.verbal p');
    const visualCard = document.querySelector('.visual p');

    // Feltölti az adatokat az eredmény kártyára
    totalNumber.innerHTML = `${data[0].score} <span>of 100</span>`;
    resultDescription.textContent = "Great";
    resultText.textContent = "You scored higher than 65% of the people who have taken these tests.";

    // Feltölti az adatokat a kategóriák kártyáira
    reactionCard.innerHTML = `${data[0].score} <span>/ 100</span>`;
    memoryCard.innerHTML = `${data[1].score} <span>/ 100</span>`;
    verbalCard.innerHTML = `${data[2].score} <span>/ 100</span>`;
    visualCard.innerHTML = `${data[3].score} <span>/ 100</span>`;
  }
});
