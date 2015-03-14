var app = app || {};

app.Router = Backbone.Router.extend({
  initialize: function() {
    app.todo = new app.Todo();
    app.todos = new app.Todos();
    app.todos.fetch();
    app.todosView = new app.TodosView();
    app.formView = new app.FormView();
  },

  routes: {
    'list': 'list',
    'create': 'create',
    'edit/:id': 'edit',
    '': 'list'
  },

  list: function() {
    app.todosView.render();
  },

  create: function() {

  },

  edit: function(id) {

  }
});

$(document).ready(function() {
  app.router = new app.Router();
  Backbone.history.start();
});