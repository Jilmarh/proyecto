Template.registerForm.events({
	"click #return" : function(){
		myTemplates.set("logginForm");
	},
	"submit form" : function(e){
    e.preventDefault();
    var user={
      "username" : e.target.username.value,     
      "email" : e.target.email.value,
      "password" : e.target.password.value,
      "profile" : {
            "lastname" : e.target.lastname.value,
            "tipodeusuario" : e.target.tipodeusuario.value,
            "country" : e.target.country.value
      }
    };
    Accounts.createUser(user,function(e){
      if(e == undefined){
        Meteor.loginWithPassword(user.username,user.password);

      }
    });
    return false;
  }
});
