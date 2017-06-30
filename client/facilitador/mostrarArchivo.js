Template.mostrarArchivo.helpers({
	archivo: function () {
		/*var algo=new Array();
		algo.push({Titulo:"titulo 1",Descripcion:"descripcion"});
		return algo;*/
		//return CURSO.find({},{Titulo:true,Descripcion:true});
		Meteor.subscribe("getArchivo");
		//console.log(CURSO.find().fetch());
		return ARCHIVO.find().fetch();
	}
});