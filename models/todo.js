var app = app || {};

app.Todo = Backbone.Model.extend({
  defaults: {
    checked: false
  },

  validate: function(attrs) {
    if (!attrs.text) return 'Error. Todos need a text property.';
  }
});