	app.controller('passwordController', ['$scope','$interval', function($scope,$interval){
			$scope.curTime = 60;
			$scope.click= function(){
				$scope.showA=true;
	    		var timer = $interval(function(){
						$scope.curTime --;
						if($scope.curTime<1){
							$interval.cancel(timer);
						}
					},1000);

        	}
}]);