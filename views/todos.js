var app = app || {};

app.TodosView = Backbone.View.extend({
  el: $('#main'),

  render: function() {
    this.$el.html( $('#todos-template').html() );
  }
});