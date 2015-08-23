
$.get('http://mc.garrettcox.io:9000/api/feeds/twitter', function (data) {
  var list = document.createElement('ul');
  var tweets = JSON.parse(data).statuses;
  tweets.forEach(function(tweetData) {
    var tweet = document.createElement('li');
    tweet.classList.add('tweet');
    tweet.innerHTML = '<div class="message">' + tweetData.text.replace(new RegExp('(https?://\\S+)', 'g'), '<a href="$1">$1</a>').replace(new RegExp('@([\\w]+)', 'g'), '<a href="https://twitter.com/#!/$1">@$1</a>') + '</div><a class="timestamp" href="http://twitter.com/#!/jeb_/status/' + tweetData.id_str + '"></a>';
    list.appendChild(tweet);
  });
  document.querySelector('.twitterFeed').appendChild(list);
});

$.get('http://mc.garrettcox.io:9000/api/feeds/tumblr', function(data) {
  var posts = JSON.parse(data).posts;

  posts.forEach(function(postData) {
    var post = document.createElement('a');
    post.setAttribute('href', postData['url-with-slug']);
    post.classList.add('post');
    post.innerHTML = postData['regular-title'];
    document.querySelector('.tumblrFeed').appendChild(post);
  });
});
