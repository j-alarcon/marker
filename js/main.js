// https://github.com/j-alarcon
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
  disableHTML,
  activateHTML,
  updateJSON,
  findElement,
  validateInput,
} from "./utility.js";

// Register the service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js");
  });
}
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

let timerInputs = [
  {
    minutes: document.getElementById("f-minutes"),
    seconds: document.getElementById("f-seconds"),
  },
  {
    minutes: document.getElementById("s-minutes"),
    seconds: document.getElementById("s-seconds"),
  },
];

let modeInputs = [
  [document.getElementById("w-points"), document.getElementById("label-w")],
  [
    document.getElementById("t-points"),
    document.getElementById("label-t"),
    document.getElementById("t-message"),
    document.getElementById("label-msg"),
  ],
];

let modeCheckbox = Array.from(document.getElementsByClassName("mode"));

// JSON where options are storaged
let jsonOptions = {
  timers: [
    {
      minutes: 15,
      seconds: 0,
    },
    {
      minutes: 20,
      seconds: 0,
    },
  ],
  modes: [
    {
      status: false,
      points: 20,
    },
    {
      status: false,
      points: 7,
      message: "Milestone achieved!",
    },
  ],
  download: false,
};

// JSON where teams are storaged
let jsonScores = {
  teams: [
    {
      color: "red",
      text: "white",
      score: 0,
    },
  ],
};

// Set all points to zero
function resetScores(currentData) {
  currentData.teams.forEach((e) => {
    e.score = 0;
  });
  localStorage.setItem("teams", JSON.stringify(currentData));
}

function updatePoints(currentLocalStorage, currentIteration, operator) {
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
  // If both modes are activated, winner mode has priority
  if (modeCheckbox[0].checked) {
    checkWinner(
      JSON.parse(localStorage.getItem("options")).modes[0].points,
      currentData.teams[currentIteration].score,
      currentData.teams[currentIteration].color
    );
  }
  if (modeCheckbox[1].checked) {
    checkTotal(
      JSON.parse(localStorage.getItem("options")).modes[1].points,
      currentData.teams
    );
  }
}

// Check if one of the teams have the required points
function checkWinner(goal, currentScore, currentTeam) {
  if (currentScore >= localStorage.getItem("currentMaxScore")) {
    localStorage.setItem("currentMaxScore", currentScore);
  }
  // Local storage data is string so it needs a conversion to number
  if (Number(localStorage.getItem("currentMaxScore")) === Number(goal)) {
    // Team and background are both white and need a black border
    if (currentTeam === "white") {
      generateAlert(
        '<div class="' +
          currentTeam +
          " tiny-square tiny-border" +
          '"></div>&nbsp;<div class="title-option-fontsize">' +
          "&#10140;&nbsp;" +
          goal +
          "</div>",
        true,
        // Different shape in responsive sizes
        "small-alert"
      );
    } else {
      generateAlert(
        '<div class="' +
          currentTeam +
          " tiny-square" +
          '"></div>&nbsp;<div class="title-option-fontsize">' +
          "&#10140;&nbsp;" +
          goal +
          "</div>",
        true,
        "small-alert"
      );
    }
  }
  if (Number(localStorage.getItem("currentMaxScore")) >= Number(goal)) {
    localStorage.setItem("currentMaxScore", 0);
  }
}

function checkTotal(goal, teams) {
  let total = 0;
  teams.forEach((e) => {
    total += e.score;
  });
  if (total % goal === 0 && total != 0) {
    generateAlert(
      JSON.parse(localStorage.getItem("options")).modes[1].message,
      false,
      "alert"
    );
  }
}

