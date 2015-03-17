var app = app || {};

app.Router = Backbone.Router.extend({
  initialize: function() {
    app.todos = new app.Todos();
    app.todos.fetch();
    app.todosView = new app.TodosView();
    app.formView = new app.FormView();
    app.formView.render();
  },

  routes: {
    'all': 'all',
    'active': 'active',
    'completed': 'completed',
    '': 'all'
  },

  all: function() {
    app.todosView.render();
  },

  active: function() {

  },

  completed: function() {

  }
});

$(document).on('click', 'a:not([data-bypass])', function(e) {
  e.preventDefault();
  var route = $(e.target).data('target');
  app.router.navigate(route, {trigger: true});
});

$(document).ready(function() {
  app.router = new app.Router();
  Backbone.history.start();
});