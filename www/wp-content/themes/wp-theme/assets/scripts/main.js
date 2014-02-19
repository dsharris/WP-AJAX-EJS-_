define( ['app/_config'], function(config){

	// config dat mug.
	requirejs.config(config.requirejs);

	require(['jquery'], function($){

		// run selector filters
		$.each(config.selectors, function(i, el){
			if($(el.selector).length > 0)
				require(el.files);
		});

	});
});



