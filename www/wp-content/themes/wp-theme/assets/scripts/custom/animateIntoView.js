define( [ 'js/mq_sync' ], function (mq){
	var elementQueue	= [],
		percentToRun	= 5,
		count			= 0,
		mediaQueryTest	= 'mq_la',
		$win			= $(window),

		init = function (){
			// if mq_s or smaller skip this stuff
			if( ! mq.test(mediaQueryTest) )
				return false;

			$.each( $(".obj-animate"), function (i, el){
				var $el = $(el);

				if( $el.attr('data-processed') != 'true' ){
					$el.attr( 'data-run-point', (function(){
						var top		= $el.offset().top,
							height	= $el.outerHeight();

						return top + Math.floor( ( height * percentToRun ) / 100 ) - height;

					})())
					count = count + 1;
					elementQueue.push({
						'id'	: count,
						'el'	: $el
					});

				}
			})
		},

		run = function (){
			// if mq_m or smaller skip this stuff
			if( ! mq.test(mediaQueryTest) )
				return false;

			// if there is no queus, skip this stuff
			if( ! elementQueue.length )
				return false

			var currScroll = $win.scrollTop();

			$.each( elementQueue, function (i, el){
				if( ! el || ! el.el )
					return false;

				var $el = $(el.el);

				if( currScroll >= $el.attr('data-run-point') ){
					$el.attr('data-processed', 'true');
					$el.addClass('animate-active');
					elementQueue.splice(i, 1);
				}
			});
		};

	init();

	$win.resize(init);
	$win.scroll(run);

})