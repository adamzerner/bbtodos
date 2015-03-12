var app = app || {};

app.TodosView = Backbone.View.extend({
  el: $('#container'),

  render: function() {
    this.$el.html('');
    this.collection.forEach(this.addOne, this);
    return this;
  },

  addOne: function(todoModelInstance) {
    var todoViewInstance = new app.TodoView({model: todoModelInstance});
    this.$el.append( todoViewInstance.render().el );
  }
});