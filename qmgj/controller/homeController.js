app.controller('homeController', ["$scope","$rootScope","$interval","$http",function($scope,$rootScope,$interval,$http){
		$scope.arr=[];
		$scope.arr1=[];
		$http({
			url:'json/create.json',
			type:'get'
		}).success(function(res){
			$scope.List = res.list;
			$scope.Hlist = res.hot;
			// $scope.progress = res.hot.id;
			$scope.Rlist = res.rec;
			$scope.Nlist = res.name;
			$scope.Ilist = res.img;

			for(var i=0; i<res.hot.length;i++){
				// 先定义一个空数组，在存到空数组里
				$scope.arr[i]=parseInt(res.hot[i].progress1)*5;
			}
			for(var i=0; i< res.rec.length;i++){
				$scope.arr1[i]=parseInt(res.rec[i].progress1)*3;
			}
			console.log($scope.arr);
		});
		$scope.showIndex = 0;
		$interval(function(){
			if( $scope.showIndex >=$scope.List.length-1 ){
				$scope.showIndex = 0;
				return;
			} 
			++$scope.showIndex;
		},2000);



		$scope.showActive=4;
		$scope.myclick = function(index){
			$scope.showActive = index;
		}
			
    }]);