$(document).ready(function() {
  
  $('#tweet-text').on('input', onChange);
});

const onChange = function() {
  // console.log(this)
  const input = $(this)
  const remaining = 140 - input.val().length
  // let spacesLeft = 140 - input.val().length;
  console.log(remaining)
  const traverse = $(this).closest('form').children('div').children('.counter')
  traverse.text(remaining);
}



