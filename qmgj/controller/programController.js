app.controller('programController',['$scope','$http',function($scope,$http){

	$scope.arr2=[];
	$http({
		url:'json/program.json',
		type:'get'
	}).success(function(res){
		$scope.Alist = res.all;
		$scope.Nlist = res.tvName;
		console.log(res);
		for(var i=0; i<res.all.length;i++){
			$scope.arr2[i]=parseInt(res.all[i].progress1)*3;
		}
		console.log($scope.arr2);
	});
		$scope.showAc = 0;
		$scope.myfilter = {'status':''};
    	$scope.checkContent = function(i){
    		$scope.myfilter.status =  ['',0,1,2,3,4,5,6,7,8,9][i];
	    	$scope.showAc = i;
        }
}])