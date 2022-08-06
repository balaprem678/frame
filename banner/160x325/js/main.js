var _pos =184;
var _setIn = 80;
var startAnim = setInterval(function(){
  docment.getElementByID("img").style.transform= "translateX(-"+_pos +"px)";
  if(_pos < 1288){
    _pos = _pos + 184;
  }
  else{
    _pos = 184;
    clearInterval(startAnim)//one time animation
  }
},_setIn)

