Template.registerForm.events({
	"click #return" : function(){
		myTemplates.set("logginForm");
	},
	"click #close" : function(e){
		e.preventDefault();
        $(".formulario1").css("opacity",0);
	},
	"submit form" : function(e){
      var user = {
      	"username" : e.target.username.value,
      	"email" : e.target.email.value,
      	"password" : e.target.password.value,
      	"profile" : {
           "nivel" : e.target.nivel.value
      	   }
        };
        /*
        este codigo es del servidor
        */
        Accounts.createUser(user, function(e){
           if(e == indefined) {
           	 $(".formulario1").css("opacity",0);
           	 Meteor.loginWithPassword(user.username,user.password);
           }     
        });
      	return false;  
	}
});
