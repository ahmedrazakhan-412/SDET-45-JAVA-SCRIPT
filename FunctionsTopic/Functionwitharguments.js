function func1(a, b, c) {
    console.log(a[3]+b[4]);
    console.log(arguments[3]+arguments[4]);
    // console.log(arguments[0]);
    // console.log(arguments[1]);
    // console.log(arguments[2]);

  }
  //func1(1,2,3,5,6);

  function longestString() {
    let longest = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if(arguments[i]>longest) {
            longest=arguments[i];
        }
    }
    return longest;
  }
  
  console.log(longestString(1,26,3,5,6,35,25));