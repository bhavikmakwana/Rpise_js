var i = 1;
while(i < 10) {
	console.log(i + ") Entering Do");
	i++;
	if(i > 6) {
		break;
	//	continue;
	}
	console.log(i + ") Leaving Do");
} 