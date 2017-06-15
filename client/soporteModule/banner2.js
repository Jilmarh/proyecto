Template.banner2.events({
	"click #logout" : function(){
		$('#modal-id').modal('hide');
		Meteor.logout();
		FlowRouter.go('/');
	}
})