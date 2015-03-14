var app = app || {};

app.TodosView = Backbone.View.extend({
  el: $('#main'),

  render: function() {
    this.$el.html('<ul></ul>');
    app.todos.forEach(function(todoModelInstance) {
      var todoViewInstance = new app.TodoView({model: todoModelInstance});
      this.$el.find('ul').append( todoViewInstance.render().el );
    });
    return this;
  }
});