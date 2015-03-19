var app = app || {};

app.TodoView = Backbone.View.extend({
  tagName: 'li',

  className: 'list-group-item',

  template: _.template( $('#todo-template').html() ),

  render: function() {
    this.$el.html( this.template(this.model) );
    return this;
  }
});