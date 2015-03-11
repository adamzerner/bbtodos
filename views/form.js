var app = app || {};

app.FormView = Backbone.View.extend({
  el: $('#container'),

  template: _.template($('#form').html()),

  renderCreate: function() {
    var arg = {type: 'Create'};
    this.$el.append( this.template(arg) );
  },

  renderEdit: function() {
    var arg = this.model;
    arg.type = 'Update';
    this.$el.append( this.template(arg) );
  },

  events: {
    'submit form': 'submit'
  },

  submit: function() {
    if (this.model) { // update
      this.model.set('text', $("input[name='text']").val());
      this.model.save({}, {
        success: function() {
          app.navigate('list', {trigger: true});
        },
        error: function() {
          alert('Unable to update todo.');
        }
      })
    }
    else { // create
      this.collection.create({
        text: $("input[name='text']").val()
      }, {
        success: function() {
          app.navigate('list', {trigger: true});
        },
        error: function() {
          alert('Unable to create todo.');
        }
      });

    }
  }
});