define(function(require,exports,module){
	var header = require('../views/headerView.html');
	var headerjs = require('../js/header.js');
	var footer = require('../views/footerView.html');
	var _html = require('../views/pro4.html');

	var Project = {
		initPage:function(){
			this.proFn();
		},
		proFn:function(){
			

			var _header = _.template( header );
			$('#header').html( _header() );
			headerjs.initPage();

			var _footer = _.template( footer );
			$('#footer').html( _footer() );

			var _htmlFn = _.template(_html);
			$.ajax({
				url:'../json/project.json',
				success:function(res){
					var aboutR = res.aboutR;
					$('.con').html(_htmlFn({
						aboutR:aboutR
					}));
				}
			})
			$('.nav .top').eq(2).addClass('active').siblings().removeClass('active');
		}
	}
	module.exports = Project;
})