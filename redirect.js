let n = 5;
let interval = setInterval(() => {
	n--;
	document.getElementById("n").innerHTML = n;
	if (n == 0) {
		clearInterval(interval);
		window.location = "https://mitenkov.com/";
	}
}, 1000);