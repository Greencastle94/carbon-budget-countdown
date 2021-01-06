import {
  START_BUDGET,
  CURRENT_DATA_YEAR,
  BUDGET_START_DATE,
  YEARLY_EMISSIONS,
} from "../constants";

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

export function getCurrentBudget() {
  let budget = START_BUDGET;
  const START_BUDGET_YEAR = BUDGET_START_DATE.getFullYear();
  const CURRENT_YEAR = new Date().getFullYear();
  const yearsPassed = CURRENT_YEAR - START_BUDGET_YEAR;

  if (yearsPassed > 0) {
    for (let year = START_BUDGET_YEAR; year < CURRENT_YEAR; year++) {
      budget -= YEARLY_EMISSIONS[year]
        ? YEARLY_EMISSIONS[year]
        : YEARLY_EMISSIONS[CURRENT_DATA_YEAR];
    }
  }
  return budget;
}
