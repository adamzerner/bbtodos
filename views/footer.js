var app = app || {};

app.FooterView = Backbone.View.extend({
  el: $('footer'),

  template: _.template( $('#footer-template').html() ),

  render: function() {
    this.$el.html( this.template({collection: this.collection}) );
  }
});