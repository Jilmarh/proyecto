Template.logginForm.events ({
	"click #registerbtn" : function (e){
		e.preventDefault();
		myTemplates.set("registerForm");
	},
	"click #close" : function(e){
        e.preventDefault();
        $(".formulario1").css("opacity",0);
	},
	"submit form" : function(e){

		Meteor.loginWithPassword(e.target.email.value,e.target.password.value);
		$(".formulario1").css("opacity",0);
		return false;
	}
});
Template.mainpage.events ({
    "click #registro" : function (e){
		e.preventDefault();
		$(".formulario1").css("opacity",1);
	}
});
 
