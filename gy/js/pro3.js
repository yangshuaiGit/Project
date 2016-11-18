define(function(require,exports,module){
	var _html = require('../views/pro3.html');

	var Project = {
		initPage:function(){
			this.proFn();
		},
		proFn:function(){
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