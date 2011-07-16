// curl http://search.twitter.com/search.json?q=@newsycombinator | python -mjson.tool > data_from_twitter.json

HackerNews.models.hnTweet = Ext.regModel("HackerNews.models.hnTweet", {
  fields: [
    {name: "from_user", type: "string"},
    {name: "profile_image_url", type: "string"},
    {name: "text", type: "string"}
  ]
});