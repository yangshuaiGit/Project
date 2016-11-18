define(function(require, exports, module){
	var content = require('../views/messageShow.html');
	var _html = _.template( content );
	$("#messageShow").html( _html({
		imgurl:['../images/seven.jpg']
		})
	);
})
