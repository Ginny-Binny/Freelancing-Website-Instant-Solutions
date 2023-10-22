jQuery(document).ready(function($) {	
    
	function lightbox()
    {
        jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
		theme: 'pp_default',
		overlay_gallery: false,
		show_title: false,
        social_tools: false,
		hideflash: true
	});
    }
    if (jQuery().prettyPhoto)
    {
        lightbox();
    }
    if (jQuery().quicksand)
    {
    
        var $holder = $(".portfolio");
        var $data = $holder.clone();
        var $preferences = {
            duration: 500,
            easing: "easeInQuad"
        };
        jQuery(".filter a").click(function (e)
        {
            jQuery(".filter li").removeClass("current");
            // Get the class attribute value of the clicked link
		     var $filterClass = jQuery(this).parent().attr("class");
             jQuery(this).parent().addClass("current");
            if ($filterClass == "all")
            {
                var $filteredData = $data.find("li");
            }
            else
            {
                var $filteredData = $data.find("li[data-type~=" + $filterClass + "]");
            }
            $holder.quicksand($filteredData, $preferences, function ()
            {
                lightbox();
            });
        });
    }
	

});



/**
 * Parallax Scrolling Tutorial
 * For NetTuts+
 *  
 * Author: Mohiuddin Parekh
 *	http://www.mohi.me
 * 	@mohiuddinparekh   
 */


jQuery(document).ready(function(){
	// Cache the Window object
	jQuerywindow = jQuery(window);
                
   jQuery('section[data-type="background"]').each(function(){
     var jQuerybgobj = jQuery(this); // assigning the object
                    
      jQuery(window).scroll(function() {
                    
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = -(jQuerywindow.scrollTop() / jQuerybgobj.data('speed')); 
		
		// Put together our final background position
		var coords = '50% '+ yPos + 'px';

		// Move the background
		jQuerybgobj.css({ backgroundPosition: coords });
		
}); // window scroll Ends

 });	

}); 
/* 
 * Create HTML5 elements for IE's sake
 */

document.createElement("article");
document.createElement("section");


/* Menu */

jQuery(document).ready(function() {		 
      // Create the dropdown base
       jQuery("<select />").appendTo("nav");

      // Create default option "Go to..."
      jQuery("<option />", {
        "selected": "selected",
        "value"   : "",
        "text"    : "Go to..."
      }).appendTo("nav select");

      // Populate dropdown with menu items
       jQuery("nav a").each(function() {
        var el = jQuery(this);
       jQuery("<option />", {
          "value"   : el.attr("href"),
          "text"    : el.text()
        }).appendTo("nav select");
        });
		
		// To make dropdown actually work
	   // To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
      jQuery("nav select").change(function() {
        window.location = jQuery(this).find("option:selected").val();
      });
	  
	  
    });
			
/* Flexslider */
 jQuery(window).load(function() {
    jQuery('.flexslider').flexslider({
		touchSwipe: true,     
		controlNav: true,
		slideshow: true,                
		slideshowSpeed: 7000,
		animationDuration: 600, 
		randomize: false, 
		pauseOnAction: true,    
		pauseOnHover: false, 
	});
  });
			
jQuery(document).ready(function() {	
  /* Count to */
	jQuery(function() {	
		jQuery('.countto').appear(function() {
			jQuery(".number_counter .number_count").each(function() {
				var count_element = jQuery(this).html();
				jQuery(this).countTo({
					from: 0,
					to: count_element,
					speed: 2500,
					refreshInterval: 50,
				});
			});
		});
		});
});

	
/* RV slider */

jQuery(document).ready(function(){

   if (jQuery.fn.cssOriginal!=undefined)
	  jQuery.fn.css = jQuery.fn.cssOriginal;
	  jQuery('.fullwidthbanner').revolution({
		delay:9000,
		startwidth:1170,
		startheight:500,

		onHoverStop:"off",						// Stop Banner Timet at Hover on Slide on/off

		thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
		thumbHeight:50,
		thumbAmount:3,

		hideThumbs:1,
		navigationType:"none",				// bullet, thumb, none
		navigationArrows:"solo",				// nexttobullets, solo (old name verticalcentered), none

		navigationStyle:"round-old",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom


		navigationHAlign:"center",				// Vertical Align top,center,bottom
		navigationVAlign:"bottom",					// Horizontal Align left,center,right
		navigationHOffset:0,
		navigationVOffset:10,

		soloArrowLeftHalign:"left",
		soloArrowLeftValign:"center",
		soloArrowLeftHOffset:20,
		soloArrowLeftVOffset:0,

		soloArrowRightHalign:"right",
		soloArrowRightValign:"center",
		soloArrowRightHOffset:20,
		soloArrowRightVOffset:0,

		touchenabled:"on",						// Enable Swipe Function : on/off


		stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
		stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

		hideCaptionAtLimit:0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
		hideAllCaptionAtLilmit:0,				// Hide all The Captions if Width of Browser is less then this value
		hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value


		fullWidth:"on",

		shadow:0								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)
	});

});
	
