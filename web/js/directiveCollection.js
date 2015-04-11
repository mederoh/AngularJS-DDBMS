(function() {
	var app = angular.module('directiveCollection', []);

	function injectSection(res, web) {
	}

	function prisonerList() {
		return {
			restrict: "E",
			templateUrl: "./html/prisonerList.html"
		};
	}

	function prisonMenu() {
		return {
			restrict: "E",
			templateUrl: "./html/prisonMenu.html"
		};
	}

	//app.directive("prisonerList", prisonerList);
	app.directive("prisonMenu", prisonMenu);
})();
