const displayDoubleDigit = (number) => {
  if (number < 10) {
    return '0' + number.toString();
  } else {
    return number.toString();
  }
}

const toStandardTime = (militaryTime) => {
  let hour = Number(militaryTime.slice(0,2)); // 12
  let minute = militaryTime.slice(3); // '51'
  let extension = 'AM';

  if (hour > 12) {
    hour -= 12;
    extension = 'PM';
  } else if (hour === 12) {
    extension = 'PM';
  } else if (hour === 0) {
    hour = 12;
  }
  let standardTime = displayDoubleDigit(hour) + ':' + minute + ' ' + extension;
  return standardTime;
}

export const exactDate = (RailsTime) => {
  const theExactDate = RailsTime;
  const date = new Date(theExactDate).toString().split(" ");
  const monthDayYear = date.slice(1,3).join(" ") + ", " + date[3];
  const time = date[4].split(":").slice(0,2).join(":");
  const detailedTime = monthDayYear + " " + toStandardTime(time);
  return detailedTime;
}
