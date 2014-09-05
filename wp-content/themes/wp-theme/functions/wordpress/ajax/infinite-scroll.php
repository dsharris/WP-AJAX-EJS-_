<?php

    function blog_infinite_scroll(){ 

        $result = array();

        if ("false" === $_POST['template']) {
            $result['template'] = file_get_contents(realpath(dirname(__FILE__)). '/templates/posts.ejs');
        }

        $query = new WP_Query(array(
            'paged' => $_POST['page'],
            'posts_per_page' => 4
        ));

        $result['post'] = get_page_by_title($_POST['slug']);

        echo json_encode($result);
        exit;
        die;

    }

    add_action('wp_ajax_load_more_posts', 'blog_infinite_scroll');
    add_action('wp_ajax_nopriv_load_more_posts', 'blog_infinite_scroll');