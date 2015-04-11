(function() {
	var app = angular.module('main', ['controllerCollection', 'directiveCollection'])
		.controller("MainCtrl", ["$scope", "$window", function($scope, $window) {
			$scope.showMenuHTML = false;
			$scope.menuHTML = null;
			$scope.contentHTML = null;

			$scope.changeMenu = function(menuHTML) {
				$scope.menuHTML = "./html/menu/" + menuHTML + ".html";
				$scope.showMenuHTML = true;
			}

			$scope.changeContent = function(htmlPage) {
				$scope.contentHTML = "./html/content/" + htmlPage + ".html";
			}

			$scope.changePage = function(page) {
				alert(page);
			}

			$scope.init =  function() {
				$scope.contentHTML = "./html/homePage.html";
			}

			$scope.loadInfo = function(id) {
				$scope.ID = id;
				$scope.contentHTML = "./html/content/loadInfo.html"
			}

			$scope.init();
	}]);
})();
