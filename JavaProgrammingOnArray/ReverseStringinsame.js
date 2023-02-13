// reverseWords in same position

function reverseWords(str) {
    var arr = str.split(" ");
    var vstr = "";
        for (let i = 0; i < arr.length; i++) {
            var str2 = arr[i];
           
            for (let j = str2.length-1; j >= 0; j--) {
                 vstr += str2[j];
            } 
            vstr += " "
        }
        return vstr;
      }
    
      console.log(reverseWords('I am an employee '));