var app = app || {};

app.TodoView = Backbone.View.extend({
  tagName: 'li',

  template: _.template( $('#todo-template').html() ),

  render: function() {
    this.$el.html( this.template(this.model.toJSON()) );
    return this;
  },

  events: {
    'click a': 'navigate'
  },

  navigate: function(e) {
    e.preventDefault();
    var target = $(e.target).data('target');
    app.router.navigate(target, {trigger: true});
  }
});