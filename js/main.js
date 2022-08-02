import {
  formatNumber,
  getCurrentTime,
  downloadResults,
  reproduceSound,
  addClasses,
  removeClasses,
} from "./utility.js";

const teams = [
  {
    name: "red",
    text: "white-text",
  },
  {
    name: "yellow",
    text: "black-text",
  },
  {
    name: "blue",
    text: "white-text",
  },
  {
    name: "purple",
    text: "white-text",
  },
  {
    name: "green",
    text: "white-text",
  },
  {
    name: "orange",
    text: "white-text",
  },
  {
    name: "pink",
    text: "white-text",
  },
  {
    name: "white",
    text: "black-text",
  },
  {
    name: "black",
    text: "white-text",
  },
];
let mainContainer = document.getElementsByClassName("main-container")[0];
let leftSide = Array.from(document.getElementsByClassName("left-side"));
let rightSide = Array.from(document.getElementsByClassName("right-side"));
let scores = Array.from(document.getElementsByClassName("score"));
let timer;
let jsonScores = {
  teams: [
    {
      color: "red",
      score: 0,
    },
    {
      color: "yellow",
      score: 0,
    },
    {
      color: "blue",
      score: 0,
    },
    {
      color: "purple",
      score: 0,
    },
    {
      color: "green",
      score: 0,
    },
    {
      color: "orange",
      score: 0,
    },
    {
      color: "pink",
      score: 0,
    },
    {
      color: "white",
      score: 0,
    },
    {
      color: "black",
      score: 0,
    },
  ],
};

function updateJSON(currentLocalStorage, currentIteration, operator) {
  let currentData = JSON.parse(currentLocalStorage);
  if (operator === "+") {
    currentData.teams[currentIteration].score++;
  } else {
    // Prevents negative numbers in score
    if (currentData.teams[currentIteration].score != 0) {
      currentData.teams[currentIteration].score--;
    }
  }
  // Upload local storage values
  localStorage.setItem("teams", JSON.stringify(currentData));
}

// This is utilised to implement dynamic width and height to teams
function resizeTeams(teams, total) {
  // Remove all classes from current teams
  removeClasses(teams, 0, teams.length - 1, "width", "height");
  switch (total) {
    // If there is one team
    case 1:
      addClasses(teams, 0, 0, "max-width", "max-height");
      break;
    // If there are two teams
    case 2:
      addClasses(teams, 0, 1, "half-width", "max-height");
      break;
    // If there are three teams
    case 3:
      addClasses(teams, 0, 2, "width-by-three", "max-height");
      break;
    // If there are four teams
    case 4:
      addClasses(teams, 0, 3, "half-width", "half-height");
      break;
    // If there are five teams
    case 5:
      // In this case, there two different layouts inside
      addClasses(teams, 0, 2, "width-by-three", "half-height");
      addClasses(teams, 3, 4, "half-width", "half-height");
      break;
    // If there are six teams
    case 6:
      addClasses(teams, 0, 5, "width-by-three", "half-height");
      break;
    // If there are seven teams
    case 7:
      // In this case, there two different layouts inside
      addClasses(teams, 0, 2, "width-by-three", "height-by-three");
      addClasses(teams, 3, 6, "half-width", "height-by-three");
      break;
    // If there are eight teams
    case 8:
      addClasses(teams, 0, 5, "width-by-three", "height-by-three");
      addClasses(teams, 6, 7, "half-width", "height-by-three");
      break;
    // If there are nine teams
    default:
      addClasses(teams, 0, 8, "width-by-three", "height-by-three");
      break;
  }
}

function startTimer() {
  // Clean previous timer if were one.
  clearInterval(timer);
  timer = setInterval(() => {
    calculateTime();
    if (
      parseInt(localStorage.getItem("minutes")) <= 0 &&
      localStorage.getItem("seconds") <= 0
    ) {
      // Stop the timer, download file, reproduce sound, and refill local data with default values
      clearInterval(timer);
      downloadResults(
        JSON.stringify(JSON.parse(localStorage.getItem("teams")), null, 2),
        getCurrentTime() + ".json"
      );
      reproduceSound("../audio/finish.mp3");
      // This prevent weird values if reset when timer has ended
      localStorage.setItem("minutes", 0);
      localStorage.setItem("seconds", 0);
      localStorage.setItem("timer", false);
    }
  }, 1000);
}

