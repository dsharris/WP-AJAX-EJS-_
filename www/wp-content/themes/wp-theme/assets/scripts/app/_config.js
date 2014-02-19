define({

	// RequireJS
	requirejs: {
		paths: {
			jquery: [
				'//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min',
				'vendor/jquery-1.11.0.min'
			]
		},
		// for non-AMD scripts
		shim: {
			/*
			someJqueryPlugin: ['jquery']
			*/
		}
	},

	// jQuery selectors that include listed files when found on current page
	selectors: [
		/*
		{
			selector: 'body.someClass',
			files: ['vendor/fastclick']
		}
		*/
	]
});