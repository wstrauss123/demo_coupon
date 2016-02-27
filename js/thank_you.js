$(document).ready(function() {
	// parse out first name from cookie and write to DOM
	var pattern = /firstName=(.*)\;/i;
	if (pattern.exec(document.cookie)[1] === '') {
		return;
	} else {
    	$("#name").html(pattern.exec(document.cookie)[1]);
    }
});




