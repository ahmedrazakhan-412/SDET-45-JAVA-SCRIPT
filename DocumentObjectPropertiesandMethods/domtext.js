function js_style() {
//font styles added by JS:
 text.style.fontSize = "14pt";
 text.style.fontFamily = "Comic Sans MS";
 text.style.color = "green";

 text1.style.fontSize = "14pt";
 text1.style.fontFamily = "Comic Sans MS";
 text1.style.color = "blue";

 demo2.style.fontSize = "14pt";
 demo2.style.fontFamily = "Comic Sans MS";
 demo2.style.color = "purple";

 demo.style.fontSize = "14pt";
 demo.style.fontFamily = "Comic Sans MS";
 demo.style.color = "purple";

 date.style.fontSize = "14pt";
 date.style.fontFamily = "Comic Sans MS";
 date.style.color = "brown";
}

document.addEventListener("dblclick", function(){
    var d = new Date();
    var hour = d.getHours();
    if (hour>=0 && hour<=12) {
        document.getElementById("text").innerHTML = "Hello Good Morning Khan !!!";
    }
    else if (hour>12 && hour<=16) {
        document.getElementById("text").innerHTML = "Hello Good Afternoon Khan !!!";
    }
    else if (hour>16 && hour<=20) {
        document.getElementById("text").innerHTML = "Hello Good Evening Khan !!!";
    }
    else if (hour>20 && hour<=24) {
        document.getElementById("text").innerHTML = "Hello Good Night Khan !!!";
    }
    document.getElementById("text1").innerHTML = "JavaScript Session Started Now";
  });

function js_click() {
    document.getElementById("js_click").innerHTML = "Some one Clicked";
    }

 function js_time() {
    let currentDate = document.getElementById("date");
    let current = new Date();
    currentDate.innerHTML = `Current Date and Time : <b>${current}</b> `;
  }
  
  function myFunction() {
    let text2 = document.getElementById("myInput").value;
    document.getElementById("demo").innerHTML = "You wrote: " + text2;
  }