Template.admicurso.events({
	'click #btnnombreC': function (e) {
		e.preventDefault();
		var nombre = document.getElementById("nombreC").value;

		Meteor.call('agregarMateria', nombre, Accounts.userId());

	}
	
});