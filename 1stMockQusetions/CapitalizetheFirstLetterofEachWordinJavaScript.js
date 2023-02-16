// Capitalize the First Letter of Each Word in JavaScript

function capitalizeWords(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase()+word.slice(1))
      .join(' ');
  }
  
  console.log(capitalizeWords('wELCOME to coding beauty')); // Welcome To Coding Beauty

  console.log(capitalizeWords('jAVASCRIPT aND tYPESCRIPT')); // JavaScript And TypeScript