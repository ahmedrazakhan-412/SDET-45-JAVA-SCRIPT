
function init(cc) { 
    switch (cc) {
        case "Blue":
            about = document.getElementById("about");
            about.style.color = 'blue';
            break;

        case "Red":
            about = document.getElementById("about");
            about.style.color = 'red';
            break;

        case "Green":
            about = document.getElementById("about");
            about.style.color = 'green';
            break;

        case "Purple":
            about = document.getElementById("about");
            about.style.color = 'purple';
            break;
    
        default:
            break;
    }
}

var firstname= "MD Ahmed"

function studentInfo(name ,rank) {
    console.log(name  + " Has Scored -- "+ rank+" rank");
    document.write(name  + " Has Scored -- "+ rank+" rank");
}
studentInfo("Khan", 2);

var lastname= "Raza Khan"


