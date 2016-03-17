
var app = (function(document, $) {

	'use strict';
	var docElem = document.documentElement,

		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
			_userAgentInit();
		};

	return {
		init: _init
	};

})(document, jQuery);

(function() {

	'use strict';
	app.init();

})();



function showDiv(idInfo) {
  var sel = document.getElementById('divLinks').getElementsByTagName('div');
  for (var i=0; i<sel.length; i++) {
    sel[i].style.display = 'none';
  }
  document.getElementById('container'+idInfo).style.display = 'block';
}

// $('#person').on('click', 'div.toggler', function(){
//     $(this).next().toggle(350);
// });
//
$('.linktorest').click(function(){
    $('#og_contain').hide();
});
//
// var feed = new Instafeed({
// 		get: 'tagged',
// 		tagName: 'awesome',
// 		clientId: 'YOUR_CLIENT_ID'
// });
// feed.run();
//
//
// $('#reveal-insta').click(function(){
// 	$('#instafeed').slideToggle('slow');
// });
