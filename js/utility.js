export function formatNumber(number) {
  return number < 10 ? "0" + number : number;
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

// You can add classes to different elements inside an array
export function addClasses(elements, init, end, ...classes) {
  // Classes will be added according to range you have selected inside array
  for (let i = init; i <= end; i++) {
    classes.forEach((currentClass) => {
      elements[i].classList.add(currentClass);
    });
  }
}

// You can remove classes according to keywords to different elements inside an array
export function removeClasses(elements, init, end, ...classes) {
  // Classes will be removed according to range you have selected inside array
  for (let i = init; i <= end; i++) {
    console.log(i);
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
