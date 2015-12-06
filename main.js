// We need 4 functions.
//
// 1: input(): Keeps track of input as an array and clears the screen
// 	if an operation, AC, CE, or = is selected.
// 	This will be called via onclick for those buttions, and will reset
// 	the display div until = is clicked, then it will call it and
// 	pass an array of numbers and operations.
// 	
//
// 2: clearLast(): pops the last item off the array.
//	This will return the array, minus the last item.
//
//
// 3: clearAll(): Simply returns the array, empty
//
// 4: evaluate(): This one is going to be more complex.
// 	We may just decide that input() will do its job
// 	and ensure that all arrays alternate number and operation. 
// 	Loop through array, if first item is an operation, throw an error.
// 	If first is number, check next for the operation, then for the number
// 	Then store the number as a, operation as op, and second number as
// 	b. Just move linearly through the list as Order of Operations
// 	Isn't actually a THING for a simple calculator. 
// 	This will just return a number. Maybe a surprise for 1337
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
