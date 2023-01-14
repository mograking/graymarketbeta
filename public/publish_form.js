console.log('loaded');
function setTime(x){
	console.log('here');
	var e = document.getElementById('timelimitdisplay');
	var i = document.getElementById('timelimit_input');
	e.innerHTML = `${x} weeks`;
	i.value = x;
}
