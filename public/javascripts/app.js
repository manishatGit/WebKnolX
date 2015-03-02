/**
 * Implements ajax calling
 */
var ajaxCall = function(email) {
	var email = $('#eml').val()
	alert(email)
	var ajaxCallBack = {
		success : onSuccess,
		error : onError
	}

	jsRoutes.controllers.Application.ajaxCall(email).ajax(ajaxCallBack);
};

var onSuccess = function(data) {
	alert(data);
}

var onError = function(error) {
	alert(error);
}
