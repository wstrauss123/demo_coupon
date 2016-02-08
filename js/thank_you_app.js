$(document).ready(function() {
	// parse out first name from cookie and write to DOM
	var pattern = /firstName=(.*)_lastName/i;
	if (pattern.exec(document.cookie)[1] === '') {
		//$("#firstName").html("Avid shopper");
		return;
	} else {
    	$("#firstName").html(pattern.exec(document.cookie)[1]);
    }
});
