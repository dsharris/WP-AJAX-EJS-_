WP Boilerplate
=============
A starting point for WordPress projects. Comes with SASS/Compass support, most-used plugins, the blank theme, and multiple environment support.

Setup Instructions
------------------
1. Rename *wp-config-sample.local* to *wp-config.local*. Treat it like you typically would *wp-config.php*.
2. Consider renaming the theme directory to something related to the client (instead of "*wp-theme*").
3. Choose between SASS or SCSS when setting up your environment.
4. Don't forget to update *<theme directory>/sass/style.sass* with the theme info like you usually would.
5. SASS/Compass is configured in the theme's directory, so you can `compass watch` from there.
6. When setting up your WP installation, DO NOT USE 'admin' AS THE DEFAULT USERNAME.
7. Activate WP Migrate DB Pro using our license: `cb20fe1d-8e53-4c9c-a460-9a83b0ff2f88`
8. Activate Gravity Forms with our license: `882ec6346d4cbf91ff13565dea0d500c`


Structure
------------------
1. **/assets/** -- All website assets (images/sass/scripts/fonts) will now be located in their respective folders
2. **/partials/** -- Contains repeatable code blocks or large chunks of php that you want to separate from template files. Keep it organized through folders. For example, you can have the post loop inside the posts folder. To pull the partials use `<?php include(get_template_directory() . '/partials/folder-name/partial-name.partial.php'); ?>`
3. **/functions/** -- Anything functions related goes in here. Anything wordpress, goes into the /functions/wordpress/ folder. If you're adding a plugin or larger function, add it as its own file. Then pull the file inside functions.php. Look at lines 41-42 for an example of how to. Add comments to your inclusion so we know what the function does. Keep any and all unnecessary code out of functions.php.
4. **/functions/wordpress/utility.php** -- Keep any utility function scripts in here with comments. Some examples would be of custom slugs, ACF option pages...etc
5. **/functions/custom_*** -- Keep these 3 files clean and well commented. Do not add any additional files into this directory unless it doesn't fit anywhere else.
6. **/functions/wordpress/admin-menu.php** -- Lets you add separator between the wordpress menu. More promenant and allows for better organization. Also enques the custom post type style icons. Look at number 7.
7. **/assets/sass/style-cpt.scss** -- You can assign custom font icons to your Custom Post Types through an icon font.


General Tips
------------------
Avoid using the page-*slug*.php format. We want to disconnect the theme from the WP DB Settings as much as possible. Instead, opt for the Template Name approach:

	<?php
	/*
	Template Name: Snarfer
	*/
	?>


Feel free to check the PHP constant **ENVIRONMENT** when debugging something. Example:

	<?php
	if(ENVIRONMENT=='local')
		print_r($some_pesky_array);

	if(ENVIRONMENT!='production')
		echo "this text is for staging/local eyes only";
	?>

Note that TimThumb is configured to store its cache files in */wp-content/timthumb-cache*. As a general rule, don't put cache files from PHP or your theme in the theme folder; create on inside of the */wp-content* directory.