var app = app || {};

app.TodoView = Backbone.View.extend({
  tagName: 'li',

  className: 'list-group-item',

  template: _.template( $('#todo-template').html() ),

  render: function() {
    console.log(this.model);
    this.$el.html( this.template(this.model.toJSON()) );
    return this;
  }
});