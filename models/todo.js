var app = app || {};

app.Todo = Backbone.Model.extend({
  defaults: {
    checked: false
  },

  validate: function(attrs) {
    if (!attrs.text) return 'Todos need text.';
  }
});