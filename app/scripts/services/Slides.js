'use strict';

angular
		.module('togozikApp')
		.factory(
				'Slides',
				function(angularFireCollection,fbUrl ) {
					// Service logic
					// ...

					var slideShowData = angularFireCollection(fbUrl);

					// Public API here
					/*
					 * return { getSlides: function () { return slides; } };
					 */
					
					return slideShowData;
				});
