var arr="testyantra";
		var s="";
        console.log("The Given String '"+arr+"' ");  
        process.stdout.write("Without Vowels : ");
		for(var i=0;i<arr.length;i++)
		{
			if(arr[i]!='a'&&arr[i]!='e'&&arr[i]!='i'&&arr[i]!='o'&&arr[i]!='u')
			{
				s=s+arr[i];
			}
		}
		process.stdout.write(s);	