var app = app || {};

app.TodosView = Backbone.View.extend({
  el: $('#todos-area ul'),

  render: function() {
    var self = this;
    this.$el.html('');
    this.collection.forEach(function(todoModelInstance) {
      var todoViewInstance = new app.TodoView({model: todoModelInstance});
      self.$el.append(todoViewInstance.render().el);
    });
  }
});