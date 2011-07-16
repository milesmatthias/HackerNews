HackerNews.views.settings = Ext.extend(Ext.Panel, {
    title: "settings",
    iconCls: "settings",
    styleHtmlContent: true,
    html: "User Settings here...",
    initComponent: function() {
        Ext.apply(this, {
            dockedItems: [{
                xtype: "toolbar",
                title: "Settings"
            }]
        });
        HackerNews.views.settings.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('settings', HackerNews.views.settings);
