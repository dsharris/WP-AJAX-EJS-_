<?php


///////////////////////////////////////////////////////////////////////////
///                                                                     ///
// HELLO DEV. YOU NEED TO EDIT WP-CONFIG.LOCAL FOR YOUR LOCAL DEV NEEDS. //
///                                                                     ///
///////////////////////////////////////////////////////////////////////////


/*

        .-------.
      .'         `.
    .'             `.
    |.-. .-. .-. .-.|
    |`-.  |  | | |-'|
    |`-'  '  `-' '  |
    '               '
     `.           .'.''.  .''.
       `._______.'   __   __
           | | .----/  \ /  \---.
           | | |   |    |    |  |____
           | | |   |`--''`--'| /  |  \_
         ,----.|   \  O | O  _ |  |  | \
         | ---'|    '._/ \_.| `|  |  | |
         \.---'|            |  | `- ,| |
          `---'|            | :        |
           | | |            |  '._.--  ;
           | | |    .      .:      `  /
           '-' |     '....'  `.______/
               |                |
               |                |
               `----------------'
                   ||      ||
                   ||      ||
            _.---'' '-, ,-' ''---._
           /      __..' '..__      \
           '---''`           `''---'



*/

if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

if(file_exists( ABSPATH . 'wp-config.local' ) ){

	require_once( ABSPATH . 'wp-config.local' );

}else if( file_exists( ABSPATH . '../wp-config.php' ) ){

	require_once( ABSPATH . '../wp-config.php' );

}else{

	die('<img src="http://31.media.tumblr.com/tumblr_lq6p4gHAHa1qmlozzo1_400.gif" style="display: block;margin-bottom: 10px">Your config isn\'t set up right.');

}
