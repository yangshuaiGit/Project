define(function(require,expores,module){
	var header = require('../views/headerView.html');
	var headerjs = require('../js/header.js');
	var footer = require('../views/footerView.html');
	var home = require('../views/homeView.html');

	var Home = {
		initPage: function(){
			this.showView();
			this.slideFn();
			this.dtFn();
			this.hdjnFn();
			this.ybFn();
			this.topcontrol();
		},
		showView: function(){
			var _header = _.template( header );
			$('#header').html( _header() );
			headerjs.initPage();

			var _footer = _.template( footer );
			$('#footer').html( _footer() );

			var _home = _.template( home );
			$('#home').html( _home() );
			
		},
		slideFn: function(){
			var showIndex = 0;
			$('.slider-nav li').eq(0).addClass('active');
			var timer = setInterval(function(){
				$('.slider-con').animate({"left":-showIndex*1000},1000);
				$('.slider-nav li').eq(showIndex).addClass('active').siblings().removeClass('active');
				showIndex++;
				if(showIndex > 6){
					showIndex = 0;
				}
			},4000);
			$('.slider-nav li').hover(function(){
				showIndex = $(this).index();
				$('.slider-con').animate({"left":-showIndex*1000},1000);
				$('.slider-nav li').eq(showIndex).addClass('active').siblings().removeClass('active');
				clearInterval(timer);
			},function(){
				timer = setInterval(function(){
					$('.slider-con').animate({"left":-showIndex*1000},1000);
					$('.slider-nav li').eq(showIndex).addClass('active').siblings().removeClass('active');
					showIndex++;
					if(showIndex > 6){
						showIndex = 0;
					}
				},4000);
			});
			// prev
			$('.slider .prev').click(function(){
				showIndex--;
				if(showIndex < 0){
					showIndex = 6;
				}
				$('.slider-con').animate({"left":-showIndex*1000},1000);
				$('.slider-nav li').eq(showIndex).addClass('active').siblings().removeClass('active');
				
			})
			// next
			$('.slider .next').click(function(){
				showIndex++;
				if(showIndex > 6 ){
					showIndex = 0;
				}
				$('.slider-con').animate({"left":-showIndex*1000},1000);
				$('.slider-nav li').eq(showIndex).addClass('active').siblings().removeClass('active');
				
			})
		},
		dtFn: function(){
			var showIndex = 0;
			var timer = setInterval(function(){
				$('.con-box').animate({"left":-showIndex*728},1000);
				$('.hd span').eq(showIndex).addClass('on').siblings().removeClass('on');
				showIndex++;
				if(showIndex > 2){
					showIndex = 0;
				}
			},3000);

			$('.con-box li').hover(function(){
				clearInterval(timer);
			},function(){
				timer = setInterval(function(){
					$('.con-box').animate({"left":-showIndex*728},1000);
					$('.hd span').eq(showIndex).addClass('on').siblings().removeClass('on');
					showIndex++;
					if(showIndex > 2){
						showIndex = 0;
					}
				},3000);
			});

			$('.hd .prev').click(function(){
				showIndex--;
				if(showIndex < 0){
					showIndex = 2;
				}
				$('.con-box').animate({"left":-showIndex*728},1000);
				$('.hd span').eq(showIndex).addClass('on').siblings().removeClass('on');
			});
			$('.hd .next').click(function(){
				showIndex++;
				if(showIndex > 2 ){
					showIndex = 0;
				}
				$('.con-box').animate({"left":-showIndex*728},1000);
				$('.hd span').eq(showIndex).addClass('on').siblings().removeClass('on');
			});
		},
		hdjnFn: function(){
			var showIndex = 0;
			$('.pic-prev').click(function(){
				showIndex--;
				if(showIndex < 0){
					showIndex = 0;
				}
				$('.piclist').animate({"left":-showIndex*345},500);
			});
			$('.pic-next').click(function(){
				showIndex++;
				if(showIndex > 2){
					showIndex=2;
				}
				$('.piclist').animate({"left":-showIndex*345},500);
			})
		},
		ybFn: function(){
			var showIndex = 0;
			$('.yb-prev').click(function(){
				showIndex--;
				if(showIndex < 0){
					showIndex = 2;
				}
				$('.yb-list').animate({"left":-showIndex*230},300);
			});
			$('.yb-next').click(function(){
				showIndex++;
				if(showIndex > 2){
					showIndex=0;
				}
				$('.yb-list').animate({"left":-showIndex*230},300);
			})
		},
		topcontrol: function(){
			$(window).scroll(function(){
				$(window).scrollTop()>100 ? $('.topcontrol').fadeIn():$('.topcontrol').fadeOut();
			});
		}
	}
	module.exports = Home;
})