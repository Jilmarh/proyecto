Template.material.helpers({
	material: function () {
		/*var algo=new Array();
		algo.push({Titulo:"titulo 1",Descripcion:"descripcion"});
		return algo;*/
		//return CURSO.find({},{Titulo:true,Descripcion:true});
		Meteor.subscribe("getMaterial");
		//console.log(CURSO.find().fetch());
		return MATERIAL.find().fetch();
	}
});