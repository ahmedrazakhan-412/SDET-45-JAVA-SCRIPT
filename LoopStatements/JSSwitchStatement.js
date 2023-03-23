// The switch statement is used to perform different actions based on different conditions.

switch (new Date().getDay()) {

    case 0:
      day = "Sunday";
      console.log("The result of day will be : "+day);
      break;
    case 1:
      day = "Monday";
      console.log("The result of day will be : "+day);
      break;
    case 2:
       day = "Tuesday";
       console.log("The result of day will be : "+day);
      break;
    case 3:
      day = "Wednesday";
      console.log("The result of day will be : "+day);
      break;
    case 4:
      day = "Thursday";
      console.log("The result of day will be : "+day);
      break;
    case 5:
      day = "Friday";
      console.log("The result of day will be : "+day);
      break;
    case 6:
      day = "Saturday";
      console.log("The result of day will be : "+day);
    default :
        console.log("There is no such day");
  }
  