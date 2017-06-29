Template.nuevocurso.events({
	"submit .form" : function (e) {
		console.log('invocando submit');
		e.preventDefault();
		obj ={
			//ImagenCurso:e.target.ImagenCurso.value,
			Titulo:e.target.Titulo.value,
			Descripcion:e.target.Descripcion.value,
			Inicio:e.target.Inicio.value,
			Final:e.target.Final.value,
			id_US:Accounts.user()._id
		}
		Meteor.call("addcurso",obj);
		//e.target.ImagenCurso.value="";
		e.target.Titulo.value="";
		e.target.Descripcion.value="";
		e.target.Inicio.value="";
		e.target.Final.value="";
		alert("Curso Insertado Correctamente");
		return false;

	},
	
});


  
