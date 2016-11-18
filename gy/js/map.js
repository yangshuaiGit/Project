define(function(require, exports, module) {
    var showMap = {
        show: function() {
            $('.zy-header .menu .top').eq(5).addClass('active').siblings().removeClass('active');
            // 百度地图API功能
            var map = new BMap.Map('mapShow');
            // 初始化地图,设置中心点坐标和地图级别
            map.centerAndZoom(new BMap.Point(113.674966, 34.780754), 13);
            // 创建Map实例
            map.addControl(new BMap.MapTypeControl());
            //添加地图类型控件
            map.setCurrentCity("郑州");
            // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true);
            //开启鼠标滚轮缩放
            var top_left_control = new BMap.ScaleControl({
                anchor: BMAP_ANCHOR_TOP_LEFT
            });
            // 左上角，添加比例尺
            var top_left_navigation = new BMap.NavigationControl();
            //左上角，添加默认缩放平移控件
            map.addControl(top_left_control);
            map.addControl(top_left_navigation);

            function addMarker(point) {
                var marker = new BMap.Marker(point);
                map.addOverlay(marker);
            };
            //单击获取点击的经纬度
            map.addEventListener("click", function(e) {
                addMarker(new BMap.Point(e.point.lng, e.point.lat));
            });
        },
    }
    module.exports = showMap;
});
