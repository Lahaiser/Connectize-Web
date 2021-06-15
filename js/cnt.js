// ======== Burguer Menu ======= //
$(document).ready(function (){
    var $btnMenu = document.querySelector(".header__burgerbtn");
    var $header = document.querySelector("header");
    
    $btnMenu.addEventListener("click", function(){ 
       var burgueractive = $btnMenu.classList.contains('is-active') ?  
           $btnMenu.classList.remove('is-active') : 
           $btnMenu.classList.add('is-active')
       
       var menubgs = $header.classList.contains('hdtransitbg') ?  
           $header.classList.remove('hdtransitbg') : 
           $header.classList.add('hdtransitbg')
    });                      
});
 
// ======== Type Effect ======= //
document.addEventListener('DOMContentLoaded',function(event){
  var dataText = [ "Criamos um centro de serviços em <p class = 'r'>Tecnologia</p> para sua empresa <p class = 'r'>encontrar tudo</p> em um só lugar."];
  
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span class = "typebar" aria-hidden="true"></span>';
        
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 70);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
    if (i < dataText[i].length) {

     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }
  StartTextAnimation(0);
});