var app = app || {};

app.Todo = Backbone.Model.extend({
  // title: string
  // order: number
  // completed: boolean
  validate: function(attrs) {
    if (typeof attrs.title === 'undefined') return 'A title is required.';
    if (typeof attrs.completed === 'undefined') return 'A completed field is required.';
    if (attrs.title && typeof attrs.title !== 'string') return 'Title must be a string.';
    if (attrs.title && attrs.title.length < 5) return 'Title must be at least 5 characters.';
    if (attrs.completed && typeof attrs.completed !== 'boolean') return 'Completed must be a boolean.';
  },

  defaults: {
    completed: false
  },

  initialize: function() {
    this.on('invalid', function(model, error) {
      console.log(error);
    });
  }
});