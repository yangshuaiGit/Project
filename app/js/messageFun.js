define(function(require,exports,module){
	var Util = {
		active: function(){
			$('.zy-header .menu .top').eq(6).addClass('active').siblings().removeClass('active');
		},
		
	}
	module.exports = Util;
})