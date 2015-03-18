var app = app || {};

app.Todos = Backbone.Collection.extend({
  model: app.Todo,

  localStorage: new Backbone.LocalStorage('todos-backbone'),

  initialize: function() {
    this.on('add', this.updateTodosLeft);
    this.on('remove', this.updateTodosLeft);
  },

  updateTodosLeft: function() {
    var numLeft = this.getRemaining().length;
    $('#numLeft').text(numLeft);
  },

  getRemaining: function() {
    return this.filter(function(todo) {
      return !todo.get('completed');
    });
  },

  getCompleted: function() {
    return this.filter(function(todo) {
      return todo.get('completed');
    });
  }
});