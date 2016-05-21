
jQuery(document).ready(function(event){
	updateGradient();
	//circleFX();
	$(window).click(function(){
  		$(".machine-title").addClass("blur");
  		
		setTimeout(function() {
			$(".machine-title").addClass("hidden");
		},3000);
  		$(".machine-title").dequeue();
	});
	



});
