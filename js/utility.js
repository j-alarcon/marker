export function formatNumber(number) {
  return number < 10 ? "0" + number : number;
}

export function changeImage(element, url, alt) {
  element.src = url;
  element.alt = alt;
}

export function downloadResults(localValues, fileName) {
  let anchor = document.createElement("a");
  anchor.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(localValues)
  );
  anchor.setAttribute("download", fileName);
  anchor.click();
}

export function reproduceSound(fileSource) {
  new Audio(fileSource).play();
}

export function getCurrentTime() {
  let date = new Date();
  return (
    formatNumber(date.getDate()) +
    "-" +
    formatNumber(date.getMonth() + 1) +
    "-" +
    date.getFullYear() +
    "_" +
    formatNumber(date.getHours()) +
    "_" +
    formatNumber(date.getMinutes()) +
    "_" +
    formatNumber(date.getSeconds())
  );
}

// Create any type of HTML element which receives type, data-value and infinite classes
export function createHTML(type, datav, ...classes) {
  let h = document.createElement(type);
  // If classes are not specified this won't work
  classes.forEach((e) => {
    h.classList.add(e);
  });
  // If data-value is null or false won't be applied
  if (datav) {
    h.setAttribute("data-value", datav);
  }
  return h;
}

// Prevent user to introduce negative numbers or white-spaces and remove red outline
export function validateInput(input, min, max) {
  if (
    input.value >= min &&
    input.value <= max &&
    input.value != "" &&
    !input.value.includes(".")
  ) {
    return input;
  }
}

// Find an element according his id
export function findElement(elements, name) {
  // If not found, will return -1
  let x = -1;
  elements.forEach((e) => {
    if (e.id.includes(name)) {
      x = e;
    }
  });
  return x;
}

// Disable an infinite number of HTML elements
export function disableHTML(...elements) {
  elements.forEach((e) => {
    if (e.nodeName === "INPUT" || e.nodeName === "TEXTAREA") {
      e.disabled = true;
    }
  });
}

// Deactivate an infinite number of HTML elements
export function activateHTML(...elements) {
  elements.forEach((e) => {
    if (e.nodeName === "INPUT" || e.nodeName === "TEXTAREA") {
      e.disabled = false;
    }
  });
}

export function appendChilds(father, ...childs) {
  childs.forEach((e) => {
    father.appendChild(e);
  });
  return father;
}

// Add classes to different elements inside an array
export function addClasses(elements, init, end, ...classes) {
  // Classes will be added according to range you have selected inside array
  for (let i = init; i <= end; i++) {
    classes.forEach((currentClass) => {
      elements[i].classList.add(currentClass);
    });
  }
}

// Remove classes according to keywords to different elements inside an array
export function removeClasses(elements, init, end, ...classes) {
  // Classes will be removed according to range you have selected inside array
  for (let i = init; i <= end; i++) {
    classes.forEach((currentClass) => {
      elements[i].classList.forEach((currentElement) => {
        // If your keyword match with any class will be removed
        if (currentElement.includes(currentClass)) {
          elements[i].classList.remove(currentElement);
        }
      });
    });
  }
}

// Change JSON simple structure receiving father, number and name of child, and value
export function updateJSON(json, pFather, nChild, pChild, value) {
  let currentData = JSON.parse(json);
  currentData[pFather][nChild][pChild] = value;
  return JSON.stringify(currentData);
}

export function deleteLastItemJSON(JSON) {
  return JSON.substring(0, JSON.lastIndexOf("},") + 1) + "]}";
}

export function addItemToJSON(JSON, ...objects) {
  let json = JSON.substring(0, JSON.lastIndexOf("]")) + ",{";
  objects.forEach((e, i) => {
    for (let p in e) {
      json += '"' + p + '":';
      typeof e[p] === "string"
        ? (json += '"' + e[p] + '",')
        : (json += e[p] + ",");
    }
  });
  return json.substring(0, json.lastIndexOf(",")) + "}]}";
}
