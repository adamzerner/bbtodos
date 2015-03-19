var app = app || {};

app.Router = Backbone.Router.extend({
  initialize: function() {
    app.todos = new app.Todos();
    app.todos.fetch();
    app.formView = new app.FormView();
    app.formView.render();
    this.on('route', function(route) {
      // update nav pills
      $('.nav-pills li').removeClass('active');
      if (route === 'all') $('#all-route').addClass('active');
      else if (route === 'completed') $('#completed-route').addClass('active');
      else if (route === 'remaining') $('#remaining-route').addClass('active');
    });
  },

  routes: {
    'all': 'all',
    'completed': 'completed',
    'remaining': 'remaining',
    '': 'all'
  },

  all: function() {
    app.todos.fetch();
    var todosView = new app.TodosView({collection: app.todos});
    todosView.render();
  },

  completed: function() {
    var completedTodos = app.todos.getCompleted();
    var todosView = new app.TodosView({collection: completedTodos});
    todosView.render();
  },

  remaining: function() {
    var remainingTodos = app.todos.getRemaining();
    var todosView = new app.TodosView({collection: remainingTodos});
    todosView.render();
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