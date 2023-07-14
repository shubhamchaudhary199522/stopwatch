let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 0o0;
let minute = 0o0;
let second = 0o0;
let count = 0o0;

//start button  operation
startBtn.addEventListener('click', function () {
	timer = true;
	stopWatch();
});

// stop button operation
stopBtn.addEventListener('click', function () {
	timer = false;
});


// reset button operation
resetBtn.addEventListener('click', function () {
	timer = false;
	hour = 0;
	minute = 0;
	second = 0;
	count = 0;
	document.getElementById('hr').innerHTML = "00";
	document.getElementById('min').innerHTML = "00";
	document.getElementById('sec').innerHTML = "00";
	document.getElementById('count').innerHTML = "00";
});



// stopwatch functionality
function stopWatch() {
	if (timer) {
		count++;
      
		// if count become 100 increase the second count by 1 and again reset the count to 0
		if (count == 100) {
			second++;
			count = 0;
		}
        
		// if second become 60 increase the minute count by 1 and again reset the second to 0
		if (second == 60) {
			minute++;
			second = 0;
		}
        
		// if minute become 60 increase the hour count by 1 and again reset the minute and second to 0
		if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
		}

		// what the number hour, minute, sec, count have save this numbers in different variable to change the innertext of html. 

		let hrString = hour;
		let minString = minute;
		let secString = second;
		let countString = count;

        // if hour < 10 then put a 0 before the number like 09
		if (hour < 10) {
			hrString = "0" + hrString;
		}

		// if minute < 10 then put a 0 before the number like 09
		if (minute < 10) {
			minString = "0" + minString;
		}

		// if second < 10 then put a 0 before the number like 09
		if (second < 10) {
			secString = "0" + secString;
		}

		// if count < 10 then put a 0 before the number like 09
		if (count < 10) {
			countString = "0" + countString;
		}

		document.getElementById('hr').innerHTML = hrString;
		document.getElementById('min').innerHTML = minString;
		document.getElementById('sec').innerHTML = secString;
		document.getElementById('count').innerHTML = countString;
		setTimeout(stopWatch, 10);
	}
}
