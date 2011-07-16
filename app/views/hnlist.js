HackerNews.views.hnArticleList = Ext.extend(Ext.List, {
	itemTpl: HackerNews.views.hnListArticleTpl(),
	itemCls: 'hnArticle',
	plugins: [{
		ptype: 'pullrefresh'
	}]
})

HackerNews.views.hnlist = Ext.extend(Ext.Panel, {
    title: "Home",
    iconCls: "home",
    styleHtmlContent: true,
	dockedItems: [
        {xtype: "toolbar",title: "HackerNews"}
     ],
	items: [
		new HackerNews.views.hnArticleList({
			store: new Ext.data.Store({
				id: 'store_hn',
				model: 'HackerNews.models.hnArticle',
				autoLoad: true,
				proxy: {
					type: 'scripttag',
					url: 'http://api.ihackernews.com/page?format=jsonp',
					reader: {
						type: 'json',
						root: 'items'
					}
				}
			})
		})
	],
	initComponent: function() {
        HackerNews.views.hnlist.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('hnlist', HackerNews.views.hnlist);