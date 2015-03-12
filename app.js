var app = app || {};

app.Router = Backbone.Router.extend({
  initialize: function() {
    app.todos = new app.Todos();
    app.todos.fetch();
    app.todosView = new app.TodosView({collection: app.todos});
    app.formView = new app.FormView({collection: app.todos});
    app.navbarView = new app.NavbarView();
    app.navbarView.render();
  },

  routes: {
    'create': 'create',
    'list': 'list',
    'edit/:id': 'edit',
    '': 'list'
  },

  create: function() {
    app.formView.renderCreate();
  },

  list: function() {
    app.todos.fetch();
    app.todosView.render();
  },

  edit: function(id) {
    app.formView.renderEdit(id);
  }
});

app.router = new app.Router();
$(document).ready(function() {
  Backbone.history.start();
});