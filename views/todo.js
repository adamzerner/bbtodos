var app = app || {};

app.TodoView = Backbone.View.extend({
  el: 'li',

  template: _.template($('#todo').html()),

  render: function() {
    this.$el.html( this.template(this.model.toJSON()) );
    return this;
  }
});