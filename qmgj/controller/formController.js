app.controller('formController',['$scope','$http',function($scope,$http){

	$http({
		url:'json/ring.json',
		type:'get'
	}).success(function(res){
		$scope.imgList = res;
	});
	$scope.showActive=0;
	$scope.myclick = function(index){
		$scope.showActive = index;
	}


	$http({
		url:'json/form.json',
		type:'get'
	}).success(function(res){
		$scope.form1 = res.form1;
		$scope.form2 = res.form2;
		$scope.form3 = res.form3;
	});
}])