$(document).ready(function() {
	$('#add-button').click(function(){
		$('ul').append('<i class="fa fa-square-o"></i><i class="fa fa-times"></i><i class="fa fa-pencil"></i><i class="fa fa-sticky-note-o"></i><li>' + $('input#add-item').val() +'</li>');

	}
	
);
		

	
})