jQuery(function($){


//----------------------------------*\
// Gravity Forms Placeholder Fix
// Remove if you do not need placeholders for your forms
// Attach .custom-gravity-forms to the form for it to work
//----------------------------------*/
$('.custom-gravity-forms li.gfield .gfield_label').click(function(){
    $(this).next('.ginput_container').find('input[type="text"], textarea').focus();
})

$('.custom-gravity-forms .ginput_container input[type="text"], .custom-gravity-forms .ginput_container textarea')
.focus(function(){
  $(this).closest('.ginput_container').prev('.gfield_label').hide();
})
.blur(function(){
  if( $(this).val() == "" ){
    $(this).closest('.ginput_container').prev('.gfield_label').show();
  }
})

$('.custom-gravity-forms .ginput_container input[type="text"], .custom-gravity-forms .ginput_container textarea').each(function(){
  if( $(this).val() != "" ){
    $(this).closest('.ginput_container').prev('.gfield_label').hide();
  }
})


});
