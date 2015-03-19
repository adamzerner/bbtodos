var app = app || {};

app.TodoView = Backbone.View.extend({
  tagName: 'li',

  className: 'list-group-item',

  template: _.template( $('#todo-template').html() ),

  render: function() {
    this.$el.html( this.template(this.model.toJSON()) );
    return this;
  },

  events: {
    'dblclick .title': 'enterEditMode',
    'keyup .edit-input': 'keyup',
    'blur .edit-input': 'enterViewMode'
  },

  enterEditMode: function() {
    var $viewMode = this.$el.find('.view-mode');
    var $editMode = this.$el.find('.edit-mode');
    $viewMode.hide();
    $editMode.show();
    $editMode.find('input').focus();
  },

  keyup: function(e) {
    if (e.keyCode === 13) {
      this.update();
    }
    else if (e.keyCode === 27) {
      this.enterViewMode();
    }
  },

  update: function() {
    var self = this;
    var newTitle = this.$el.find('.edit-input').val();
    this.model.save({
      title: newTitle
    }, {
      success: function() {
        self.render();
      },
      error: function() {
        console.log('Unable to update model');
      }
    });
  },

  enterViewMode: function() {
    var $viewMode = this.$el.find('.view-mode');
    var $editMode = this.$el.find('.edit-mode');
    $viewMode.show();
    $editMode.hide();
  }
});