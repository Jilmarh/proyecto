Template.mostrarUnCurso.events({
	"click #remove ":function(e){
		id=this._id;
		Meteor.call("deleteCurso",id);
	}
});
Template.listarCursos.helpers({
	cursos: function () {
		/*var algo=new Array();
		algo.push({Titulo:"titulo 1",Descripcion:"descripcion"});
		return algo;*/
		//return CURSO.find({},{Titulo:true,Descripcion:true});
		Meteor.subscribe("getListaCursos");
		//console.log(CURSO.find().fetch());
		return CURSO.find().fetch();
	},
	URL(){
		return URL.get();
	}
});