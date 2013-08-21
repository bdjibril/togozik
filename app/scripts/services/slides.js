'use strict';

angular
		.module('togozikApp')
		.factory(
				'slides',
				function(angularFireCollection,fbUrl ) {

					var slideShowData = angularFireCollection(fbUrl);

					return slideShowData;
				});
