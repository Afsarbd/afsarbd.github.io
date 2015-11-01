jQuery(function($) {
  function fixDiv() {
    var $cache = $('#header_section');
    if ($(window).scrollTop() > 100)
      $cache.css({
        'position': 'fixed',
        'top': '0px',
		'zIndex':'9999999',
		'width':'100%'
		
      });
    else
      $cache.css({
        'position': 'relative',
        'top': 'auto'
      });
  }
  $(window).scroll(fixDiv);
  fixDiv();
});
