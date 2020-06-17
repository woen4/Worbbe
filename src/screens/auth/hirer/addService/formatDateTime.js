export function formatDate(Date) {
  let day = Date.getDate();
  if (day < 10) {
    day = '0' + day;
  }
  let month = Date.getUTCMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }
  let fullYear = Date.getYear() + '';
  let year = fullYear.slice(1, 3);
  let date = day + '/' + month + '/' + year;
  return date;
}

export function formatTime(Date) {
  let hours = Date.getHours();
  if (hours < 10) {
    hours = '0' + hours;
  }
  let minutes = Date.getUTCMinutes();
  let time = hours + ':' + minutes;
  return time;
}
