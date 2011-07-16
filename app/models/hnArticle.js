//  curl http://api.ihackernews.com/page | python -mjson.tool > data_from_ihackernews.json

HackerNews.models.hnArticle = Ext.regModel("HackerNews.models.hnArticle", {
	fields: [
		{name: "id", type: "string"},
		{name: "title", type: "string"},
		{name: "url", type: "string"}
	]
});