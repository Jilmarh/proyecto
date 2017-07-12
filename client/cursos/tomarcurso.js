Template.tomarcurso.helpers({	
	imagess() {
		//Respuesta.findOne({userId:idUsuario}).texto
	
		var res=CURSOS.findOne({_id:this.id_Curso}).imgId;
		if (res==undefined) {
			console.log("esta vacio");
		}
   		 return Images.findOne(res);
	},
	readyCu:function(){
		return FlowRouter.subsReady("listmaterial");
	},
    clases() {
        return MATERIAL.find();
    },
    clasesCurso() {
        return CURSOS.findOne(this.id);
    }
})