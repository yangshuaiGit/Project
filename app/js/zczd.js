define(function(require, exports, module){
	var content = require('../views/zczdShow.html');
	var _html = _.template( content );
	$("#zczdShow").html( _html({
		imgurl:['../images/seven.jpg']
		})
	);
})
