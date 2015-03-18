var app = app || {};

app.Todos = Backbone.Collection.extend({
  model: app.Todo,

  localStorage: new Backbone.LocalStorage('todos-backbone'),

  initialize: function() {
    this.on('add', this.updateTodosLeft);
    this.on('remove', this.updateTodosLeft);
    // collection.on('reset', function(after, before) {
    //   // let after.length = k
    //   // let before.length = n
    //   after.sort() // k*logk
    //   before.forEach(function(model) { // n
    //     if (!binarySearch(model, after)) model.remove(); // logk
    //   });
    //   // total runtime: n*logk + klogk
    // });
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
  },

  clearCompleted: function() {
    _.invoke(this.getCompleted(), 'destroy');
  }
});