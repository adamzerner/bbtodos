var app = app || {};

app.Todos = Backbone.Collection.extend({
  model: app.Todo,

  localStorage: new Backbone.LocalStorage('todos-backbone'),

  getCompleted: function() {
    return this.filter(function(todo) {
      return todo.get('completed')
    });
  },

  getRemaining: function() {
    return this.filter(function(todo) {
      return !todo.get('completed');
    });
  },

  clearCompleted: function() {
    _.invoke(this.getCompleted(), 'destroy');
  }
});