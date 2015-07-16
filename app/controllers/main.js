'use strict';

class MainController {
	constructor($scope) {
		$scope.message = "It worked!"
	}
}
MainController.$inject = [
	"$scope"
];

export {
	MainController
}
