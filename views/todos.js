var app = app || {};

app.TodosView = Backbone.View.extend({
  el: $('#todos ul'),

  render: function() {
    var self = this;
    this.$el.html('');
    app.todos.forEach(function(todoModelInstance) {
      var todoViewInstance = new app.TodoView({model: todoModelInstance});
      self.$el.append( todoViewInstance.render().el );
    });
  }
});