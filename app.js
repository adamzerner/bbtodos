console.log(app);

var app = app || {};

app.Router = Backbone.Router.extend({
  initialize: function() {
    app.todos = new app.Todos();
    // app.todosView = new app.TodosView({collection: app.todos});
    // app.formView = new app.FormView({collection: app.todos});
  },

  routes: {
    'create': 'create',
    'list': 'list',
    '': 'list'
  },

  list: function() {
    $('#container').html('working');
    app.todos.fetch();
    app.TodosView.render();
  },

  create: function() {
    app.formView.render();
  }
});

app.router = new app.Router();
$(document).ready(function() {
  Backbone.history.start();
});