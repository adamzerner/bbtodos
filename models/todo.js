var app = app || {};

app.Todo = Backbone.Model.extend({
  defaults: {
    completed: false
  },

  validate: function(attrs) {
    if (typeof attrs.title === 'undefined') return 'A title is required.';
  }
});