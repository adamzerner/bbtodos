
var app = app || {};

app.FormView = Backbone.View.extend({
  el: $('#container'),

  template: _.template( $('#form-template').html() ),

  renderCreate: function() {
    var arg = {
      type: 'Create',
      text: ''
    };
    this.$el.html( this.template(arg) );
  },

  renderEdit: function() {
    var arg = this.model;
    arg.type = 'Update';
    this.$el.html( this.template(arg) );
  },

  events: {
    'submit form': 'submit'
  },

  submit: function(e) {
    e.preventDefault();
    if (this.model) { // update
      this.model.set('text', $("input[name='text']").val());
      this.model.save({}, {
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