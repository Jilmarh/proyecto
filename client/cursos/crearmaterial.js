Template.crearmaterial.events({
	"submit .form" : function (e) {
		console.log('invocando submit');
		e.preventDefault();
		obj ={
			//ImagenCurso:e.target.ImagenCurso.value,
			material:e.target.material.value,
			DescripcionM:e.target.DescripcionM.value,
			id_US:Accounts.user()._id,
			id_Curso: FlowRouter.getParam('idCurso'),
		}
		console.log(obj);
		Meteor.call("addmaterial",obj);
		//e.target.ImagenCurso.value="";
		e.target.material.value="";
		e.target.DescripcionM.value="";
		//FlowRouter.go('/material/'+FlowRouter.getParam('idCurso'));
		return false;

	},
  "click #alerta3" : function EventoAlert(){
    swal("Material Insertado", "correctamente !", "success");
  }
	
});