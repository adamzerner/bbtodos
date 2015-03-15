var app = app || {};

app.FormView = Backbone.View.extend({
  el: $('#main'),

  template: _.template( $('#form-template').html() ),

  renderCreate: function() {
    var obj = {};
    obj.type = 'Create';
    this.$el.html( this.template(obj) );
  }
});