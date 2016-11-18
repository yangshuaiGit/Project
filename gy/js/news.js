
define(function(require,exports,module){
  var header = require('../views/headerView.html');
  var headerjs = require('../js/header.js');
  var footer = require('../views/footerView.html');

	var News={
       initPage:function(){
          this.news();
          this.showView(); 
       },
      showView: function(){
      var _header = _.template( header );
      $('#header').html( _header() );
      headerjs.initPage();

      var _footer = _.template( footer );
      $('#footer').html( _footer() );
      },

      
       news:function(){
         var _html=require('../views/news.html');
         var newshtml=_.template(_html);
         $.ajax({
          type:'get',
          url:'../json/xzh.json',
          success:function(data){
         		$('.news').html(newshtml({data:data}));
            $('.nav .top').eq(3).addClass('active').siblings().removeClass('active');
            $('.left-menu a').click(function(){
              $(this).addClass('current').parent('li').siblings('li').find('a').removeClass('current');

            })

            $('.page a').click(function(){
              $(this).addClass('active').parent('li').siblings('li').find('a').removeClass('active');
            });
            $('.left-menu li').eq(1).click(function(){
              $('.news-list li:lt(9)').hide()
            })
         	}
         })
       }
 
	}
	module.exports = News;
})