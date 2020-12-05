export default function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function scrollIntoView(id) {
  document.querySelector(id).scrollIntoView({
    behavior: "smooth",
  });
}

export function getMilliSecondsLeftOfBudget(currentBudget, currentEmissions) {
  return (currentBudget / currentEmissions) * 31556952000;
}

export function average(array, property) {
  let valueSum = 0;
  for (let el in array) {
    valueSum += array[el][property];
  }
  return valueSum / array.length;
}
