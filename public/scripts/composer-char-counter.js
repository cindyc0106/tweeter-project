$(document).ready(function() {
  $('#tweet-text').on('input', onChange);
});

const onChange = function() {
  const input = $(this);
  const remaining = 140 - input.val().length;
  console.log(remaining);
  const counter = $(this).closest('form').find('.counter');
  counter.text(remaining);
  if (remaining < 0) {
    return counter.addClass('red');
  }
  counter.removeClass('red');

};



