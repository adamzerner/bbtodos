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
    if (e.keyCode === 13) {
      var title = this.$el.find('input').val();
      app.todos.create({
        title: title
      }, {
        success: function() {
          console.log('in success');
        },
        error: function() {
          console.log('in error');
        }
      });
    }
  }
});