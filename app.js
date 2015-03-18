var app = app || {};

app.Router = Backbone.Router.extend({
  initialize: function() {
    app.todos = new app.Todos();
    app.todos.fetch();
    app.formView = new app.FormView();
    app.formView.render();
    app.todos.updateTodosLeft();
    this.on('route', function(route) {
      if (route === 'all') {
        $('.nav-pills li').removeClass('active');
        $('#nav-all').addClass('active');
      }
      else if (route === 'remaining') {
        $('.nav-pills li').removeClass('active');
        $('#nav-remaining').addClass('active');
      }
      else if (route === 'completed') {
        $('.nav-pills li').removeClass('active');
        $('#nav-completed').addClass('active');
      }
      else {
        $('.nav-pills li').removeClass('active');
      }
    });
  },

  routes: {
    'all': 'all',
    'remaining': 'remaining',
    'completed': 'completed',
    '': 'all'
  },

  all: function() {
    app.allTodosView = new app.TodosView({collection: app.todos});
    app.allTodosView.render();
  },

  remaining: function() {
    var remainingTodos = app.todos.getRemaining();
    app.remainingTodosView = new app.TodosView({collection: remainingTodos});
    app.remainingTodosView.render();
  },

  completed: function() {
    var completedTodos = app.todos.getCompleted();
    app.completedTodosView = new app.TodosView({collection: completedTodos});
    app.completedTodosView.render();
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