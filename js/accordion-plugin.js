// use $ as variable name
// The plugin is wrapped in an iiFE to create function level scope.
(function($)
{
  // Return the jQuery selection
  /* accordion() method is created by extending the fn object. It takes the
  one parameter of speed.*/
  $.fn.accordion = function(speed)
  {
    // The this keyword refers to the jQuery selection that was passed into the plugin.
    this.on("click", ".accordion-control", function(e)
    {
      // The default action is prevented
      e.preventDefault();
      // $(this} refers to a jQuery object containing the element that the user clicked upon
      $(this)
      // Gets corresponding panel
      .next(".accordion-panel")
      // Panel is not animated
      .not(":animated")
      // Then animate panel
      .slideToggle(speed);
    });
    // Return the jQuery selection
    return this;
  }
  // Pass in jQuery object.
  /*
    This is because if the script uses $ as shorthand for jQuery it will not conflict
    with other $ in the script
  */
})(jQuery)

// Example of using the plugin
$(".menu").accordion(500);
