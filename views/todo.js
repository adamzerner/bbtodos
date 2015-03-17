var app = app || {};

app.TodoView = Backbone.View.extend({
  tagName: 'li',

  className: 'list-group-item',

  template: _.template( $('#todo-template').html() ),

  render: function() {
    this.$el.html( this.template(this.model.toJSON()) );
    this.$el.find('.edit-mode').hide();
    this.$el.find('.remove-todo').hide();
    return this;
  },

  events: {
    'click input[type="checkbox"]': 'check',
    'mouseenter': 'showRemove',
    'mouseleave': 'hideRemove',
    'click .remove-todo': 'remove',
    'dblclick': 'makeEditable'
  },

  check: function(e) {
    var id = $(e.target).data('id');
    var model = app.todos.get(id);
    model.save({
      completed: true
    });
  },

  showRemove: function(e) {
    $(e.target).find('.remove-todo').show();
  },

  hideRemove: function(e) {
    $(e.target).find('.remove-todo').hide();
  },

  remove: function(e) {
    var $el = $(e.target);
    var id = $(e.target).data('id');
    var model = app.todos.get(id);
    model.destroy({
      success: function(model) {
        app.todos.remove(model);
        $el.closest('li').remove();
      },
      error: function() {
        alert('Unable to remove todo.');
      }
    });
  },

  makeEditable: function(e) {
    console.log($(e.target).html());
    $(e.target).find('.view-mode').hide();
    $(e.target).find('.edit-mode').show();
  }
});