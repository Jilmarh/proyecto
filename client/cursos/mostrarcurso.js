Template.mostrarUnCurso.events({
	"click #remove ":function(e){
		id=this._id;
		Meteor.call("deleteCurso",id);
	}
});
Template.mostrarUnCurso.helpers({
	imagen() {
   		 return Images.findOne(this.imgId);
	},
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
	},
	nombre(){
    	return Meteor.user();
    }
});
Meteor.subscribe('imagen');
		