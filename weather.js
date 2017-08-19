$(document).ready(function(){

	var images=[
		{'url':'pgGnvJF7p20'},		{'url':'v6iwqTvxGeQ'},		{'url':'Tj8sX69FRxw'},		{'url':'R3h60Z0yQQE'},		{'url':'Dc9r3VMU1Mo'},		{'url':'trnTvywx2Rg'},		{'url':'KUgDg__TMGk'},		{'url':'XHZhI_Zy6TM'},		{'url':'abVkUkfyAJE'},		{'url':'T7RlFC8dH60'},		{'url':'Ix1TiS-E17E'},		{'url':'v3UZKbMaTGk'}
	];
                      
	function randomImage(){
		return Math.floor(Math.random()*12);
	}

	var imageUrl='url(https://source.unsplash.com/' +images[randomImage()].url+'/1600x900)';
	$('body').css('background-image',imageUrl);
							  
	if(navigator.geolocation)
	{
	    navigator.geolocation.getCurrentPosition(function(position){

		       // console.log("Latitude"+position.coords.latitude+"--Longitude"+position.coords.longitude);
		        var lat=String(position.coords.latitude),lon="&lon="+String(position.coords.longitude);
				var api="http://api.openweathermap.org/data/2.5/forecast?lat=";			  
			    var apiKey="&APPID=28d3ac540423fc50add4261d843a969c&units=";
				var units="imperial";

				$("#temp").on("click",function(){

					if(units==="imperial")
					{
						units="metric";
						$("#temp").html("metric");
					}
					else
					{
						units="imperial";
						$("#temp").html("imperial");
					}
					var url=api+lat+lon+apiKey+units;
					$.getJSON(url,function(data){
					weather=data;
					$(".c").html(weather.city.name+","+weather.city.country);
					$(".t").html(weather.list[0].main.temp)
					$(".h").html(weather.list[0].main.humidity)
				 	$(".w").html(weather.list[0].wind.speed);
				    });
				});

		    });
	}
});
// 28d3ac540423fc50add4261d843a969c
//4687cac07e6e04b81a0865f7c72d29c1 