define(function(require,exports,module){

	var header = require('../views/headerView.html');
	var headerjs = require('../js/header.js');
	var footer = require('../views/footerView.html');
	var _html = require('../views/ab3.html');

	var About = {
		initPage:function(){
			this.aboutFn();
		},
		aboutFn:function(){
			var that = this;
			var _header = _.template( header );
			$('#header').html( _header() );
			headerjs.initPage();

			var _footer = _.template( footer );
			$('#footer').html( _footer() );


			var _htmlFn = _.template(_html);
			$('.con').html(_html);
			$('.nav .top').eq(1).addClass('active').siblings().removeClass('active');

		}
	}
	module.exports = About;
})