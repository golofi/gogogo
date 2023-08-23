$('.linkmovie').map(function(i, l) {
  var movie_url = l.getAttribute('data-src'); 
  var video_wrap = $(l).parent().find('.videopv')
  video_wrap.show()
  $(l).parent().find('.title-img').hide()
  $(video_wrap.find('a')[0]).html('<video autoplay loop><source src="' + movie_url + '" type="video/mp4"></video>')
})
