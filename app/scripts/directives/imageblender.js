'use strict';

angular.module('bgblenderApp')
	.directive('imageBlender', function() {
		return {
			templateUrl: '/views/directives/imageBlender.html',
			restrict: 'E',
			scope: {
				bgColor: "=",
				imgUrl: "=",
				blendMode: "="
			},
			link: function postLink(scope, element, attrs) {

				scope.$watch("bgColor", function(newVal, oldVal) {
					newVal = newVal[0] == "#" ? newVal : "#" + newVal;
					element.find("#bg").css("background-color", newVal);
				});

				scope.$watch("imgUrl", function(newVal, oldVal) {

					var el = element.find("#bg"),
						img = new Image();

					img.src = newVal;
					img.onload = function() {
						el.css("background-image", "url(" + this.src + ")");
						el.css("width", this.width);
						el.css("height", this.height);
					};
				});

				scope.$watch("blendMode", function(newVal, oldVal) {
					element.find("#bg").css("background-blend-mode", newVal);
				});
			},
			controller: function($scope) {

			}
		};
	});