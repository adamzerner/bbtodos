var app = app || {};

app.Todo = Backbone.Model.extend({
  defaults: {
    text: '',
    checked: false
  }
});