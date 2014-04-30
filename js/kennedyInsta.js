// JavaScript Document


//Use this url below to get your access token
//https://instagram.com/oauth/authorize/?display=touch&client_id=f0ce982c58da406ca8977aa802411542&redirect_uri=http://margolanier.com/static/instagram&response_type=token 

//if you need a user id for yourself or someone else use:
//http://jelled.com/instagram/lookup-user-id
	
						
$(function() {
	
	var apiurl = "https://api.instagram.com/v1/users/549403870/media/recent?access_token=345652432.f0ce982.26510f81a202427491eeb027670e4f1d&callback=?"
	var access_token = location.hash.split('=')[1];
	var html = ""
	
	$.ajax({
		type: "GET",
		dataType: "json",
		cache: false,
		url: apiurl,
		success: parseData
	});	
	
	function parseData(json){
		console.log(json);
		
		$.each(json.data,function(i,data){
			html += '<a href="' + data.link + '" target="_blank"><img src ="' + data.images.low_resolution.url + '"></a>'
		});
		
		console.log(html);
		$(".results").append(html);
		
	}
	
});
