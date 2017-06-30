URL=new ReactiveVar("");

Uploader.finished = function(index, fileInfo, templateContext) {
    URL.set(fileInfo.url);
    //console.log(fileInfo);
  }

Template.archivos.helpers({
	URL(){
		return URL.get();
	}
});

Template.archivos.events({
	"submit .form" : function (e) {
		console.log('invocando submit');
		e.preventDefault();
		obj ={
			//ImagenCurso:e.target.ImagenCurso.value,
			images:e.target.images.value,
			DescripcionA:e.target.DescripcionA.value,
			id_US:Accounts.user()._id
		}
		Meteor.call("addarchivo",obj);
		//e.target.ImagenCurso.value="";
		e.target.images.value="";
		e.target.DescripcionA.value="";
		alert("Archivo Insertado Correctamente");
		FlowRouter.go('/mostrarArchivo');
		return false;

	},
	
});