function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
  function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "5px";
    } 
  });
}

$(document).ready(function(){
  $('.net').on('click', function(){
    var currentImg = $('.active');
    var nextImg = currentImg.nxt();

    if(nextImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    }
  });

  $('.prv').on('click', function(){
    var currentImg = $('.active');
    var prevImg = currentImg.prv();

    if(prevImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      prevImg.addClass('active').css('z-index', 10);
    }
  });
  $('.post-wrapper').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
	});
});  

 
 	
	
