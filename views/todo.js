var app = app || {};

app.TodoView = Backbone.View.extend({
  tagName: 'li',

  template: _.template( $('#todo-template').html() ),

  render: function() {
    this.$el.html( this.template(this.model) );
    return this;
  },

  events: {
    'click #delete-todo': 'delete',
    'click input[type="checkbox"]': 'check'
  },

  delete: function(e) {
    e.preventDefault();
    var $el = $(e.target);
    var id = $el.data('id');
    var model = app.todos.get(id);
    model.destroy({
      success: function(model) {
        app.todos.remove(model);
        $el.closest('li').remove();
      },
      error: function() {
        alert('Unable to delete todo');
      }
    });
  },

  check: function(e) {
    var id = $(e.target).data('id');
    var model = app.todos.get(id);
    model.save({
      checked: !model.get('checked')
    });
  }
});