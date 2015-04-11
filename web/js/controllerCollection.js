(function() {
	var app = angular.module('controllerCollection', ['ngTable', 'ui.bootstrap']);

	function collapseController($scope) {
		$scope.isCollapsed = true;
	}

	function loadData($scope, $http, php) {
		$http.get('./php/contentInfo.php?wban=' + $scope.ID)
		.success(function(data) {
			$scope.data = data[0];
		});
	}

	function prisonTable($scope, $http, $filter, ngTableParams) {
		$http.get('./php/content.php')
		.success(function(data) {
        	$scope.data = data;

			$scope.tableParams = new ngTableParams({
        			page   : 1,            // show first page
	        		count  : 10
			}, {
				counts : [],
				total  : $scope.data.length, // length of data
	        	getData: function($defer, params) {
					var filteredData = params.filter() ?
							$filter('filter')($scope.data, params.filter()) :
							getData(dataKey);

					var orderedData = params.sorting() ?
							$filter('orderBy')(filteredData, params.orderBy()) :
							filteredData;

					params.total(orderedData.length);
					$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        		}
			});
		});
	}



	app.controller('CollapseCtrl', ['$scope', collapseController]);
	app.controller('PrisonTableCtrl', ['$scope', '$http', '$filter', 'ngTableParams', prisonTable]);
	app.controller('InfoLoadCtrl', ['$scope', '$http', loadData]);
})();
