
var app = app || {};

app.FormView = Backbone.View.extend({
  el: $('#container'),

  template: _.template( $('#form-template').html() ),

  renderCreate: function() {
    var obj = {
      type: 'Create',
      attributes: {
        text: ''
      }
    };
    this.$el.html( this.template(obj) );
  },

  renderEdit: function(id) {
    var obj = this.collection.get(id);
    obj.type = 'Update';
    this.$el.html( this.template(obj) );
  },

  events: {
    'submit form': 'submit'
  },

  submit: function(e) {
    e.preventDefault();
    var id = $(e.target).data('id');
    if (id) {
      var model = this.collection.get(id);
      model.set('text', $("input[name='text']").val());
      model.save({}, {
        success: function() {
          app.router.navigate('list', {trigger: true});
        },
        error: function() {
          alert('Unable to update todo.');
        }
      });
    }
    else { // create
      this.collection.create({
        text: $("input[name='text']").val()
      }, {
        success: function() {
          app.router.navigate('list', {trigger: true});
        },
        error: function() {
          alert('Unable to create todo.');
        }
      });
    }
  }
});