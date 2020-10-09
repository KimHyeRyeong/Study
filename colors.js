var Body={
setColor:function(color){
// document.querySelector('body').style.color = color;
  $('body').css('color',color);
},
setBackgroundColor:function(backgroundColor){
  $('body').css('backgroundColor',backgroundColor);

    }
}
    function setColor(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    // alist[i].style.color=color;
    // i=i+1;
    //     }
    $('a').css('color',color);
    }


function nightDayHandler(self){
var target = document.querySelector('body');
if(self.value === 'night'){
   Body.setBackgroundColor('black');
   Body.setColor('white');
   self.value='day';
    setColor('powderblue')
}
  else{
  Body.setBackgroundColor('white');
  Body.setColor('black');
  self.value='night';
  setColor('blue');
  }
}
