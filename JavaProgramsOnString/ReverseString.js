var ch = "testyantra";
        console.log("Before : "+ch);
		process.stdout.write("After : ");
		for (var i = ch.length-1; i >=0 ; i--) {
			process.stdout.write(ch[i]);
		}