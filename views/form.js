var app = app || {};

app.FormView = Backbone.View.extend({
  el: $('#main'),

  template: _.template( $('#form-template').html() ),

  renderCreate: function() {
    var obj = {
      type: 'Create'
    };
    this.$el.html( this.template(obj) );
  },

  renderEdit: function(id) {
    var model = app.todos.get(id);
    model.type = 'Update';
    this.$el.html( this.template(model) );
  },

  events: {
    'submit form': 'submit',
    'click #delete-todo': 'delete'
  },

  submit: function(e) {
    e.preventDefault();
    var type = $(e.target).data('type');
    if (type === 'Create') {
      app.todos.create({
        text: $('input').val()
      }, {
        success: function() {
          app.router.navigate('list', {trigger: true});
        }
      });
    }
    else if (type === 'Update') {
      var id = $(e.target).data('id');
      var model = app.todos.get(id);
      model.save({
        text: $('input').val()
      }, {
        success: function() {
          app.router.navigate('list', {trigger: true});
        },
        error: function() {
          alert('Unable to update todo.');
        }
      });
    }
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
        alert("Couldn't remove model");
      }
    });
  }
});