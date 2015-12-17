$(document).ready(function() {
	//adds item to list
	function addItem(){
		$('ul').append('<li><i class="fa fa-square-o"></i><i class="fa fa-times"></i><i class="fa fa-pencil"></i><i class="fa fa-sticky-note-o"></i>' + $('input#add-item').val() +'</li>');
		$('input').val(''); //clears item from text field
	}
	//allows button to be clicked to add item
	$('#add-button').click(function(){
		addItem();
	});

	//allows enter key to be pressed to add item
	function enterItem(){
		$('#add-item').keydown(function(enter){
			if(enter.keyCode === 13){
				addItem();
			}
		});

	}

	enterItem();

	//removes items from the list
	$(document).on('click', '.fa-times', function(){
		$(this).closest('li').remove();
		console.log("removing");
	});
	
});