$(document).on('scroll', function () {
  //scrollTop gives back pixel value for how far it is from the top of the page
  //(from current position)
  let pixelsFromTop = $(document).scrollTop()
  
  if (pixelsFromTop >= 50) {
    $('header').addClass('hidden')
  } else {
    $('header').removeClass('hidden')
  }

  if (pixelsFromTop < 600) {
    $('body').css('background-color', '#fff')
  } else if (pixelsFromTop < 1400) {
    $('body').css('background-color', 'a29c97')
  } else if (pixelsFromTop < 2200) {
    $('body').css('background-color', 'd9dfd4')
  }else if (pixelsFromTop < 3000) {
    $('body').css('background-color', 'fff0f0')
  } else {
    $('body').css('background-color', 'cdccc7')
  }

  let windowHeight = $(window).height()
  let documentHeight = $(document).height()
  let difference = documentHeight - windowHeight
  
  let percentage = 100 * pixelsFromTop / difference
  
  $('div.progress div.bar').css('width', percentage + '%')
 
})  