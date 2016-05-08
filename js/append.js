function addListItem() {
	var text = $('#new-text').val();
	$('#shoppinglist').append('<div class="newtextdiv"><input class="strike" type="checkbox"> <li>'+text+'</li> <button class="delete" type="button"><span class="glyphicon glyphicon-trash"></span></button></div>');
	$('#new-text').val('');
}
//----------remove function --------------//
function deleteItem() {
	$(this).parent().remove();
}
//---------remove function ---------------//


$(document).ready(function(){
//--- # is for id's and . is for classes --//
	$('#add').on('click', addListItem);
	$('.delete').on('click', deleteItem);

	$(document).on('click', '.delete', deleteItem);
})