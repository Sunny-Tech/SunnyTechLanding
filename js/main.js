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



  function register($form) {
    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
        cache       : false,
        dataType    : 'json',
        contentType: "application/json; charset=utf-8",
        error       : function(err) { alert("Could not connect to the registration server. Please try again later."); },
        success     : function(data) {
            if (data.result != "success") {
                // Something went wrong, do something to notify the user. maybe alert(data.msg);
            } else {
                // It worked, carry on...
            }
        }
    });
}

	
});
