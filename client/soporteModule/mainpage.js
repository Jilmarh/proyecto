Template.mainpage.helpers({
	username : function(){
		return Accounts.user().username;
	}
})
Template.mainpage.events({
	"click #logout" : function(){
		$('#modal-id').modal('hide');
		Meteor.logout();
		FlowRouter.go('/');
	}
})