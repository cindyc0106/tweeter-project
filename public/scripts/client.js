// Client-side 

$(() => {


  $('form').on('submit', (event) => {

    event.preventDefault();

    const $textArea = $('#tweet-text');
    $textArea.text($textArea.val())

    if ($textArea.val() === "") {
      return $(".empty").slideDown(() => {
        setTimeout(()=> {
          $(".empty").slideUp()
        }, 2000)
      });
    }

    if ($textArea.val().length > 140) {
      return $(".too-much").slideDown(() => {
        setTimeout(()=> {
          $(".too-much").slideUp()
        }, 2000)
      });
    }
   
    const serializedData = $('form').serialize();

    $.post('/tweets/', serializedData, (res) => {
      $('#tweets-container').empty();
    
      loadTweets();
      console.log(res);
    });

  });

  const loadTweets = () => {

    $.ajax({
      type: 'GET',
      url: '/tweets',
      success: (data) => {
        renderTweets(data);

      }
    });
  };

  loadTweets();

});


const renderTweets = function(tweets) {

  // loops through tweets
  for (const tweet of tweets) {
    // calls createTweetElement for each tweet
    const $tweet = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    $('#tweets-container').prepend($tweet);
  }
};

const createTweetElement = (tweet) => {
  let $tweet = `<article class="tweet">
    <p class="user-icon">
    <span><img src="${tweet.user.avatars}"/>
    ${tweet.user.name} 
    </span>
    <span>${tweet.user.handle}</span>
    </p>
    <div class="content">${tweet.content.text}</div>
    <footer>
      <div>${timeago.format(tweet.created_at)}</div>
      <div class="icons">
        <div class="icon"><i class="fa-solid fa-flag"></i></div>
        <div ><i class="icon fa-solid fa-retweet"></i></div>
        <div class="icon"><i class="fa-solid fa-heart"></i></div>
      </div>
    </footer>
  </article>`;
  return $tweet;
};




