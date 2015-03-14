var app = app || {};

app.TodoView = Backbone.View.extend({
  tagName: 'li',

  template: _.template( $('#todo-template').html() ),

  render: function() {
    this.$el.html( this.template(this.model) );
    return this;
  },

  events: {
    'click input[type="checkbox"]': 'check'
  },

  check: function(e) {
    var id = $(e.target).data('id');
    var model = app.todos.get(id);
    model.save({
      checked: !model.get('checked')
    });
  }
});