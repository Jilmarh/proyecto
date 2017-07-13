Template.banner.events({
	"click #logout" : function(){
		$('#modal-id').modal('hide');
		Meteor.logout();
		FlowRouter.go('/');
	}
})

Template.banner.helpers({
	datosUsuario() {
    	//console.log(Meteor.users.find({_id:this.id_US}));
        return Meteor.users.findOne({_id:this.id_US});
    },
    nombre(){
    	return Meteor.user();
    }
});

