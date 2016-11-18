app.controller('personalController',['$scope','$http',function($scope,$http){
	$scope.Active=0;
	$scope.mycl = function(i){
			$scope.Active = i;
	}

	// 个人信息

	$http({
		url:'json/sefy.json',
		type:'get'
		}).success(function(res){
			$scope.pList = res;
			console.log(res);
		});



	$http({
		url:'json/ring.json',
		type:'get'
		}).success(function(res){
			$scope.ringList = res;
			// console.log(res);
		});

	$scope.toggle = false;

	$scope.showPer=[];
	$scope.showPer[0]=true;
	$scope.showPer[8]=true;
	// $scope.active = 0;
	$scope.Perclick = function(index){
		$scope.showPer[index]=!$scope.showPer[index];
	} 
	// 购买记录
	$http({
		url:'json/test.json',
		type:'get'
		}).success(function(res){
			$scope.test = res.data.list;
		});

		$scope.showAc = 0;
		$scope.myfilter = {'status':''};
    	$scope.checkContent = function(i){
    		$scope.myfilter.status =  ['',0,1][i];
	    	$scope.showAc = i;
        }



        $scope.arr=[];
        $scope.arr1=[];
        $http({
        	url:'json/create.json'
        }).success(function(res){
        	$scope.perList=res.per;
        	$scope.per1List=res.per1;
        	for(var i=0; i<res.per.length;i++){
        		$scope.arr[i]=parseInt(res.per[i].progress1)*2;
        	}
        	// console.log($scope.arr);
        	for(var i=0; i<res.per1.length;i++){
        		$scope.arr1[i]=parseInt(res.per1[i].progress1)*2.2;
        	}
        	// console.log($scope.arr1);
        });
}])