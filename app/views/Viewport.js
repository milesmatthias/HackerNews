HackerNews.views.Viewport = Ext.extend(Ext.TabPanel, {
    fullscreen: true,

    initComponent: function() {
        Ext.apply(this, {
            tabBar: {
                dock: 'bottom',
                layout: {
                    pack: 'center'
                }
            },
            items: [
                { xtype: 'hnlist', id: 'hnlist' },
                { xtype: 'twitter' }
            ]
        });
        HackerNews.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
