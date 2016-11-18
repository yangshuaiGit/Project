
define(function(require,exports,module){
  var header = require('../views/headerView.html');
  var headerjs = require('../js/header.js');
  var footer = require('../views/footerView.html');

	var Volunteer={
       initPage:function(){
          this.volunteer();
          this.showView(); 
       },
      showView: function(){
      var _header = _.template( header );
      $('#header').html( _header() );
      headerjs.initPage();

      var _footer = _.template( footer );
      $('#footer').html( _footer() );
      },

      
       volunteer:function(){
         var _html=require('../views/volunteer.html');
         var volunteerhtml=_.template(_html);
         $.ajax({
          type:'get',
          url:'../json/xzh.json',
          success:function(data){
         		$('.volunteer').html(volunteerhtml({data:data}));
            $('.nav .top').eq(4).addClass('active').siblings().removeClass('active');
            $('.select-year li').click(function(){
              var $index=$(this).index();
              $('.photo ul').eq($index).show().siblings().hide();
              $(this).addClass('active').siblings().removeClass('active')
            })
           
         	}
         })
       }
 
	}
	module.exports = Volunteer;
})