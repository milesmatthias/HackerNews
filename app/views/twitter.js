HackerNews.views.hnTwitterList = Ext.extend(Ext.List, {
	itemTpl: HackerNews.views.hnTweetTpl(),
	itemCls: 'hnTweet',
	plugins: [{
		ptype: 'pullrefresh'
	}]
})

HackerNews.views.twitter = Ext.extend(Ext.Panel, {
    title: "Twitter",
    iconCls: "team",
    styleHtmlContent: true,
    dockedItems: [
      {xtype:"toolbar", title: "Twitter Feed"}
    ],
    items: [
        new HackerNews.views.hnTwitterList({
            store: new Ext.data.Store({
                id: 'store_twitter',
                model: 'HackerNews.models.hnTweet',
                autoLoad: true,
                proxy: {
                    type: 'scripttag',
                    url: 'http://search.twitter.com/search.json?q=@newsycombinator',
                    reader: {
                        type: 'json',
                        root: 'results'
                    }
               }
            })
        })
    ],
    initComponent: function() {
        HackerNews.views.twitter.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('twitter', HackerNews.views.twitter);