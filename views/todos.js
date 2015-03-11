var app = app || {};

app.TodosView = Backbone.View.extend({
  el: $('#container'),

  template: _.template($('#todos').html()),

  render: function() {
    this.collection.forEach(this.addOne, this);
    return this;
  },

  addOne: function(todoModelInstance) {
    var todoViewInstance = new app.TodoView({model: todoModelInstance});
    this.$el.append( todoViewInstance.render().el );
  }
});