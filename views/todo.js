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
    'dblclick .todo-title': 'showEditMode',
    'keyup input.edit-todo': 'keypress',
    'blur input.edit-todo': 'closeAndUpdate'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.esc = false;
  },

  check: function(e) {
    this.model.save({
      completed: true
    });
  },

  showRemove: function(e) {
    $(e.currentTarget).find('.remove-todo').show();
  },

  hideRemove: function(e) {
    $(e.currentTarget).find('.remove-todo').hide();
  },

  remove: function(e) {
    var $el = $(e.currentTarget);
    this.model.destroy({
      success: function(model) {
        app.todos.remove(model);
        $el.closest('li').remove();
      },
      error: function() {
        alert('Unable to remove todo.');
      }
    });
  },

  showEditMode: function(e) {
    var $el = $(e.currentTarget);
    var $editMode = $el.closest('li').find('.edit-mode');
    $el.closest('.view-mode').hide();
    $editMode.show();
    $editMode.find('.edit-todo').focus();
  },

  keypress: function(e) {
    if (e.which === 13) {
      this.closeAndUpdate();
    }
    else if (e.which === 27) {
      this.esc = true;
      this.closeEditMode();
    }
  },

  closeEditMode: function() {
    var $input = this.$el.find('.edit-todo');
    $input.closest('li').find('.view-mode').show();
    $input.closest('.edit-mode').hide();
  },

  closeAndUpdate: function() {
    if (!this.esc) {
      var self = this;
      var $input = this.$el.find('.edit-todo');
      var newTitle = $input.val();
      if (newTitle !== this.model.get('title')) {
        this.model.save({
          title: newTitle
        }, {
          success: function(model) {
            self.closeEditMode();
          },
          error: function() {
            alert('Unable to update todo');
          }
        });
      }
      else {
        this.closeEditMode();
      }
    }
    else this.esc = false;
  }
});