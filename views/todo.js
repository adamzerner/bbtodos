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
        'keyup input.edit-todo': 'update',
        'blur input.edit-todo': 'close'
      },

      check: function(e) {
        var id = $(e.currentTarget).data('id');
        var model = app.todos.get(id);
        model.save({
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
        var id = $el.data('id');
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

      showEditMode: function(e) {
        var $el = $(e.currentTarget);
        $el.closest('.view-mode').hide();
        var $editMode = $el.closest('li').find('.edit-mode');
        $editMode.show();
        $editMode.find('.edit-todo').focus();
      },

      update: function(e) {
        if (e.which === 13 || e.which === 27) {
          var $el = $(e.currentTarget);
          $el.closest('.edit-mode').hide();
          $el.closest('li').find('.view-mode').show();
        }
      },

      close: function(e) {
        var $el = $(e.currentTarget);
        $el.closest('.edit-mode').hide();
        $el.closest('li').find('.view-mode').show();
      }
    });