var app = app || {};

app.Todo = Backbone.Model.extend({
  initialize: function() {
    this.on('invalid', function(model, error) {
      alert(error);
    });
  },

  defaults: {
    checked: false
  },

  validate: function(attrs) {
    if (!attrs.text) return "Text can't be blank.";
  }
});