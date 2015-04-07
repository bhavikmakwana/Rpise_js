var i = 1;
do {
	console.log(i + ") Entering Do");
	i++;
	if(i < 6) {
	//	break;
		continue;
	}
	console.log(i + ") Leaving Do");
} while(i < "cat");