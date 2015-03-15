var app = app || {};

app.FormView = Backbone.View.extend({
  el: $('#main'),

  template: _.template( $('#form-template').html() ),

  renderCreate: function() {
    var obj = {};
    obj.type = 'Create';
    this.$el.html( this.template(obj) );
  },

  events: {
    'submit form': 'submit'
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
        },
        error: function() {
          alert('Unable to create todo');
        }
      });
    }
    else if (type === 'Update') {

    }
  }
});