export const extractTime = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};


//helper function to pad single-digit numbers with a leading zero

// function padZero(number){
//     return number.toString().padStart(2 ,"0");
// }