/* Take a sentence as a string, if the word has a 3rd letter as a vowel 
Then the word should start with uppercase
Input - welcome to coding beauty
Output - welcome to coding Beauty */

  function tocheckVowel(str) {
    var arr=str.split(' ');
		for(var i=0;i<arr.length;i++){
            if ('aeiou'.includes(arr[i].charAt(2)) && arr[i].length>=3) {
                process.stdout.write(arr[i].charAt(0).toUpperCase()+arr[i].slice(1)+" ");
                }
                else{
                    process.stdout.write(arr[i]+" ");
                }
            }
    }
  tocheckVowel('welcome to coding beauty'); 
