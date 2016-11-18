define(function(require,exports,module){
	var Header = {
		initPage: function(){
			this.scFn();
			this.menuFn();
		},
		scFn: function(){
			$('.logo-rt .sc').click(function(){
				alert('加入收藏失败，请使用Ctrl+D添加');
			});
		},
		menuFn: function(){
			$('.nav .top').hover(function(){
				$(this).find('.sub').show();
			},function(){
				$(this).find('.sub').hide();
			});
			$('.nav .top').click(function(){
				$(this).addClass('active').siblings().removeClass('active');
			});
		}
	}
	module.exports = Header;
})