var app = app || {};

app.Router = Backbone.Router.extend({
  initialize: function() {
    app.todos = new app.Todos();
    app.todos.fetch();
    app.formView = new app.FormView();
    app.formView.render();
  },

  routes: {
    'all': 'all',
    'completed': 'completed',
    'remaining': 'remaining',
    '': 'all'
  },

  all: function() {
    app.todosView = new app.TodosView({collection: app.todos});
    app.todosView.render();
  },

  completed: function() {

  },

  remaining: function() {

  }
});

$(document).on('click', 'a:not([data-bypass])', function(e) {
  e.preventDefault();
  var route = $(e.currentTarget).data('target');
  app.router.navigate(route, {trigger: true});
});

$(document).ready(function() {
  app.router = new app.Router();
  Backbone.history.start();
});