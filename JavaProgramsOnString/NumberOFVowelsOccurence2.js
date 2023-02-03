var ch1="testyantra";
var ch = ch1.toLowerCase();
var m = new Map();
console.log("The Given String '"+ch+"' ");  
console.log("Present Vowels with Count : ");
for (var i = 0; i < ch.length; i++) {
	if (ch[i] == 'a' || ch[i] == 'e'|| ch[i] == 'i' || ch[i] == 'o'|| ch[i] == 'u') {
		if (!m.has(ch[i])) {
			m.set(ch[i], 1);
		}
		else {
			var count = m.get(ch[i]);
			m.set(ch[i], count+1);
		}
	}
}

for (let [key, value] of m) {
	console.log(key + " = " + value);
	}