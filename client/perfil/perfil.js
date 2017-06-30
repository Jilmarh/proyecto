 /*Perfil . appendSchema ({
         " username " : {
            Tipo : Cadena ,
            requerido :  verdadera
        },
        " LastName " : {

            Tipo : Cadena ,
            requerido :  verdadera
        }
})

Meteor.users.insert({
    username: 'admin',

    profile: {
                first_name: 'Clark',
                last_name: 'Kent'
    },

});*/
Template.perfil.helpers({
  image(){
    if (this.imagen!=undefined) { 
      //console.log(this.image.link);
      return true;
    }
  }
});

Template.perfil.onRendered(function(){
    
  document.getElementById("apellido").disabled = true;
  document.getElementById("username").disabled = true;

});

Template.perfil.helpers({
  nombre:function(){
    return Accounts.user().username;
  },
  apellido :function(){
      return Accounts.user().profile.lastname;
  },
   username :function(){
      return Accounts.user().username;
  },
  email :function(e){
      return Accounts.user().emails[0].address;
  },
  country :function(e){
      return Accounts.user().profile.country;
  },
});

Template.perfil.events({
  "click #editar":function(e){

       document.getElementById("guardar").disabled = false;
      document.getElementById("cancelar").disabled = false;
       document.getElementById("editar").disabled = true;


  },
  "click #guardar":function(e){
      document.getElementById("guardar").disabled = true;
      document.getElementById("editar").disabled = false;
      document.getElementById("cancelar").disabled = true;
  },
  "submit form": function(e){
    e.preventDefault();
    obj ={
      username:e.target.username.value,
      password:e.target.password.value,
      lastname:e.target.lastname.value,
      email:e.target.email.value
    }
    id=Accounts.user()._id;
    Meteor.call("updateperfil",id,obj);
    //$('#myModal').hide();
    $("#myModal .close").click()
  }
});

/*Template.modalperfil.onRendered(function(){
    $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
        $('.modal').modal();
      });
});*/