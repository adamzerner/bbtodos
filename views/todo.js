var app = app || {};

app.TodoView = Backbone.View.extend({
  tagName: 'li',

  template: _.template( $('#todo-template').html() ),

  render: function() {
    this.$el.html( this.template(this.model) );
    return this;
  },

  events: {
    'click #delete-todo': 'delete'
  },

  delete: function(e) {
    e.preventDefault();
    $el = $(e.target);
    var id = $el.data('id');
    var model = app.todos.get(id);
    model.destroy({
      success: function(model) {
        app.todos.remove(model);
        $el.closest('li').remove();
      },
      error: function() {
        alert('Unable to delete todo');
      }
    })
  }
});