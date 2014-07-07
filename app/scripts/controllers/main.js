'use strict';

angular.module('bgblenderApp')
	.controller('MainCtrl', function($scope) {

		$scope.blendOptions = ["normal",
			"multiply",
			"screen",
			"overlay",
			"darken",
			"lighten",
			"color-dodge",
			"color-burn",
			"hard-light",
			"soft-light",
			"difference",
			"exclusion",
			"hue",
			"saturation",
			"color",
			"luminosity"
		];

	});