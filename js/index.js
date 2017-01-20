/*social modules*/
$(document).ready(function() {
	$(".social-modules").mouseenter(function() {
		$(this).find(".expand-icon").css({
			"width": "50px",
			"transition": "500ms"
		}); //expand
		$(this).find(".expand-text").css({
			"width": "100px",
			"transition": "500ms"
		}); //text
		$(this).mouseleave(function() {
			$(this).find(".expand-icon").css({
				"width": "0",
				"transition": "500ms"
			}); //expand
			$(this).find(".expand-text").css({
				"width": "150px",
				"transition": "500ms"
			}); //text
		}); //mouseleave
	}); //mouseenter
}); //ready