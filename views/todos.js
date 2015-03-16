var app = app || {};

app.TodosView = Backbone.View.extend({
  el: $('#todos'),

  render: function() {
    this.$el.html('');
    app.todos.forEach(function(todoModelInstance) {
      var todoViewInstance = new app.TodoView({model: todoModelInstance});
      this.$el.append( todoViewInstance.render().el );
    });
  }
});