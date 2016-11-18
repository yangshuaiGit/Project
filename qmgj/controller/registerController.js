	app.controller('registerController', ['$scope','$interval', function($scope,$interval){
			$scope.curTime = 60;
			$scope.myclick1 = function(){
				$scope.show=true;
	    		var timer = $interval(function(){
						$scope.curTime --;
						if($scope.curTime<1){
							$interval.cancel(timer);
						}
					},1000);
        	}


        	$scope.showActive=0;
			$scope.myclick = function(){
				if($scope.showActive==1){
					$scope.showActive = 0;
				}else{
					$scope.showActive = 1;
				}
			}
		}]);