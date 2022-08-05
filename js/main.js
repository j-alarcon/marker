import {
  formatNumber,
  getCurrentTime,
  downloadResults,
  reproduceSound,
  addClasses,
  removeClasses,
  createHTML,
  appendChilds,
  deleteLastItemJSON,
  addItemToJSON,
  changeImage,
} from "./utility.js";

const teams = [
  {
    name: "red",
    text: "white",
  },
  {
    name: "yellow",
    text: "black",
  },
  {
    name: "blue",
    text: "white",
  },
  {
    name: "purple",
    text: "white",
  },
  {
    name: "green",
    text: "white",
  },
  {
    name: "orange",
    text: "white",
  },
  {
    name: "pink",
    text: "white",
  },
  {
    name: "white",
    text: "black",
  },
  {
    name: "black",
    text: "white",
  },
];
let mainContainer = document.getElementsByClassName("main-container")[0];
let timer;
let jsonScores = {
  teams: [
    {
      color: "red",
      text: "white",
      score: 0,
    },
  ],
};

function updateJSON(currentLocalStorage, currentIteration, operator) {
  let currentData = JSON.parse(currentLocalStorage);
  if (operator === "+") {
    if (currentData.teams[currentIteration].score < 999) {
      currentData.teams[currentIteration].score++;
    }
  } else {
    // Prevents negative numbers in score
    if (currentData.teams[currentIteration].score != 0) {
      currentData.teams[currentIteration].score--;
    }
  }
  // Upload local storage values
  localStorage.setItem("teams", JSON.stringify(currentData));
}

function createTeam(color, text, currentTeam) {
  // Need to create them separately to add events
  let modifiers = [
    createHTML("div", null, "left-side", "max-height"),
    createHTML("div", null, "right-side", "max-height"),
  ];

  // Create HTML containers with styles
  mainContainer.appendChild(
    appendChilds(
      createHTML(
        "div",
        null,
        "max-width",
        "max-height",
        "medium-fontsize",
        "relative",
        "flex",
        "justify-center",
        "align-center",
        text,
        color
      ),
      appendChilds(
        createHTML(
          "div",
          color,
          "change-scores",
          "flex",
          "absolute",
          "max-width",
          "max-height",
          "invisible"
        ),
        ...modifiers
      ),
      createHTML("span", null, "score")
    )
  );
  // Increase or decrease score of selected team
  modifiers.forEach((e, i) => {
    e.addEventListener("click", () => {
      if (i === 1) {
        updateJSON(localStorage.getItem("teams"), currentTeam, "+");
      } else {
        updateJSON(localStorage.getItem("teams"), currentTeam, "-");
      }
      modifiers[i].parentNode.parentNode.children[1].innerText = JSON.parse(
        localStorage.getItem("teams")
      ).teams[currentTeam].score;
    });
  });
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
      clearTimer();
    }
  }, 1000);
}

// Stop and reset the timer
function clearTimer() {
  localStorage.setItem("minutes", 0);
  localStorage.setItem("seconds", 0);
  localStorage.setItem("timer", false);
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
  // Load all teams storaged in local
  JSON.parse(localStorage.getItem("teams")).teams.forEach((e, i) => {
    createTeam(e.color, e.text + "-text", i);
    // Retrieve all scores from JSON file
    Array.from(document.getElementsByClassName("score")).forEach((e, i) => {
      e.innerText = JSON.parse(localStorage.getItem("teams")).teams[i].score;
    });
    resizeTeams(mainContainer.children, mainContainer.children.length);
  });
  if (!localStorage.getItem("minutes")) {
    localStorage.setItem("minutes", 0);
  }
  if (!localStorage.getItem("seconds")) {
    localStorage.setItem("seconds", 0);
  }
  if (localStorage.getItem("timer") === "true") {
    startTimer();
    changeImage(
      document.getElementById("player").children[0],
      "./img/icons/stop.svg",
      "Stop button"
    );
  }
  updateTimer();
};

// Add team
document.getElementById("add").addEventListener("click", () => {
  if (mainContainer.children.length < 9) {
    createTeam(
      teams[mainContainer.children.length].name,
      teams[mainContainer.children.length].text + "-text",
      mainContainer.children.length
    );
    // Fill new containers with a zero
    mainContainer.children[
      mainContainer.children.length - 1
    ].children[1].innerText = 0;
    // Add new item and update JSON file
    localStorage.setItem(
      "teams",
      addItemToJSON(
        localStorage.getItem("teams"),
        { color: teams[mainContainer.children.length - 1].name },
        { text: teams[mainContainer.children.length - 1].text },
        { score: 0 }
      )
    );
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
    // Delete last item and update JSON file
    localStorage.setItem(
      "teams",
      deleteLastItemJSON(localStorage.getItem("teams"))
    );
  }
});

// The code will repeat each one second until all values are equal to zero
document.getElementById("player").addEventListener("click", () => {
  if (
    localStorage.getItem("timer") === "false" &&
    (localStorage.getItem("minutes") != 0 ||
      localStorage.getItem("seconds") != 0)
  ) {
    // Activate timer
    localStorage.setItem("timer", true);
    startTimer();
    changeImage(
      document.getElementById("player").children[0],
      "./img/icons/stop.svg",
      "Stop button"
    );
  } else {
    // Stop timer
    clearInterval(timer);
    localStorage.setItem("timer", false);
    changeImage(
      document.getElementById("player").children[0],
      "./img/icons/play.svg",
      "Play button"
    );
  }
});

// Set timer to desired minutes and stop current timer if there wa one.
Array.from(document.getElementsByClassName("button-timer")).forEach((e) => {
  e.addEventListener("click", () => {
    localStorage.setItem(
      "minutes",
      String(e.innerText).substring(0, e.innerText.length - 1)
    );
    localStorage.setItem("seconds", 0);
    localStorage.setItem("timer", false);
    clearInterval(timer);
    updateTimer();
  });
});

// Reset timer and scores
document.getElementById("reset").addEventListener("click", (e) => {
  // Set all scores to zero
  let json = JSON.parse(localStorage.getItem("teams"));
  JSON.parse(localStorage.getItem("teams")).teams.forEach((e, i) => {
    json.teams[i].score = 0;
  });
  localStorage.setItem("teams", JSON.stringify(json));
  clearTimer();
  // Reload website
  window.location.reload();
});
