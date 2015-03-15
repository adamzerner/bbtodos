var app = app || {};

app.Router = Backbone.Router.extend({
  initialize: function() {
    app.todos = new app.Todos();
    app.todos.fetch();
    app.formView = new app.FormView();
    app.todosView = new app.TodosView();

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

  }
});

$(document).ready(function() {
  app.router = new app.Router();
  Backbone.history.start();

  $(document).on('click', 'a:not([data-bypass])', function(e) {
    e.preventDefault();
    var target = $(this).data('target');
    app.router.navigate(target, {trigger: true});
  });
});