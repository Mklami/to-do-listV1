//jshint esversion:6

exports.getDate = getDate;

function getDate() {
  let today = new Date();
  /*var currentDay = today.getDay();
  var day = "";*/

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);
}
