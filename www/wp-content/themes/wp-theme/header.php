<!DOCTYPE html>
<!--[if lt IE 8]>         	<html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         		<html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>			<!--> <html class="no-js "> <!--<![endif]-->
<head profile="http://gmpg.org/xfn/11">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/ico" href="<?php bloginfo('template_directory') ?>/assets/images/favicon.ico" />
	<title><?php wp_title('&raquo;','true','right'); ?> <?php bloginfo('name') ?></title>
	<!--[if IE 8]>
		<link rel="stylesheet" href="<?php bloginfo('template_directory') ?>/ie.css" type="text/css" media="screen" />
	<![endif]-->
	<!--[if !(IE 8) ]><!-->
		<link rel="stylesheet" href="<?php bloginfo('template_directory') ?>/style.css" type="text/css" media="screen" />
	<!--<![endif]-->

	<!--[if lt IE 9]><script src="<?php bloginfo('template_directory') ?>/assets/scripts/vendor/html5shiv.js"></script><![endif]-->
	<?php wp_head();?>
</head>
<body <?php body_class(); ?>  id="<?php echo get_template_name(); ?>">