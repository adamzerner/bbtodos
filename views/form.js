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
      $el = $(e.target);
      console.log(app.todos);
      app.todos.create(
        {
          title: $el.val()
        }, 
        {
          success: function() {
            console.log('in success');
            // $el.val('');
            // $el.blur(); // removes focus
            // app.router.navigate('all', {trigger: true});
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