<?php 
// Template Name: Infinite Scroll
get_header();
?>

<?php 
// Example Usage for a Blog Home Page

// Templates found in functions/wordpress/ajax/templates
// and correspond to data-template attr on section tag.

// data-action attr corresponds to function called in
// functions/wordpress/ajax/infinite-scroll.php
?>

<section class="infinite-scroll" data-action="load_more_posts" data-template="posts.ejs">

  <?php if (have_posts() ) : while ( have_posts() ) : the_post(); ?>

    <article>

      <h2><?php the_title(); ?></h2>
      <p><?php the_content(); ?></p>

    </article>

  <?php endwhile; else : ?>

    <p>There are no posts or pages here.</p>

  <?php endif; ?>

</section>

<?php get_footer(); ?>