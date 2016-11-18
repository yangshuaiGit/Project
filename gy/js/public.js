define(function(require,exports,module){
	var header = require('../views/headerView.html');
	var headerjs = require('../js/header.js');
	var footer = require('../views/footerView.html');
	var Public = {
		init: function(){
			var _header = _.template( header );
			$('#header').html( _header() );
			headerjs.initPage();

			var _footer = _.template( footer );
			$('#footer').html( _footer() );
		}
	}
	module.exports = Public;
});