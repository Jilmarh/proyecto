Template.registerForm.events({
	"click #return" : function(){
		myTemplates.set("logginForm");
	},
	"click #close" : function(e){
		e.preventDefault();
        $(".formulario1").css("opacity",0);
	}
});
