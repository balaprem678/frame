function startAD(){
	setTimeout(function(){
			document.getElementById("text-bg").style.transform='rotateY(0)';
			document.getElementById("photo").style.transform='rotateY(0)';
			document.getElementById("text-bg").style.transition='all 1s ease';
			document.getElementById("photo").style.transition='all 1s ease';
		},250)

setTimeout(function(){
	
			document.getElementById("logo").style.transform='scale(1.1)';
			document.getElementById("logo").style.transition='all 0.5s ease';		
},1250)
setTimeout(function(){
	
			document.getElementById("logo").style.transform='scale(1)';
			document.getElementById("logo").style.transition='all 0.5s ease';		
},1750)

setTimeout(function(){
	
			document.getElementById("text-1").style.transform='rotateX(0)';
			document.getElementById("text-1").style.transition='all 0.5s ease';		
},2250)
setTimeout(function(){
	document.getElementById("text-2").style.opacity='1';
			document.getElementById("text-2").style.transform='translateX(0)';
			document.getElementById("text-2").style.transition='all 0.5s ease';		
},2750)
setTimeout(function(){
	document.getElementById("text-3").style.opacity='1';
			document.getElementById("text-3").style.transform='translateX(0)';
			document.getElementById("text-3").style.transition='all 0.5s ease';		
},3250)
setTimeout(function(){
	document.getElementById("text-4").style.opacity='1';
			document.getElementById("text-4").style.transform='translateY(0)';
			document.getElementById("text-4").style.transition='all 0.5s ease';		
},3750)
setTimeout(function(){
	document.getElementById("circle").style.opacity='1';
			document.getElementById("circle").style.transform='rotate(720deg)';
			document.getElementById("circle").style.transition='all 0.5s ease';		
},4250)
setTimeout(function(){
	
			document.getElementById("botton").style.transform='scale(1.1)';
			document.getElementById("botton").style.transition='all 0.5s ease';		
},4750)
setTimeout(function(){
	
			document.getElementById("botton").style.transform='scale(1)';
			document.getElementById("botton").style.transition='all 0.5s ease';		
},5250)
setTimeout(function(){
	document.getElementById("text-5").style.opacity='1';
			document.getElementById("text-5").style.transform='translateY(0)';
			document.getElementById("text-5").style.transition='all 0.5s ease';		
},5750)


}

window.load=startAD();