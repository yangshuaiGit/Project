		$(function(){
			var colors = ['#253d6f','#aad004','#fcbc13','#08bece','#e01451','#ba39d6'];
			$('.right>li').click(function(){
				var $index = $(this).index();
				$(this).css({"background-positionY":"-15px"}).siblings().css({"background-positionY":"0px"});
				$('.nav').css({"background-color":colors[$index]});
				$('.top-t').css({"background-color":colors[$index]});
			});     
  
			// 图片推动轮播  shoes
			$('.con-bottom-right li').click(function(){
	          index = $(this).index();
	          $('.shoes-box').animate({'left':-index*781+'px'},1000);
	          $(this).addClass('shoes-active').siblings().removeClass('shoes-active');
	       	});

			// 遮罩显示
	       	$('.shoes li img').mouseover(function(){
               $(this).addClass('shoes-mask');
	       	}).mouseout(function(){
	       		$(this).removeClass('shoes-mask')
	       	});

	       	// 鼠标右下角显示
	       	$('.update-at li').mousemove(function(e){
              $('.add-p').text($(this).text());
			  $('.add-p').show().css({
					'left':e.pageX + 10 + 'px',
					'top':e.pageY + 20 + 'px',
			  });
	       	}).mouseout(function(e){
	       		$('.add-p').hide();
	       	});

	       	// nav 显示
	       	$('.nav-hover').mouseover(function(){
	       		$('.second-li',$(this)).show();
	       	}).mouseout(function(){
	       		$('.second-li').hide();
	       	});

	       	// 按钮点击
       		$('.pro-about-show li').eq(0).show().siblings().hide();
	       	$('.btn button').click(function(){
	       		var index = $(this).index();
	       		$(this).addClass("btn-active").siblings().removeClass("btn-active");
	       		$('.pro-about-show li').eq(index).show().siblings().hide();
	       	});

	       	// 选择衣服
	       
	       	var corlorTxt = ['蓝白','黄色','天蓝色'];
	       	$('.cloth-color li').click(function(){
	       		var index = $(this).index();
	       		$(this).addClass('color-border').siblings().removeClass('color-border');
	       		$('.p1 span').text(corlorTxt[index]);

	       		$('.show-one').eq(index).show().siblings().hide();

	       		var $src = $('img',$(this)).attr('src').split('.')[0];
	       		$('.pro-show img').attr('src',$src+'_one_small.jpg');
	       		$('.pro-show img').attr('rel',$src+'_one_big.jpg');
	       		$('.bd img').attr('src',$src+'_one_small.jpg');
	       	});

	       
	       	// 放大镜
	       	$('.show-one').eq(0).show().siblings().hide();
       		$('.show-one li').click(function(){
       			var _src = $('img',$(this)).attr('src').split('.')[0];
       			$('.pro-show img').attr('src',_src+'_small.jpg');
       			$('.pro-show img').attr('rel',_src+'_big.jpg');
       			$('.bd img').attr('src',_src+'_small.jpg');
       		});
       		// 放大镜
       		$(".jqzoom").imagezoom({
			xzoom: 310,
			yzoom: 310,
			offset: 15
			});
       		
			// 查看高清图片
			$('.look').click(function(){

				// $('.bd img',$(this)).show().siblings().hide();
				$('.look-box').fadeIn(200);

			});

			// $(".look-box").slide({mainCell:".bd ul",effect:"fade",autoPlay:false});

			$('.hide').click(function(){
				$('.look-box').fadeOut(200);
			});

	       	// 选择尺寸
	       	$('.size li').click(function(){
	       		var txt = $(this).text();
	       		$('.p2 span').text(txt);
	       		$(this).css({"background-color":"red"}).siblings().css({"background-color":""});
	       	});


	       	// 评分
	       	$('.star li').mousemove(function(){
 				var _index = $(this).index();
 				$('.star-img').addClass('hover'+_index);
	       	}).mouseout(function(event){
 				var _index = $(this).index();
 				$('.star-img').removeClass('hover'+ _index);

	       	}).click(function(){
	       		var _index = $(this).index();
	       		$('.star-img').attr("class","star-img").addClass('click'+_index);

	       	});
		});
	// <!--轮播图 定时器 -->
		$(function(){
			var index = 0;
			var timer = setInterval(runloop,2000);
			function runloop(){
	           if(index == 5) {index = 0;}
	           $('.imgList>li').eq(index).show().siblings().hide();
	           $('.indicator li').eq(index).addClass('active').siblings().removeClass('active');
			   index++; 
			}

	       $('.indicator li')
	       .mouseover(function(){
	       	clearInterval(timer);
	          index = $(this).index();
	          $('.imgList>li').eq(index).show().siblings().hide();
	          $(this).addClass('active').siblings().removeClass('active');
	       });
	       $('.indicator li').mouseout(function(){
	         index = $(this).index();
	         timer = setInterval(runloop,2000);
	      	 });
		});
