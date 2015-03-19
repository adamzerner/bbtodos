var app = app || {};

app.FormView = Backbone.View.extend({
  el: $('#form-area'),

  template: _.template( $('#form-template').html() ),

  render: function() {
    this.$el.html( this.template() );
  },

  events: {
    'keyup input': 'submitOnEnter'
  },

  submitOnEnter: function(e) {
    var $input = this.$el.find('input');
    if (e.keyCode === 13) {
      var title = $input.val();
      app.todos.create({
        title: title
      }, {
        success: function(model) {
          $input.val('');
          if (Backbone.history.fragment === 'all' || Backbone.history.fragment === '') {
            var todoViewInstance = new app.TodoView({model: model});
            $('#todos-area .list-group').append(todoViewInstance.render().el);
          }
          else {
            app.router.navigate('all', {trigger: true});
          }
        },
        error: function() {
          console.log('in error');
        }
      });
    }
  }
});