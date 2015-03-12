var app = app || {};

app.NavbarView = Backbone.View.extend({
  el: $('#navbar'),

  template: _.template($('#navbar-template').html()),

  render: function() {
    this.$el.html( this.template() );
  },

  events: {
    'click a': 'navigate'
  },

  navigate: function(e) {
    var route = $(e.target).data('target');
    app.router.navigate(route, {trigger: true});
  }
});