jQuery(document).ready(function() {	

jQuery(function() {
			jQuery(".meter > span").each(function() {
				jQuery(this)
					.data("origWidth", jQuery(this).width())
					.width(0)
					.animate({
						width: jQuery(this).data("origWidth")
					}, 1200);
			});
		});
  
 
/* Testminal */
  
   jQuery(function(){ 
			// Testimonials Setting    
        	jQuery('.testimonials ul').cycle({
				timeout: 4000, 
				fx:      'fade', 
				pause:   true,	
				cleartypeNoBg: true, 
				pauseOnPagerHover: 0
        });
		});
		
/* Scale vid */
	
	 jQuery(".scale_vid").fitVids();		
  
  
  
  
  });
  
  
jQuery(document).ready(function() {	

/* Supperfish */

jQuery('ul.sf-menu').superfish(
		 {
            delay: 200,
            animation: {
                opacity: "show",
                height: "show"
            },
            speed: "fast",
            autoArrows: false,
            dropShadows: false
        });  



});

		
/* Do it function  */

jQuery(document).ready(function() {	
	
	
	/* Tabs */
	tabsInit();
	
	/* accordion */
	accordion('.accordion-items','.accordion-item','.accordion-item-body','.accordion-item-header a');
	
	/* Style selector  */
	initConfigurator();
	
});

 /* Style selector  */
 
		function initConfigurator() {

						jQuery('#config_holder').css({display:'block'});
						jQuery('.config_slider').click(function()
							{
								var cm=jQuery('#menu_config');
								if (cm.hasClass('active'))
									cm.removeClass('active');
								else
									cm.addClass('active');
							});


						// Style switch
						jQuery('.switch_style').each(function() {

							jQuery(this).click(function() {
								jQuery('body').addClass('boxlayout').removeClass(jQuery(this).data('size'));
								jQuery('#menu_config ul li').each(function() {
										jQuery(this).addClass('selectedss')
								});
								jQuery(this).addClass('selectedss');
								try { jQuery(window).trigger('resize');
								} catch(e) {}
							})
						})
						setTimeout(function() {
								setTimeout(function() {
								},1000);

							},3000);


		}
		

/* accordion */
function accordion(b,bb,bbb,a){
	jQuery(a).click(function(e){
		if(jQuery(this).hasClass('active')){
			jQuery(this).removeClass('active').parents(bb).find(bbb).stop(true,true).slideUp(500,'easeOutQuad');
		}
		else{
			jQuery(this).parents(b).find(a+'.active').removeClass('active').parents(bb).find(bbb).stop(true,true).slideUp(500,'easeOutQuad');			
			jQuery(this).addClass('active').parents(bb).find(bbb).stop(true,true).slideDown(500,'easeOutQuad');
		}
		return false;
	});
	jQuery(b).each(function(index, element) {
		ax=jQuery(element).find(a+'.active');
		//if(!ax.size()){ax=jQuery(element).find(a).eq(0).addClass('active');}
		ax.parents(bb).find(bbb).slideDown(0);
	});
}
			
			

/* Carousel  */

jQuery(window).load(function(){
			jQuery('#carousel-works').carouFredSel({
				responsive: true,
				width: '100%',
				auto: false,
				circular	: false,
				infinite	: false,
				prev : {
					button		: "#prev_port",
					key			: "left",
						},
				next : {
					button		: "#next_port",
					key			: "right",
							},
				swipe: {
					onMouse: true,
					onTouch: true
					},
				items: {
					visible: {
						min: 1,
						max: 2
					}
				}
			});

		});

/* Tooltips Tipsy */

jQuery(window).load(function() {
			jQuery('.tool_tipsy').tipsy({gravity: $.fn.tipsy.autoNS, fade:true});
});
	

/* #Site Tabs */

function tabsInit() {
	
	/*
	* Skeleton V1.1
	* Copyright 2011, Dave Gamache
	* www.getskeleton.com
	* Free to use under the MIT license.
	* http://www.opensource.org/licenses/mit-license.php
	* 8/17/2011
	*/
	
	/* Tabs Activiation
	================================================== */

	var tabs = jQuery('ul.tabs');

	tabs.each(function(i) {

		//Get all tabs
		var tab = jQuery(this).find('> li > a');
		tab.click(function(e) {

			//Get Location of tab's content
			var contentLocation = jQuery(this).attr('href');

			//Let go if not a hashed one
			if(contentLocation.charAt(0)=="#") {

				e.preventDefault();

				//Make Tab Active
				tab.removeClass('active');
				jQuery(this).addClass('active');

				//Show Tab Content & add active class
				jQuery(contentLocation).show().addClass('active').siblings().hide().removeClass('active');

			}
		});
	});	
}

/*  Totop plugin   */

		jQuery(document).ready(function() {
			
			jQuery().UItoTop({
				scrollSpeed: 500,
				easingType: 'easeOutQuart' 
	 		});
		});
		
/* Color effect */
	
