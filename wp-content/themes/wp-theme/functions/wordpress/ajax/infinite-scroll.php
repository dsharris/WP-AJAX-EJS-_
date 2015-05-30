<?php

  if (!function_exists('get_template_ejs')) {
    function get_template_ejs ($template_name) {
      return file_get_contents(realpath(dirname(__FILE__)) . '/templates/' . $template_name);
    }
  }

  function blog_infinite_scroll(){ 

    $result = array();
    $result['posts'] = array();

    $result['template'] = get_template_ejs($_POST['template']);

    if ( $_POST['template'] === 'posts.ejs' ) {

      $query = new WP_Query(array(
        'post_type' => 'post',
        'paged' => $_POST['pageNum'],
        'posts_per_page' => 2
      ));

      foreach ($query->posts as $post) {
        $result['posts'][] = array(
          'title' => $post->post_title,
          'content' => $post->post_content
        );
      }

    }

    $result['total'] = $query->max_num_pages;

    echo json_encode($result);
    exit;
    die;

  }

  add_action('wp_ajax_load_more_posts', 'blog_infinite_scroll');
  add_action('wp_ajax_nopriv_load_more_posts', 'blog_infinite_scroll');