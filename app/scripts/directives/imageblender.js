'use strict';

angular.module('bgblenderApp')
	.directive('imageBlender', function() {
		return {
			templateUrl: '/views/directives/imageBlender.html',
			restrict: 'E',
			scope: {
				bgColor: "="
			},
			link: function postLink(scope, element, attrs) {
				scope.$watch("bgColor", function(newVal, oldVal) {
					newVal = newVal[0] == "#" ? newVal : "#" + newVal;
					element.find("#bg").css("background-color", newVal);
				});
			},
			controller: function($scope) {

				

			}
		};
	});