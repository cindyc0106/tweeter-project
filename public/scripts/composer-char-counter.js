$(document).ready(function() {
  $('#tweet-text').on('input', onChange);
});

const onChange = function() {
  const input = $(this);
  const remaining = 140 - input.val().length;
  //using jQuery to find the class, counter, in the closest form
  const counter = $(this).closest('form').find('.counter');
  //updating counter text live
  counter.text(remaining);
  //add class to turn counter red when it is under 140
  if (remaining < 0) {
    return counter.addClass('red');
  }
  //remove class turning counter red
  counter.removeClass('red');

};



