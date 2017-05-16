Template.logginForm.events ({
	"click #registerbtn" : function (e){
		e.preventDefault();
		myTemplates.set("registerForm");
	},
	"click #close" : function(e){
        e.preventDefault();
        $(".formulario1").css("opacity",0);
	}
});
Template.mainpage.events ({
    "click #registro" : function (e){
		e.preventDefault();
		$(".formulario1").css("opacity",1);
	}
});
 
