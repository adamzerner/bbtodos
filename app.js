var app = app || {};

app.Router = Backbone.Router.extend({
  initialize: function() {

  },

  routes: {
    'all': 'all',
    'active': 'active',
    'completed': 'completed',
    '': 'all'
  },

  all: function() {

  },

  active: function() {

  },

  completed: function() {
    
  }
});

$(document).ready(function() {
  app.router = new app.Router();
  Backbone.history.start();
});