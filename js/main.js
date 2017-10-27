$(document).ready(function(){
  
  
  //------------------------------------//
  //Navbar//
  //------------------------------------//
    	var menu = $('.navbar');
    	$(window).bind('scroll', function(e){
    		if($(window).scrollTop() > 140){
    			if(!menu.hasClass('open')){
    				menu.addClass('open');
    			}
    		}else{
    			if(menu.hasClass('open')){
    				menu.removeClass('open');
    			}
    		}
    	});
  
  
  //------------------------------------//
  //Scroll To//
  //------------------------------------//
  $(".scroll").click(function(event){		
  	event.preventDefault();
  	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
  	
  });
  
  //------------------------------------//
  //Wow Animation//
  //------------------------------------// 
  wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       false        // trigger animations on mobile devices (true is default)
        }
      );
      wow.init();

  //------------------------------------//
  // Mailchimp subsribe
  //------------------------------------// 

  $('#mc-embedded-subscribe-form').ajaxChimp({
    url: 'https://sunny-tech.us16.list-manage.com/subscribe/post?u=bc52bec3c758ad9f9e5b5bce7&id=d9ed0e9aab',
    callback: (message) => {
      console.log(message)
      var text = ""
      if(message.msg.startsWith('0 -')){
        text = message.msg.substring(3)
      } else {
        text = message.msg
      }
      if($("#result").text().length > 1){
        $("#result").fadeOut(400, function() {
          $("#result").text(text).fadeIn();
        })
      } else {
        $("#result").text(text).fadeIn();
      }
    }
  });

  $('#mc-email').keyup(function(e){
    if(e.keyCode == 13) {
      $('#mc-embedded-subscribe-form').submit()
    }
  });

});