// Background color animation 
        jQuery(document).ready(function(){

				jQuery("a.button,button").hover(function() {
                jQuery(this).stop().animate({ backgroundColor: "#f1f1f1" }, 600);
                },function() {
                 jQuery(this).stop().animate({ backgroundColor: "#5ccaab" }, 400);
                });
				
				jQuery(".filter_wrapper ul li a, .current").hover(function() {
                jQuery(this).stop().animate({ backgroundColor: "#3c4548" }, 300);
                },function() {
                 jQuery(this).stop().animate({ backgroundColor: "#eee" }, 300);
                });
				
				jQuery("ul.sf-menu > li").hover(function() {
                jQuery(this).stop().animate({ backgroundColor: "#CC2A28" }, 200);
                },function() {
                 jQuery(this).stop().animate({ backgroundColor: "#e8e8e8" }, 200);
                });
				
 // font color animation 
                
				jQuery(".service_wrapper_inner h3 a").stop().hover(function() {
                jQuery(this).stop().animate({ color: "#5ccaab" }, 400);
                },function() {
                jQuery(this).animate({ color: "#333" }, 500);
                });
				
				jQuery(".view_title_port h4,.b_wrapper .home_time_wrap_holder h4").stop().hover(function() {
                jQuery(this).stop().animate({ color: "#5ccaab" }, 400);
                },function() {
                jQuery(this).animate({ color: "#4d4d4d" }, 500);
                });
				
				jQuery(".team_h_title a h2").stop().hover(function() {
                jQuery(this).stop().animate({ color: "#5ccaab" }, 400);
                },function() {
                jQuery(this).animate({ color: "#fff" }, 500);
                });
				
				jQuery(".quote_button_control a").stop().hover(function() {
                jQuery(this).stop().animate({ color: "#333" }, 300);
                },function() {
                jQuery(this).animate({ color: "#fff" }, 300);
                });
				
				jQuery(".subfooter .footer_nav a").stop().hover(function() {
                jQuery(this).stop().animate({ color: "#5ccaab" }, 200);
                },function() {
                jQuery(this).animate({ color: "#f1f1f1" }, 300);
                });
				
				jQuery(".hire_holder_inner .hire_t1 h1 a").stop().hover(function() {
                jQuery(this).stop().animate({ color: "#333" }, 200);
                },function() {
                jQuery(this).animate({ color: "#fff" }, 300);
                });
				
                jQuery(".view_title_port_p_2 h4").stop().hover(function() {
                jQuery(this).stop().animate({ color: "#4d4d4d" }, 400);
                },function() {
                jQuery(this).animate({ color: "#5ccaab" }, 500);
                });
				
				jQuery(".widget .categories li a").stop().hover(function() {
                jQuery(this).stop().animate({ color: "#5ccaab" }, 400);
                },function() {
                jQuery(this).animate({ color: "#555" }, 500);
                });
				
				jQuery(".sub_pb_title a").stop().hover(function() {
                jQuery(this).stop().animate({ color: "#555" }, 400);
                },function() {
                jQuery(this).animate({ color: "#5ccaab" }, 500);
                });
				
				jQuery(".view_title_port h4, .view_title_port_p h4").stop().hover(function() {
                jQuery(this).stop().animate({ color: "#5ccaab" }, 300);
                },function() {
                jQuery(this).animate({ color: "#4d4d4d" }, 300);
                });
				
				jQuery(".port_inner .text_soft").stop().hover(function() {
                jQuery(this).stop().animate({ color: "#5ccaab" }, 400);
                },function() {
                jQuery(this).animate({ color: "#c6c6c6" }, 500);
                });
				
				jQuery(".footer_support_inner a").stop().hover(function() {
                jQuery(this).stop().animate({ color: "#333" }, 400);
                },function() {
                jQuery(this).animate({ color: "#eee" }, 500);
                });
				
				jQuery(".port_sing_ti a").stop().hover(function() {
                jQuery(this).stop().animate({ color: "#5ccaab" }, 400);
                },function() {
                jQuery(this).animate({ color: "#333" }, 500);
                });
				
				jQuery(".blog_title a").stop().hover(function() {
                jQuery(this).stop().animate({ color: "#5ccaab" }, 400);
                },function() {
                jQuery(this).animate({ color: "#333" }, 500);
                });
				
				jQuery(".blog_post a.readmore_b h6").stop().hover(function() {
                jQuery(this).stop().animate({ color: "#5ccaab" }, 400);
                },function() {
                jQuery(this).animate({ color: "#333" }, 500);
                });
				
				jQuery(".date_b_wrapper a").stop().hover(function() {
                jQuery(this).stop().animate({ color: "#fdc53e" }, 400);
                },function() {
                jQuery(this).animate({ color: "#fff" }, 500);
                });
	
// border color animate	
				
				jQuery('.view_title').hover(function() {
	            jQuery(this).animate({ borderBottomColor: "#5ccaab" }, '400');
                },function() {
	            jQuery(this).animate({ borderBottomColor: "#e6e6e6" }, '500');
                });
				
				jQuery('.flickr_badge_image img').hover(function() {
	            jQuery(this).animate({ borderColor: "#5ccaab" }, '400');
                },function() {
	            jQuery(this).animate({ borderColor: "#e3e3e3" }, '500');
                });

  });