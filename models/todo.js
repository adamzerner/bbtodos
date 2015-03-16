var app = app || {};

app.Todo = Backbone.Model.extend({
  // title: string
  // order: number
  // completed: boolean
  validate: function(attrs) {
    if (!attrs.title) return 'A title is required.';
    if (!attrs.order) return 'An order field is required.';
    if (!attrs.completed) return 'A completed field is required.';
    if (attrs.title && typeof attrs.title !== 'string') return 'Title must be a string.';
    if (attrs.title && attrs.title.length < 5) return 'Title must be at least 5 characters.';
    if (attrs.order && typeof attrs.order !== 'number') return 'Order must be a number.';
    if (attrs.completed && typeof attrs.completed !== 'boolean') return 'Completed must be a boolean.';
  },

  defaults: {
    completed: false
  }
});