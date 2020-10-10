import senators from "./senator.js";

/**
 * Let's you get a comma separated list of senator emails
 * based on a given filter type & value
 *
 * example getSenatorEmails(state, "")
 */
export let getSenatorInfo = function (filter_type, filter_value, return_type) {
  let senatorEmailsArray = senators.filter(function (item) {
    return item.state === filter_value;
  });

  let returnStrings = "";

  senatorEmailsArray.forEach((entry) => {
    returnStrings += entry[return_type] + ",";
  });

  return returnStrings.slice(0, -1);
};
// "state", "ABIA"

export const basicExample = () =>
  senators.reduce(
    (acc, v, i, a) => `${acc}${v.email || ""}`,
    "ohans@gmail.com"
  );

export const states = [
  "ABIA",
  "ADAMAWA",
  "AKWA IBOM",
  "ANAMBRA",
  "BAUCHI",
  "BAYELSA",
  "BENUE",
  "BORNO",
  "CROSS RIVER",
  "DELTA",
  "EDO",
  "EKITI",
  "ENUGU",
  "GOMBE",
  "EBONYI",
  "IMO",
  "JIGAWA",
  "KADUNA",
  "KANO",
  "KASTINA",
  "KEBBI",
  "KOGI",
  "KWARA",
  "LAGOS",
  "NASARAWA",
  "NIGER",
  "OGUN",
  "ONDO",
  "OSUN",
  "OYO",
  "PLATEAU",
  "RIVERS",
];

export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
