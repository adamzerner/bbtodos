var app = app || {};

app.Router = Backbone.Router.extend({
  initialize: function() {
    app.todo = new app.Todo();
    app.todos = new app.Todos();
    app.todos.fetch();
    app.todoView = new app.TodoView();
    app.todosView = new app.TodosView();
    app.formView = new app.FormView();

    $('a').css('cursor', 'pointer');
  
    $(document).on('click', 'a:not([data-bypass])', function(e) {
      e.preventDefault();
      var route = $(this).data('target');
      app.router.navigate(route, {trigger: true});
    });
  },

  routes: {
    'list': 'list',
    'create': 'create',
    'edit/:id': 'edit',
    '': 'list'
  },

  list: function() {
    app.todos.fetch();
    app.todosView.render();
  },

  create: function() {
    app.formView.renderCreate();
  },

  edit: function(id) {
    app.formView.renderEdit(id);
  }
});

$(document).ready(function() {
  app.router = new app.Router();
  Backbone.history.start();
});