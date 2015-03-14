var app = app || {};

app.Router = Backbone.Router.extend({
  initialize: function() {
    app.todo = new app.Todo();
    app.todos = new app.Todos();
    app.todos.fetch();
    app.todosView = new app.TodosView();
    app.formView = new app.FormView();

    $(document).on('click', 'a:not([data-bypass])', function(e) {
      e.preventDefault();
      var route = $(this).data('target');
      app.router.navigate(route, {trigger: true});
    });

    this.on('route', function(route) {
      if (route === 'list') {
        $('#create-nav').removeClass('active');
        $('#list-nav').addClass('active');
      }
      else if (route === 'create') {
        $('#list-nav').removeClass('active');
        $('#create-nav').addClass('active');
      }
      else {
        $('#list-nav').removeClass('active');
        $('#create-nav').removeClass('active');
      }
    });
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
    app.formView.renderCreate();
  },

  edit: function(id) {
    app.formView.renderUpdate(id);
  }
});

$(document).ready(function() {
  app.router = new app.Router();
  Backbone.history.start();
});