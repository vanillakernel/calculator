// We need 4 functions.
//
// 1: countDown(): begins countdown.
// 	This will be called via onclick, and will update
// 	the clock div until at 0, then animate for 10 seconds
// 	then reset.
//
// 2: plusTime(): adds 1 minute to timer. We may not block
// 	the clock from changing, as this is actually a more 
// 	useful use case, though it is very much anti-pomodoro :)
//
// 3: minusTime(): removes 1 minute from timer.
//
// 4: resetTimer(): Simply sets the clock to 25 minutes.
// 	this gets called when the #reset button is clicked
// 	and when the countdown = 0.
//

// FUNCTIONAL PROGRAMMING FTW. OOP is for nouns, this is all verbing.

var minutes = 25;
var seconds =  0;
var remaining = 0; 

function plusTime(){
	minutes+=1; //just add a minute. 
	document.getElementById('clockDiv').innerHTML=minutes+":"+seconds
}

function minusTime(){
	minutes-=1; //just take a minute. 
	document.getElementById('clockDiv').innerHTML=minutes+":"+seconds
}

//SIGH AT LEADING ZEROES
function leadingZeroes(sec) {

return (sec < 10 ? '0' : '') + sec;

}


function countDown()
{
//	seconds = 0; // this is for the edge case where I get triple zeroes if I reset then start again.
	document.getElementById("countDownButton").disabled = true;	
	document.getElementById("plusButton").disabled = true;	
	document.getElementById("minusButton").disabled = true;	
	remaining=setTimeout(function(){countDown()}, 1000)

	seconds=(leadingZeroes(seconds));
	document.getElementById('clockDiv').innerHTML=minutes+":"+seconds;
	
	seconds-=1;
	if (seconds<1)
	{ 
		minutes=minutes-1; seconds=59;
	}

	if (minutes<0)
	{
		reset();
		
	}
}

function reset()
{
	minutes=25;
	seconds=0;
	seconds=leadingZeroes(seconds);
	window.clearTimeout(remaining)
        document.getElementById("countDownButton").disabled = false;	
	document.getElementById("plusButton").disabled = false;	
	document.getElementById("minusButton").disabled = false;	
	document.getElementById('clockDiv').innerHTML=minutes+":"+seconds;
	
}
