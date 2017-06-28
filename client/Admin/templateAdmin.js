Template.templateAdmin.events({
    "click #logout" : function(){
        $('#modal-id').modal('hide');
        Meteor.logout();
        FlowRouter.go('/');
    }
})