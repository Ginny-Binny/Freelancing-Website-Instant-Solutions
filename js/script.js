			//Here is the initializer script for the full width image rotator
			jQuery(function($){		
				$.supersized({
					slides  :  	[ 
					{image : 'images/image1.jpg'}, 
                    {image : 'images/image2.jpg'},
                    {image : 'images/image3.jpg'}
					]
				});
		    });

            //The script of the Jquery email validation
		    $(document).ready(function() {
                $('input.submit').click(function(event) {
                    var sEmail = $('input#email').val();
                    if (!$.trim($('input#email').val())) {
                        $('input.email').css({'background-color':'rgba(255,0,0,0.3)','border':'1px solid red'});
                        event.preventDefault();//stops script execution
                    }
                    if (!$.trim($("textarea").val())) {
                        $('textarea').css({'background-color':'rgba(255,0,0,0.3)','border':'1px solid red'});
                        event.preventDefault();//stops script execution
                    } else {
                        $('textarea').css({'background-color':'rgba(0,255,0,0.2)','border':'1px solid rgba(0,255,0,0.6)'}).delay(2000);
                    }
                    if (!$.trim($("input#name").val())) {
                        $('input#name').css({'background-color':'rgba(255,0,0,0.3)','border':'1px solid red'});
                        event.preventDefault();//stops script execution
                    } else {
                        $('input#name').css({'background-color':'rgba(0,255,0,0.2)','border':'1px solid rgba(0,255,0,0.6)'}).delay(2000);
                    }
                    if (validateEmail(sEmail)) {
                        $('input#email').css({'background-color':'rgba(0,255,0,0.3)','border':'1px solid rgba(0,255,0,0.6)'}).delay(2000);
                    } else {
                        $('input#email').css({'background-color':'rgba(255,0,0,0.3)','border':'1px solid red'});
                        event.preventDefault();
                        return false;
                    }
                });
            });

            function validateEmail(sEmail) {
                var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
                if (filter.test(sEmail)) {return true;}
            else {return false;}
            }


		// COUNTDOWN OPTIONS //
        $(function () {
 	            $('#countdown').countdown({until:$.countdown.UTCDate
 	
 	            // Set the date to countdown to
                //Don't be scared by -0, -1, just edit the rest
 	            (-0, 2014,  01 -1, 06), 
 	            // Set the URL to load when the countdown reaches 0 0 0 0
 	            // expiryUrl:'http://yournewsite.com', 
 	
 	            //END OPTIONS
 	            format: 'dHMS', layout:
                '<span class="numbers">' + 
	                '<span id="timer_days" class="timer_numbers">{dnn}</span>'+
	                '<span id="timer_hours" class="timer_numbers">{hnn}</span>'+
	                '<span id="timer_mins" class="timer_numbers">{mnn}</span>'+
	                '<span id="timer_seconds" class="timer_numbers">{snn}</span>'+
                    '<span class="labels">'+
	                    '<span id="timer_days_label" class="timer_labels">days</span>'+
	                    '<span id="timer_hours_label" class="timer_labels">hours</span>'+
	                    '<span id="timer_mins_label" class="timer_labels">minutes</span>'+
	                    '<span id="timer_seconds_label" class="timer_labels">seconds</span>'+
                    '</span>'+
                '</span>'
                });
            });
