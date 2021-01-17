$('.show-filters').on('click', function() {

  if ($('.filters-list').is(':visible')) {
    $('.filters-list').slideUp()
    $('.show-filters').text('Show Filters')

  } else {
    $('.filters-list').slideDown()
    $('.show-filters').text('Hide Filters')
  }
  // Blocks default behaviour of href jumping to top of page with a hash 
  return false;

})

$('.filters-list a').on('click', function() {
 
  let filter = $(this).data('filter');
  
  $('.product').hide();
  $(filter).show();

  // Bug: ToDo fix this class not being removed 
  $('filters-list a').removeClass('selected');
  $(this).addClass('selected');
  
  return false;
})