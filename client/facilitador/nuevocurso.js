Template.nuevocurso.events({
	"submit .form" : function (e) {
		console.log('invocando submit');
		var upload = Images.insert({
					file: e.target.imagen.files[0],
					streams: 'dynamic',
					chunkSize: 'dynamic',
				});
		e.preventDefault();
		obj ={
			//ImagenCurso:e.target.ImagenCurso.value,
			Titulo:e.target.Titulo.value,
			Descripcion:e.target.Descripcion.value,
			Inicio:e.target.Inicio.value,
			Final:e.target.Final.value,
			imgId : upload.config.fileId,
			id_US:Accounts.user()._id
		}
		Meteor.call("addcurso",obj);
		//e.target.ImagenCurso.value="";
		e.target.Titulo.value="";
		e.target.Descripcion.value="";
		e.target.Inicio.value="";
		e.target.Final.value="";
		return false;

	},
  "click #alerta2" : function EventoAlert(){
    swal("Curso Insertado", "correctamente !", "success");
  }
	
});




  
