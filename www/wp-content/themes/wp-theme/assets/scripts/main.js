requirejs.config({
"shim": {
"cookie": ["jquery"],
"vendor/selectivizr-min": ["jquery"]
}
});

define( [ "require" ], function (require){

	var selectors = [
			// Just some defaults to get you going
			{
				selector: '.obj-animate',
				files: ['custom/animateIntoView']
			},
			{
				selector: '.sticky',
				files: ['js/sticky']
			},
		],
		run = function ($){

			// this ensures that mq_sync is the second in line to be loaded, following jQuery, mostly for the body classing stuff
			require( ['mq_sync'], function (mq){
				if( $('html').hasClass('lt-ie9') )
					require(['selectivizr']); // add selectivizr to older IE browser

				$.each(selectors, function(i, el){ // run the bindings from the previously defined selectors var
					if($.find(el.selector).length > 0)
						$.each(el.files, function(fi, jsFile){
							require([jsFile]);
						});
				});
			});

		};

	// when possible its nice to load jQuery here, as opposed to in the header, but not always a possibility,
	// this will allow either without having to edit this file

	if( window.jQuery ) // jQuery is loaded no need to load it again
		run( window.jQuery );
	else // jQuery is not loaded, lets load it
		require( ['jquery'], function ($){
			run( $ );
		});

});



