var app = app || {};

app.TodosView = Backbone.View.extend({
  el: $('#main'),

  render: function() {
    var self = this;
    this.$el.html( $('#todos-template').html() );
    app.todos.forEach(function(todoModelInstance) {
      var todoViewInstance = new app.TodoView({model: todoModelInstance});
      self.$el.find('ul').append(todoViewInstance.render().el);
    });
  }
});