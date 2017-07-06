Template.registerForm.events({
	"submit form" : function(e){
    e.preventDefault();
    var user={
      "username" : e.target.username.value,     
      "email" : e.target.email.value,
      "password" : e.target.password.value,
      "profile" : {
            "lastname" : e.target.lastname.value,
            "tipodeusuario" : e.target.tipodeusuario.value,
            "country" : e.target.country.value,
            "estado" : false, 
      }
    };
    Accounts.createUser(user,function(e){
      if(e == undefined){
        Meteor.loginWithPassword(user.username,user.password);

      }
    });
    FlowRouter.go('/');
    return false;
  },
  "click #alerta" : function EventoAlert(){
    swal("Tu registro fue exitoso!", "Usted tendra que esperar a que el administrador le habilite para poder trabajar en la plataforma !", "success");
  }
});
