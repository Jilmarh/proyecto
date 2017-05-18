Template.banner.helpers({
	username : function(){
		return Accounts.user().username;
	}
})

Template.mainpage.onRendered(function(){
	$(".formulario1").css("opacity",0);
})
Template.mainpage.events({
	"click #logout" : function(){
		Meteor.logout();
	}
})