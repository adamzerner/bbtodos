var app = app || {};

app.FormView = Backbone.View.extend({
  el: $('#main'),

  template: _.template( $('#form-template').html() ),

  renderCreate: function() {
    var obj = {};
    obj.type = 'Create';
    this.$el.html( this.template(obj) );
  },

  renderEdit: function(id) {
    var model = app.todos.get(id);
    model.type = 'Update';
    this.$el.html( this.template(model) );
  },

  events: {
    'submit form': 'submit'
  },

  submit: function(e) {
    e.preventDefault();
    $el = $(e.target);
    var type = $el.data('type');
    if (type === 'Create') {
      app.todos.create({
        text: $('input').val()
      }, {
        success: function() {
          app.router.navigate('list', {trigger: true});
        },
        error: function() {
          alert('Unable to create todo');
        }
      });
    }
    else if (type === 'Update') {
      var id = $el.data('id');
      var model = app.todos.get(id);
      model.save({
        text: $('input').val()
      }, {
        success: function() {
          app.router.navigate('list', {trigger: true});
        },
        error: function() {
          alert('Unable to update todo');
        }
      });
    }
  }
});