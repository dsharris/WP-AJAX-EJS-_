
// config dat mug.
requirejs.config({


});

define( [ "vendor/require" ], function (require){

	var selectors = [
			/*
			// This should be an array objects that define a selector and files to include.
			// If the selector is found on the current page, the file will required.

			{
				selector: 'body.some-page',
				files: ['app/myJsForThatPage.js']
			}

			*/
		],

		run = function ($){

			// this ensures that mq_sync is the second in line to be loaded, following jQuery, mostly for the body classing stuff
			require( ['vendor/mq_sync'], function (mq){
				if( $('html').hasClass('lt-ie9') )
					require('selectivizr-min.js'); // add selectivizr to older IE browser

				$.each(selectors, function(i, el){ // run the bindings from the previously defined selectors var
					if($(el.selector).length > 0)
						require(el.files);
				});
			});

		};

	// when possible its nice to load jQuery here, as opposed to in the header, but not always a possibility,
	// this will allow either without having to edit this file

	// NOTE: this can cause problems with r.js, so beware!

	if( window.jQuery ){
		// jQuery is loaded no need to load it again
		run( window.jQuery );
	}else{
		// jQuery is not loaded, lets load it
		require( ['vendor/jquery'], function ($){
			run( $ );
		});
	}

});



