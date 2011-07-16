HackerNews.views.hnListArticleTpl = function(){
	return "<div class='item-wrap'>" + 
			"<a href='{url}'>{title}</a>" +
			"</div>";
};

HackerNews.views.hnTweetTpl = function(){
  return "<div class='tweet'>" +
            "<div class='avatar'><img src='{profile_image_url}' /></div>"+
              "<div class='tweetContent'>"+
                "<h2>{from_user}</h2>"+
                "<p>{text}</p>"+
              "</div>"+
            "</div>";
};