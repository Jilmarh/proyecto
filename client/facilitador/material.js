Template.material.helpers({
	material: function () {
		/*var algo=new Array();
		algo.push({Titulo:"titulo 1",Descripcion:"descripcion"});
		return algo;*/
		//return CURSO.find({},{Titulo:true,Descripcion:true});
		//console.log(CURSO.find().fetch());
		Meteor.subscribe("getMaterial", FlowRouter.getParam('idCurso'));
		return MATERIAL.find();
	}
});
