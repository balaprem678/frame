function startAD(){
	setTimeout(function(){
			document.getElementById("bg-shape-1").style.transform='translateX(-400px)';
			document.getElementById("bg-shape-1").style.transition='all 1 ease';
      document.getElementById("bg-shape-2").style.transform='translateX(400px)';
			document.getElementById("bg-shape-2").style.transition='all 1 ease';
		},250)
		setTimeout(function(){
			document.getElementById("text-1").style.opacity='1';
			document.getElementById("text-1").style.transform='translateX(-300px)';
			document.getElementById("text-1").style.transition='all 1 ease';
		},750)
		setTimeout(function(){
			document.getElementById("text-2").style.opacity='1';
			document.getElementById("text-2").style.transform='translateX(-300px)';
			document.getElementById("text-2").style.transition='all 1 ease';
		},1250)
		setTimeout(function(){
			document.getElementById("text-3").style.opacity='1';
			document.getElementById("text-3").style.transform='translateX(-300px)';
			document.getElementById("text-3").style.transition='all 1 ease';
		},1750)
		setTimeout(function(){
			document.getElementById("logo").style.opacity='1';
			document.getElementById("logo").style.transform='translateY(50px)';
			document.getElementById("logo").style.transition='all 1 ease';
		},2250)
		setTimeout(function(){
			document.getElementById("icon1").style.opacity='1';
			document.getElementById("icon1").style.transform= 'rotateX(0deg)';
			document.getElementById("icon1").style.transition='all 1 ease';
		},3250)
		setTimeout(function(){
			document.getElementById("icon2").style.opacity='1';
			document.getElementById("icon2").style.transform= 'rotateX(0deg)';
			document.getElementById("icon2").style.transition='all 1 ease';
		},3750)
		setTimeout(function(){
			document.getElementById("icon3").style.opacity='1';
			document.getElementById("icon3").style.transform= 'rotateX(0deg)';
			document.getElementById("icon3").style.transition='all 1 ease';
		},4250)
		setTimeout(function(){
			document.getElementById("icon4").style.opacity='1';
			document.getElementById("icon4").style.transform= 'rotateX(0deg)';
			document.getElementById("icon4").style.transition='all 1 ease';
		},4750)
		setTimeout(function(){
			document.getElementById("button-text").style.opacity='1';
			document.getElementById("button-text").style.transform='scale(1)';
			document.getElementById("button-text").style.transition='all 0.5s ease 0s';
		},4750)

}Window.load=startAD();