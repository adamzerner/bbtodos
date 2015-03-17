    var app = app || {};

    app.FormView = Backbone.View.extend({
      el: $('#create'),

      render: function() {
        this.$el.html( $('#form-template').html() );
      },

      events: {
        'keypress input': 'submit'
      },

      submit: function(e) {
        if (e.which === 13) {
          var $el = $(e.currentTarget);
          app.todos.create(
            {
              title: $el.val()
            }, 
            {
              success: function(model) {
                $el.val('');
                $el.blur(); // removes focus
                var viewInstance = new app.TodoView({model: model});
                $('#todos').append( viewInstance.render().el );
              },
              error: function() {
                console.log('Unable to create todo');
              }
            }
          );
        }
      }
    });

// maybe later I'll refactor this and not use a BB View
// and use jQuery to handle the submission