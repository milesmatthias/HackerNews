HackerNews = new Ext.Application({
    name: "HackerNews",
    launch: function() {
        this.views.viewport = new this.views.Viewport();
        this.views.hnlist = this.views.viewport.getComponent('hnlist');
    }
});