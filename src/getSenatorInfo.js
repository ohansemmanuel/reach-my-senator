import { senators } from "./senators";

/**
 * Let's you get a comma separated list of senator emails based on a given filter type & value
 * e.g. getSenatorEmails(state, "ABIA")
 */
export let getSenatorInfo = function (filter_type, filter_value, return_type) {
  let senatorEmailsArray = senators.filter(
    (item) => item.state === filter_value
  );

  let returnStrings = "";

  senatorEmailsArray.forEach(
    (entry) => (returnStrings += entry[return_type] + ",")
  );

  return returnStrings.slice(0, -1);
};
