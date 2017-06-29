Template.cursos.helpers({
	cursos: function () {
		/*var algo=new Array();
		algo.push({Titulo:"titulo 1",Descripcion:"descripcion"});
		return algo;*/
		//return CURSO.find({},{Titulo:true,Descripcion:true});
		Meteor.subscribe("getListaCursos");
		//console.log(CURSO.find().fetch());
		return CURSO.find().fetch();
	}
});
