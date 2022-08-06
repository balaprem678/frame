
function startAd(){
	setTimeout(function(){
		document.getElementById("copy1").style.transform = 'translateY(0px) scale(1)';
		document.getElementById("copy1").style.transition = 'all 0.2s ease';	
	}, 250)

	setTimeout(function(){
		document.getElementById("img2").style.opacity = '1';
		document.getElementById("from").style.opacity = '0';
		document.getElementById("to").style.opacity = '1';
		document.getElementById("copy1").style.opacity = '0';
		document.getElementById("copy2").style.transform = 'translateY(0px) scale(1)';

		document.getElementById("from").style.transition = 'all 0.2s ease';
		document.getElementById("to").style.transition = 'all 0.2s ease';
		document.getElementById("copy1").style.transition = 'all 0.2s ease';
		document.getElementById("copy2").style.transition = 'all 0.2s ease';	
	}, 1000)

	setTimeout(function(){
		document.getElementById("img3").style.opacity = '1';
		document.getElementById("copy2").style.opacity = '0';
		document.getElementById("copy3").style.transform = 'translateY(0px) scale(1)';

		document.getElementById("copy2").style.transition = 'all 0.2s ease';
		document.getElementById("copy3").style.transition = 'all 0.2s ease';	
	}, 2000)

	setTimeout(function(){
		document.getElementById("img4").style.opacity = '1';
		document.getElementById("copy3").style.opacity = '0';
		document.getElementById("copy4").style.transform = 'translateY(0px) scale(1)';
		document.getElementById("copy3").style.transition = 'all 0.2s ease';
		document.getElementById("copy4").style.transition = 'all 0.2s ease';	
	}, 3000)

	setTimeout(function(){
		document.getElementById("img5").style.opacity = '1';
		document.getElementById("copy4").style.opacity = '0';
		document.getElementById("copy5").style.transform = 'translateY(0px) scale(1)';

		document.getElementById("copy4").style.transition = 'all 0.2s ease';
		document.getElementById("copy5").style.transition = 'all 0.2s ease';	
	}, 4000)

	setTimeout(function(){
		document.getElementById("img6").style.opacity = '1';
		document.getElementById("copy5").style.opacity = '0';
		document.getElementById("copy6").style.transform = 'translateY(0px) scale(1)';

		document.getElementById("copy5").style.transition = 'all 0.2s ease';
		document.getElementById("copy6").style.transition = 'all 0.2s ease';	
	}, 5000)

	setTimeout(function(){
		document.getElementById("img7").style.opacity = '1';
		document.getElementById("copy6").style.opacity = '0';
		document.getElementById("copy7").style.transform = 'translateY(0px) scale(1)';
		document.getElementById("copy6").style.transition = 'all 0.2s ease';
		document.getElementById("copy7").style.transition = 'all 0.2s ease';	
	}, 6000)

	setTimeout(function(){
		document.getElementById("img8").style.opacity = '1';
		document.getElementById("copy7").style.opacity = '0';
		document.getElementById("copy8").style.transform = 'translateY(0px) scale(1)';

		document.getElementById("copy7").style.transition = 'all 0.2s ease';
		document.getElementById("copy8").style.transition = 'all 0.2s ease';	
	}, 6000)

	setTimeout(function(){
		document.getElementById("finalFrame").style.opacity = '1';
		document.getElementById("finalFrame").style.transition = 'all 0.5s ease';	
	}, 7000)


}

window.load = startAd();