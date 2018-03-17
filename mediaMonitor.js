console.log('connected!!!!!')

window.fbAsyncInit = function(){
FB.init({
	appId      : '{149761792501751}',
	cookie     : true,
	xfbml      : true,
	version    : '{2.12}'
});
  
FB.AppEvents.logPageView();   
};


FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

// function statusChangeCallback(response) {
// 	if (response.status === 'connected') {
// 		console.log('Logged in and authenticated')
// 	} else {
// 		console.log('Not authenticated')
// 	}
// }

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "https://connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

