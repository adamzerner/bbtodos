var app = app || {};

app.Todo = Backbone.Model.extend({
  defaults: {
    completed: false
  },

  validate: function(attrs) {
    if (typeof attrs.title === 'undefined') return 'A title is required.';
  },

  initialize: function() {
    this.on('add remove change:completed', function(todo) {
      var todosRemaining = app.todos.getRemaining().length;
      $('#todos-remaining').text(todosRemaining);
    });
  }
});