function calculateTime() {
  // Decrease one second in timer
  localStorage.setItem(
    "seconds",
    parseInt(localStorage.getItem("seconds")) - 1
  );

  if (localStorage.getItem("seconds") < 0) {
    localStorage.setItem("seconds", 59);
    localStorage.setItem(
      "minutes",
      parseInt(localStorage.getItem("minutes")) - 1
    );
    if (localStorage.getItem("minutes") < 0) {
      localStorage.setItem("minutes", 59);
    }
  }

  // Refill HTML container
  updateTimer();
}

function updateTimer() {
  document.getElementById("timer").innerText =
    formatNumber(localStorage.getItem("minutes")) +
    ":" +
    formatNumber(localStorage.getItem("seconds"));
}

// Fill default values to empty local data and containers
window.onload = () => {
  if (!localStorage.getItem("teams")) {
    localStorage.setItem("teams", JSON.stringify(jsonScores));
  }
  scores.forEach((e, i) => {
    e.innerText = JSON.parse(localStorage.getItem("teams")).teams[i].score;
  });
  if (!localStorage.getItem("minutes")) {
    localStorage.setItem("minutes", 0);
  }
  if (!localStorage.getItem("seconds")) {
    localStorage.setItem("seconds", 0);
  }
  if (localStorage.getItem("timer") === "true") {
    startTimer();
  }
  updateTimer();
};

// Add team
document.getElementById("add").addEventListener("click", () => {
  if (mainContainer.children.length < 9) {
    let x = mainContainer.children[0].cloneNode(true);
    x.classList.remove("red");
    x.classList.remove("white-text");
    x.children[0].setAttribute(
      "data-value",
      teams[mainContainer.children.length].name
    );
    x.classList.add(teams[mainContainer.children.length].name);
    x.classList.add(teams[mainContainer.children.length].text);
    mainContainer.appendChild(x);
    x.children[0].children[0].addEventListener("click", () => {
      updateJSON(
        localStorage.getItem("teams"),
        mainContainer.children.length - 1,
        "-"
      );
      x.children[1].innerText = JSON.parse(localStorage.getItem("teams")).teams[
        mainContainer.children.length - 1
      ].score;
    });
    x.children[0].children[1].addEventListener("click", () => {
      updateJSON(
        localStorage.getItem("teams"),
        mainContainer.children.length - 1,
        "+"
      );
      x.children[1].innerText = JSON.parse(localStorage.getItem("teams")).teams[
        mainContainer.children.length - 1
      ].score;
    });
  }
  resizeTeams(mainContainer.children, mainContainer.children.length);
});

// Delete team
document.getElementById("delete").addEventListener("click", () => {
  if (mainContainer.children.length > 1) {
    mainContainer.children[mainContainer.children.length - 1].remove(
      mainContainer.children[mainContainer.children.length - 1].lastElementChild
    );
    resizeTeams(mainContainer.children, mainContainer.children.length);
  }
});

// Increase score of selected team
rightSide.forEach((e, i) => {
  e.addEventListener("click", (x) => {
    updateJSON(localStorage.getItem("teams"), i, "+");
    scores[i].innerText = JSON.parse(localStorage.getItem("teams")).teams[
      i
    ].score;
  });
});

// Decrease score of selected team
leftSide.forEach((e, i) => {
  e.addEventListener("click", (x) => {
    updateJSON(localStorage.getItem("teams"), i, "-");
    scores[i].innerText = JSON.parse(localStorage.getItem("teams")).teams[
      i
    ].score;
  });
});

// The code will repeat each one second until all values are equal to zero
document.getElementById("play").addEventListener("click", () => {
  // Activate timer
  localStorage.setItem("timer", true);
  startTimer();
});

// Set timer to fifteen minutes and stop current timer if were one.
document.getElementById("fifteen-minutes").addEventListener("click", () => {
  localStorage.setItem("minutes", 15);
  localStorage.setItem("seconds", 0);
  localStorage.setItem("timer", false);
  clearInterval(timer);
  updateTimer();
});

// Set timer to twenty minutes and stop current timer if were one.
document.getElementById("twenty-minutes").addEventListener("click", () => {
  localStorage.setItem("minutes", 20);
  localStorage.setItem("seconds", 0);
  localStorage.setItem("timer", false);
  clearInterval(timer);
  updateTimer();
});

// Reset timer and scores
document.getElementById("reset").addEventListener("click", (e) => {
  localStorage.clear();
  window.location.reload();
});
