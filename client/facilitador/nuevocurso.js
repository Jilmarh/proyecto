Template.nuevocurso.events({
	"submit .form-horizontal" : function (e) {
		console.log('invocando submit');
		e.preventDefault();
		obj ={
			Titulo:e.target.Titulo.value,
			Descripcion:e.target.Descripcion.value,
			Inicio:e.target.Inicio.value,
			Final:e.target.Final.value,
			id_US:Accounts.user()._id
		}
		Meteor.call("addcurso",obj);
		e.target.Titulo.value="";
		e.target.Descripcion.value="";
		e.target.Inicio.value="";
		e.target.Final.value="";	
		return false;
	}
});