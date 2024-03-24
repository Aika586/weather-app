import moment from "moment";
export const getCurrentDate = (timestamp) => {
  // Convert the timestamp to milliseconds by multiplying with 1000
  const milliseconds = timestamp * 1000;
  // Use Moment.js to create a moment object with the milliseconds
  const currentDate = moment(milliseconds);
  // Format the date as desired (e.g., 'YYYY-MM-DD')
  const formattedDate = currentDate.format('dddd | D MMM YYYY')
  return formattedDate;
};  