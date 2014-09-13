// isBlocking = true when sites will be blocked
var isBlocking = true;

//dynamically changing icons
var switchBlockingOnOff = function (){
	if(isBlocking){
		//alert("was blocking");
		isBlocking = false;
		chrome.browserAction.setIcon({path: '/icon_off.png'});
		//alert("now not blocking");
	}
	else{
		//alert("was not blocking");
		isBlocking = true;
		chrome.browserAction.setIcon({path: '/icon_on.png'});
		//alert("now blocking");
	}
}

// redirecting code
var host = "http://www.google.com";
chrome.webRequest.onBeforeRequest.addListener(
        function() {
			if(isBlocking){
				return {redirectUrl: host};
			}
		},
    {
        urls: [
            "*://*.yahoo.com/*"
        ]
    },
    ["blocking"]
);


