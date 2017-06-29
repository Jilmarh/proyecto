Template.mostrarUnCurso.helpers({
	list: function(){
		return CURSO.find({},{
			transform: function(clients){
			cursos.edit = new ReactiveVar();
			cursos.edit.set(false);
			return cursos;
		}});
	}
});
Template.mostrarUnCurso.events({
	"click #remove": function(e){
		CURSO.remove(this._id);
	},
	"click #edit": function(){
		this.edit.set(true);
	},
	"click #save": function(){
		obj = {
			Titulo: $("#Titulo").val(),
			Descripcion: $("#Descripcion").val(),
			Inicio: $("#Inicio").val(),
			Final: $("#Final").val()
		};
		console.log(obj)
		console.log(this._id)
		CURSO.update({_id:this._id},{$set:obj});
		this.edit.set(false);
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
	}
});