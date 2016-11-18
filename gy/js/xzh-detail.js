
define(function(require,exports,module){
  var header = require('../views/headerView.html');
  var headerjs = require('../js/header.js');


	var News={
       initPage:function(){
          this.detail()
          this.showView(); 
       },
      showView: function(){
      var _header = _.template( header );
      $('#header').html( _header() );
      headerjs.initPage();


      },
      detail:function(){
        $('.right li').click(function(){
          $(this).addClass('cur').siblings().removeClass('cur');
          var $index=$(this).index();
          $('.left .img img').eq($index).show().siblings().hide()
        })
      }


      
      
	}
	module.exports = News;
})