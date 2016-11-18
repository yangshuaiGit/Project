app.controller('loginController',['$scope',function($scope){
	$scope.showActive=0;
	$scope.myclick = function(){
		if($scope.showActive==1){
			$scope.showActive = 0;
		}else{
			$scope.showActive = 1;
		}
	}
}])