function createTeam(color, text, currentTeam) {
  // Need to create them separately to add events
  let modifiers = [
    createHTML("div", null, null, null, "left-side", "max-height"),
    createHTML("div", null, null, null, "right-side", "max-height"),
  ];

  // Create HTML containers with styles
  mainContainer.appendChild(
    appendChilds(
      createHTML(
        "div",
        null,
        null,
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
          null,
          null,
          "change-scores",
          "flex",
          "absolute",
          "max-width",
          "max-height",
          "invisible"
        ),
        ...modifiers
      ),
      createHTML("span", null, null, null, "score")
    )
  );
  // Increase or decrease score of selected team
  modifiers.forEach((e, i) => {
    e.addEventListener("click", () => {
      try {
        if (i === 1) {
          updatePoints(localStorage.getItem("teams"), currentTeam, "+");
        } else {
          updatePoints(localStorage.getItem("teams"), currentTeam, "-");
        }
        modifiers[i].parentNode.parentNode.children[1].innerText = JSON.parse(
          localStorage.getItem("teams")
        ).teams[currentTeam].score;
      } catch (ex) {
        window.location.reload();
      }
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

async function generateAlert(message, isHTML, mainClass) {
  // Generate an alert according to received message
  let newAlert = createHTML(
    "div",
    null,
    message,
    isHTML,
    mainClass,
    "white",
    "flex",
    "justify-center",
    "align-center",
    "absolute"
  );

  // Add current alert to main container with the others
  let fatherContainer = document.getElementById("alert-container");
  fatherContainer.appendChild(newAlert);
  reproduceSound("./audio/alert.mp3");

  // This code will repeat until this is the only child of the container
  do {
    var alertPos = Array.from(
      document.getElementById("alert-container").children
    ).indexOf(newAlert);
    await new Promise((res) => setTimeout(res, Number.POSITIVE_INFINITY));
  } while (alertPos != 0);

  // Display alert on screen
  newAlert.style.bottom = "0";
  // Wait two seconds before disappearing alert
  await new Promise((res) => setTimeout(res, 2000));
  // Delete elements from the queue that are done
  newAlert.style.bottom = "-100%";
  // Wait six miliseconds before ending transition
  await new Promise((res) => setTimeout(res, 600));
  document.getElementById("alert-container").removeChild(newAlert);
}

// Storage new values for timer buttons and change texts
function fillTimerButtons(currentData) {
  for (let i = 0; i < timerInputs.length; i++) {
    for (let p in currentData.timers[i]) {
      // Add or remove red outlines to indicate user when info is wrong
      if (validateInput(timerInputs[i][p], 0, 99)) {
        currentData.timers[i][p] = timerInputs[i][p].value;
        timerInputs[i][p].classList.remove("error");
      } else {
        timerInputs[i][p].classList.add("error");
      }
    }
    // Change text of button or refresh if value was wrong
    Array.from(document.getElementsByClassName("button-timer"))[i].innerText =
      currentData.timers[i].minutes + "'";
  }
  localStorage.setItem("options", JSON.stringify(currentData));
}

// Storage new values for mode options
function fillModeOptions(currentData) {
  // Refresh JSON file with new values
  currentData.modes.forEach((e, i) => {
    // Add or remove red outlines to indicate user when info is wrong
    if (validateInput(findElement(modeInputs[i], "points"), 0, 999)) {
      e.points = findElement(modeInputs[i], "points").value;
      findElement(modeInputs[i], "points").classList.remove("error");
    } else {
      findElement(modeInputs[i], "points").classList.add("error");
    }

    // Fill custom message for total mode
    if (findElement(modeInputs[i], "message") != -1) {
      // Add or remove red outlines to indicate user when info is wrong
      if (String(findElement(modeInputs[i], "message").value).trim() != "") {
        currentData.modes[i].message = String(
          findElement(modeInputs[i], "message").value
        ).trim();
        findElement(modeInputs[i], "message").classList.remove("error");
      } else {
        findElement(modeInputs[i], "message").classList.add("error");
      }
    }
  });
  // Convert data in JSON and storage in local
  localStorage.setItem("options", JSON.stringify(currentData));
}

// Activate or deactivate special modes according with boolean
function changeStatusModes(inputs, options, currentPosition, activate) {
  if (activate) {
    removeClasses(inputs, 0, inputs.length - 1, "disabled");
    activateHTML(...inputs);
    localStorage.setItem(
      "options",
      updateJSON(options, "modes", currentPosition, "status", true)
    );
  } else {
    addClasses(inputs, 0, inputs.length - 1, "disabled");
    disableHTML(...inputs);
    localStorage.setItem(
      "options",
      updateJSON(options, "modes", currentPosition, "status", false)
    );
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
      // Stop the timer, download file, change play button, reproduce sound, and refill local data with default values
      clearInterval(timer);
      if (document.getElementById("download").checked) {
        downloadResults(
          JSON.stringify(JSON.parse(localStorage.getItem("teams")), null, 2),
          getCurrentTime() + ".json"
        );
      }
      changeImage(
        document.getElementById("player").children[0],
        "./img/icons/play.svg",
        "Play button"
      );
      reproduceSound("./audio/finish.mp3");
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
  if (!localStorage.getItem("options")) {
    localStorage.setItem("options", JSON.stringify(jsonOptions));
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
  // Load text of timer buttons
  Array.from(document.getElementsByClassName("button-timer")).forEach(
    (e, i) => {
      e.innerText =
        JSON.parse(localStorage.getItem("options")).timers[i].minutes + "'";
    }
  );
  // Load selected timers
  for (let i = 0; i < timerInputs.length; i++) {
    for (let p in JSON.parse(localStorage.getItem("options")).timers[i]) {
      timerInputs[i][p].value = JSON.parse(
        localStorage.getItem("options")
      ).timers[i][p];
    }
  }
  // Activate modes at refresh and load parameters
  JSON.parse(localStorage.getItem("options")).modes.forEach((e, i) => {
    if (e.status) {
      modeCheckbox[i].checked = true;
      removeClasses(modeInputs[i], 0, modeInputs[i].length - 1, "disabled");
      activateHTML(...modeInputs[i]);
    }
    // Load storaged points
    findElement(modeInputs[i], "points").value = e.points;
    // Load storaged message only if exists
    if (findElement(modeInputs[i], "message") != -1) {
      findElement(modeInputs[i], "message").value = e.message;
    }
  });
  if (!localStorage.getItem("currentMaxScore")) {
    localStorage.setItem("currentMaxScore", 1);
  }

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
  try {
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
  } catch (ex) {
    window.location.reload();
  }
});

// Delete team
document.getElementById("delete").addEventListener("click", () => {
  try {
    if (mainContainer.children.length > 1) {
      mainContainer.children[mainContainer.children.length - 1].remove(
        mainContainer.children[mainContainer.children.length - 1]
          .lastElementChild
      );
      resizeTeams(mainContainer.children, mainContainer.children.length);
      // Delete last item and update JSON file
      localStorage.setItem(
        "teams",
        deleteLastItemJSON(localStorage.getItem("teams"))
      );
    }
  } catch (ex) {
    window.location.reload();
  }
});

// The code will repeat each one second until all values are equal to zero
document.getElementById("player").addEventListener("click", () => {
  try {
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
  } catch (ex) {
    window.location.reload();
  }
});

// Deactive or activate modes according to selected checkbox
Array.from(document.getElementsByClassName("mode")).forEach((e, i) =>
  e.addEventListener("click", () => {
    try {
      if (e.checked) {
        changeStatusModes(
          modeInputs[i],
          localStorage.getItem("options"),
          i,
          true
        );
      } else {
        changeStatusModes(
          modeInputs[i],
          localStorage.getItem("options"),
          i,
          false
        );
      }
    } catch (ex) {
      window.location.reload();
    }
  })
);

// Deactivate or activate download option accordin to selected checkbox
document.getElementById("download").addEventListener("click", () => {
  try {
    if (document.getElementById("download").checked) {
      localStorage.setItem(
        "options",
        updateJSON(
          localStorage.getItem("options"),
          "download",
          null,
          null,
          true
        )
      );
    } else {
      localStorage.setItem(
        "options",
        updateJSON(
          localStorage.getItem("options"),
          "download",
          null,
          null,
          false
        )
      );
    }
  } catch (ex) {
    window.location.reload();
  }
});

// Change selected options on burger menu
document.getElementById("submit-changes").addEventListener("click", (e) => {
  // Don't send the form
  e.preventDefault();
  try {
    // Save options
    fillTimerButtons(JSON.parse(localStorage.getItem("options")));
    fillModeOptions(JSON.parse(localStorage.getItem("options")));
  } catch (ex) {
    window.location.reload();
  }
});

// Deactive modes when reset form
document.getElementById("form-burger").addEventListener("reset", () => {
  try {
    // Deactive modes
    Array.from(document.getElementsByClassName("mode")).forEach((e, i) => {
      changeStatusModes(
        modeInputs[i],
        localStorage.getItem("options"),
        i,
        false
      );
    });
    // Disable error outlines
    Array.from(document.getElementsByClassName("error")).forEach((e) => {
      e.classList.remove("error");
    });
  } catch (ex) {
    window.location.reload();
  }
});

// Set timer to desired minutes and stop current timer if there was one.
Array.from(document.getElementsByClassName("button-timer")).forEach((e, i) => {
  e.addEventListener("click", () => {
    try {
      localStorage.setItem(
        "minutes",
        JSON.parse(localStorage.getItem("options")).timers[i].minutes
      );
      localStorage.setItem(
        "seconds",
        JSON.parse(localStorage.getItem("options")).timers[i].seconds
      );
      localStorage.setItem("timer", false);
      changeImage(
        document.getElementById("player").children[0],
        "./img/icons/play.svg",
        "Play button"
      );
      clearInterval(timer);
      updateTimer();
    } catch (ex) {
      window.location.reload();
    }
  });
});

// Reset timer and scores
document.getElementById("reset").addEventListener("click", (e) => {
  try {
    resetScores(JSON.parse(localStorage.getItem("teams")));
    localStorage.setItem("currentMaxScore", 1);
    clearTimer();
    // Reload website
    window.location.reload();
  } catch (ex) {
    window.location.reload();
  }
});
