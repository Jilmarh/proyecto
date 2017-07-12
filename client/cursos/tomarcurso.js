resp= new ReactiveVar();

Template.tomarcurso.helpers({	
	
	
    resp() {
        return RESPUESTAS.find({id_preg:this._id});
    },
    resuser() {
        return Meteor.users.findOne({_id:this.id_US});
    },
    readyres : function() {
      return 	FlowRouter.subsReady("listrespuestas");
    }
})
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
Template.tomarcurso.helpers({	
	readypreg:function(){
		return FlowRouter.subsReady("listpreguntas");
	},
    preguntas() {
        return PREGUNTAS.find().fetch().reverse();
    },
    preguntacurso() {
    	//console.log(Meteor.users.find({_id:this.id_US}));
        return Meteor.users.findOne({_id:this.id_US});
    },
    nombre(){
    	return Meteor.user();
    }
})
Template.tomarcurso.events({
	"click #activarcomentario" : function(e){
		var idd = this._id;
		resp.set(idd);
		$('#'+this._id).slideToggle('slow',function() {});
		return false;
	},
	"click #pregu" : function (e){
		var nomb;var element = document.getElementById('preguntassss');
		if (element != null) {nomb = element.value;} else {nomb=null;}
		e.preventDefault();
		console.log("entras");
		var obj = {
            texto : nomb,
            idCurso : FlowRouter.getParam('idCurso'),            
            id_US : Accounts.user()._id,
            fecha : Date,
            puntaje : 10
        };
        console.log(obj);
        Meteor.call('pregu',obj);
        element="";
        return false;
	}
});

Template.comentarios.events({
	"submit form" : function(e){
		var pre= resp.get();
		e.preventDefault();

		var obj = {
             texto : e.target.email.value,
             id_US :  Accounts.user()._id,
             id_preg : pre,
             idCurso : FlowRouter.getParam('idCurso')  
		};
    console.log(obj);
	Meteor.call('respuesta',obj);
    $("#myModal .close").click();
    $('#formularioderespuesta').trigger("reset");
	return false;
	}
});