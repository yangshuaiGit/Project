app.controller('detailController',['$scope','$stateParams','$http',function($scope,$stateParams,$http){
	$scope.showActive=0;
	$scope.myclick = function(i){
			$scope.showActive = i;
	}
	console.log($stateParams);
	$http({
		url: 'json/detail'+$stateParams.id+'.json'
	}).success(function(res){
		$scope.left1 = res.left1;
		$scope.right1 = res.right1;
		$scope.show = res.show;
		// console.log($scope.detail);
	})
}])