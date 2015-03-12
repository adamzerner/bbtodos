var app = app || {};

app.TodoView = Backbone.View.extend({
  tagName: 'li',

  template: _.template( $('#todo-template').html() ),

  render: function() {
    this.$el.html( this.template(this.model.toJSON()) );
    return this;
  },

  events: {
    'click #edit-link': 'edit',
    'click #delete-link': 'delete'
  },

  edit: function(e) {
    e.preventDefault();
    var target = $(e.target).data('target');
    app.router.navigate(target, {trigger: true});
  },

  delete: function(e) {
    e.preventDefault();
    this.model.destroy({
      success: function(model) {
        app.todos.remove(model);
        $(e.target).closest('li').remove();
      },
      error: function() {
        alert('unable to destroy model');
      }
    });
  }
});