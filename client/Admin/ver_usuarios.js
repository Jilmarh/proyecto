Template.ver_usuarios.helpers({
	  listestu: function(){
	  	console.log("llega");
	  	return Meteor.users.find().fetch();
	  },
 });

Meteor.subscribe('listestu');