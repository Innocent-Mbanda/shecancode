/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Header Search
5. Init Home Slider
6. Initialize Milestones


******************************/

  // When the user scrolls down 20px from the top of the document, show the button


  
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("to-top").style.display = "block";
    } else {
      document.getElementById("to-top").style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  

    

// ...................mobile nav......................
function MobileNav () {
  var x = document.getElementById("mylinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// ...................jquery function....................................

$(function() {
  $(".toggle").on("click", function() {
      if ($(".nav-item").hasClass("active")) {
          $(".nav-item").removeClass("active");
          $(this).find("a").html("<i class='fas fa-bars'></i>");
      } else {
          $(".nav-item").addClass("active");
          $(this).find("a").html("<i class='fas fa-times'></i>");
      }
  });
});


  $(document).ready(function() {
  $(".port1").hover(function(){
  $(".port1").mouseenter(function(){
  $("#button1").show();
  });

  $(".port1").mouseleave(function(){
  $("#button1").hide();
  });
  });
  $(".port1").hover(function(){
   $(".port1").mouseenter(function(){
    $("#button1").show();
  });
    $(".port1").mouseleave(function(){
    $("#button1").hide();
  });
  });
  $(".port2").hover(function(){
  $(".port2").mouseenter(function(){
  $("#button2").show();
  });
  $(".port2").mouseleave(function(){
  $("#button2").hide();
   });
  });
  $(".port3").hover(function(){
   $(".port3").mouseenter(function(){
     $("#button3").show();
     });
    $(".port3").mouseleave(function(){
    $("#button3").hide();
  });
  });
  $(".port4").hover(function(){
  $(".port4").mouseenter(function(){
    $("#button4").show();
    });
    $(".port4").mouseleave(function(){
    $("#button4").hide();
    });   
    });
  $(".port5").hover(function(){
    $(".port5").mouseenter(function(){
    $("#button5").show();
    });
    $(".port5").mouseleave(function(){
    $("#button5").hide();
          });
         
      });
      $(".port6").hover(function(){
        $(".port6").mouseenter(function(){
        $("#button6").show();
        });
        $(".port6").mouseleave(function(){
          $("#button6").hide();
          });
         
      });
      $(".port7").hover(function(){
        $(".port7").mouseenter(function(){
        $("#button7").show();
        });
        $(".port7").mouseleave(function(){
        $("#button7").hide();
          });
         
      });
      $(".port8").hover(function(){
        $(".port8").mouseenter(function(){
        $("#button8").show();
        });
        $(".port8").mouseleave(function(){
          $("#button8").hide();
          });
         
      });
    });



$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var menuActive = false;
	var menu = $('.menu');
	var burger = $('.hamburger');
	var ctrl = new ScrollMagic.Controller();

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initHeaderSearch();
	initHomeSlider();
	initMilestones();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 100)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length)
		{
			var menu = $('.menu');
			if($('.hamburger').length)
			{
				burger.on('click', function()
				{
					if(menuActive)
					{
						closeMenu();
					}
					else
					{
						openMenu();

						$(document).one('click', function cls(e)
						{
							if($(e.target).hasClass('menu_mm'))
							{
								$(document).one('click', cls);
							}
							else
							{
								closeMenu();
							}
						});
					}
				});
			}
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

	/* 

	4. Init Header Search

	*/

	function initHeaderSearch()
	{
		if($('.search_button').length)
		{
			$('.search_button').on('click', function()
			{
				if($('.header_search_container').length)
				{
					$('.header_search_container').toggleClass('active');
				}
			});
		}
	}

	/* 

	5. Init Home Slider

	*/

	function initHomeSlider()
	{
		if($('.home_slider').length)
		{
			var homeSlider = $('.home_slider');
			homeSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:true,
				nav:false,
				dots:false,
				smartSpeed:1200
			});

			if($('.home_slider_prev').length)
			{
				var prev = $('.home_slider_prev');
				prev.on('click', function()
				{
					homeSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.home_slider_next').length)
			{
				var next = $('.home_slider_next');
				next.on('click', function()
				{
					homeSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	6. Initialize Milestones

	*/

	function initMilestones()
	{
		if($('.milestone_counter').length)
		{
			var milestoneItems = $('.milestone_counter');

	    	milestoneItems.each(function(i)
	    	{
	    		var ele = $(this);
	    		var endValue = ele.data('end-value');
	    		var eleValue = ele.text();

	    		/* Use data-sign-before and data-sign-after to add signs
	    		infront or behind the counter number */
	    		var signBefore = "";
	    		var signAfter = "";

	    		if(ele.attr('data-sign-before'))
	    		{
	    			signBefore = ele.attr('data-sign-before');
	    		}

	    		if(ele.attr('data-sign-after'))
	    		{
	    			signAfter = ele.attr('data-sign-after');
	    		}

	    		var milestoneScene = new ScrollMagic.Scene({
		    		triggerElement: this,
		    		triggerHook: 'onEnter',
		    		reverse:false
		    	})
		    	.on('start', function()
		    	{
		    		var counter = {value:eleValue};
		    		var counterTween = TweenMax.to(counter, 4,
		    		{
		    			value: endValue,
		    			roundProps:"value", 
						ease: Circ.easeOut, 
						onUpdate:function()
						{
							document.getElementsByClassName('milestone_counter')[i].innerHTML = signBefore + counter.value + signAfter;
						}
		    		});
		    	})
			    .addTo(ctrl);
	    	});
		}
	}

});