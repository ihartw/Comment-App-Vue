export var postMessage = function() {
	var success = document.getElementById("success-alert");
	success.className = 'show'
	setTimeout(function() {
		success.className = success.className.replace("show", "");
	}, 3000);
}