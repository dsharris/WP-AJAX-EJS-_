define( function (){

	var $stickies		= $('.sticky'),
		$footer			= $('div.wrap-footer'),
		topOffset		= 250,
		firstRun		= true,
		$win			= $(window),
		footerHeight	= $footer.outerHeight(),
		docHeight		= null,


		init = function (){

			if( $('#sub-navigation' ).length )
				topOffset = 120;
			else
				topOffset = 100;

			footerHeight	= $footer.outerHeight();
			docHeight		= $(document).height();

			$.each( $stickies, function (i, el){
				if( firstRun )
					$(el).attr( 'data-top', $(el).offset().top );

				var height = $(el).outerHeight(),
					offset = parseInt( $(el).attr('data-height-add') ) || 0;

				$(el).attr( 'data-height', height + offset );
				
			});

			// prevents resetting of the initial top value
			firstRun = false;

		},

		run = function (){
			var currScroll = $win.scrollTop();

			$.each( $stickies, function (i, el){

				if( ( parseInt( topOffset ) + parseInt( $(el).attr('data-height') ) + parseInt( currScroll ) ) > ( docHeight - footerHeight ) )
					$(el).addClass('bottom');
				else
					$(el).removeClass('bottom');

				if( $(el).attr('data-top') < currScroll + topOffset )
					$(el).addClass('fixed');
				else
					$(el).removeClass('fixed');

			});
		};

	window.setTimeout(init, 500);

	$win.resize(init);
	$win.scroll(run);

})
