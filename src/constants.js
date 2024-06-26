export const ENV_STAGE = "stage";

export const START_BUDGET = 370; // (MtCO2) post-2019
export const BUDGET_START_DATE = new Date("Jan 1, 2020 00:00:00");
export const YEARLY_EMISSIONS = {
  2023: 44.2, // Preliminary numbers
  2022: 45.25,
  2021: 47.72,
  2020: 46,
  2019: 50.2,
  2018: 51.56,
}; // MtCO2
export const CURRENT_DATA_YEAR = 2023;
export const CURRENT_EMISSIONS = YEARLY_EMISSIONS[CURRENT_DATA_YEAR];
export const NECESSARY_REDUCTION_RATE = -20;

export const MONTHS = [
  "Januari",
  "Februari",
  "Mars",
  "April",
  "Maj",
  "Juni",
  "Juli",
  "Augusti",
  "September",
  "Oktober",
  "November",
  "December",
];
