function addListItem() {
	var text = $('#new-text').val();
	$('#shoppinglist').append('<div class="newtextdiv"><input type="checkbox"> <li>'+text+'</li> <button type="button" class="btn btn-default btn-sm"></div>');
}

$(document).ready(function(){

	$('#add').on('click', addListItem);

});