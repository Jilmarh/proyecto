FlowRouter.route("/",{
	action : function(params,queryParams) {
       BlazeLayout.render("mainpage",{banner:"banner",content:"contentMain"});
	}
});
FlowRouter.route("/registerForm",{
	action : function(params,queryParams) {
       BlazeLayout.render("registerForm",{banner:"banner",content:"registerForm"});
	}
});
FlowRouter.route("/contactanos",{
	action : function(params,queryParams) {
       BlazeLayout.render("contactanos",{banner:"banner2",content:"contactanos"});
	}
});
FlowRouter.route("/soporte",{
	action : function(params,queryParams) {
       BlazeLayout.render("soporte",{content:"soporte"});
	}
});
FlowRouter.route("/sistema_baneo",{	
	action : function(params,queryParams) {
		BlazeLayout.render("sistema_baneo",{mainmenu:"mainnav"});
	}
});
FlowRouter.route("/ver_usuarios",{
	action : function(params,queryParams) {
       BlazeLayout.render("ver_usuarios",{mainmenu:"mainnav"});
	}
});
FlowRouter.route("/chatEs",{
	action : function(params,queryParams) {
       BlazeLayout.render("chatEs",{content:"chatEs"});
	}
});
FlowRouter.route("/cursos",{
	action : function(params,queryParams) {
       BlazeLayout.render("cursos",{banner:"banner",content:"cursos"});
	}
});
FlowRouter.route("/listarCursos",{
	action : function(params,queryParams) {
       BlazeLayout.render("listarCursos",{banner:"banner",content:"listarCursos"});
	}
});
FlowRouter.route("/agregarMaterial/:idCurso",{
	action : function(params,queryParams) {
       BlazeLayout.render("agregarMaterial",{banner:"banner",content:"agregarMaterial"});
	}
});
FlowRouter.route("/material/:idCurso",{
	subscriptions:function(params, queryParams){
		this.register("loadComments",Meteor.subscribe("getComents",params.id));
		this.register("loadWall",Meteor.subscribe("getArticles",Meteor.userId()));
	},
	action : function(params,queryParams) {
       BlazeLayout.render("material",{banner:"banner",content:"material"});
	}
});

FlowRouter.route("/archivos",{
	action : function(params,queryParams) {
       BlazeLayout.render("archivos",{banner:"banner",content:"archivos"});
	}
});
FlowRouter.route("/mostrarArchivo",{
	action : function(params,queryParams) {
       BlazeLayout.render("mostrarArchivo",{banner:"banner",content:"mostrarArchivo"});
	}
});
FlowRouter.route("/nuevocurso",{
	action : function(params,queryParams) {
       BlazeLayout.render("nuevocurso",{banner:"banner",content:"nuevocurso"});
	}
});
FlowRouter.route("/perfil",{
	action : function(params,queryParams) {
       BlazeLayout.render("perfil",{banner:"banner",content:"perfil"});
	}
});
FlowRouter.route("/pages/:id",{
	subscriptions:function(params, queryParams)
	{
		console.log('esto es el param '+params.id);
		//this.register("loadLikes",Meteor.subscribe("getLikes"));
		this.register("loadComments",Meteor.subscribe("getComents",params.id));
		this.register("loadWall",Meteor.subscribe("getArticles",Meteor.userId()));

	},
	action () {
       BlazeLayout.render("pages",{banner:"banner",content:"pages"});
	}
});
FlowRouter.route("/admicurso",{
	action : function(params,queryParams) {
       BlazeLayout.render("admicurso",{banner:"banner",content:"admicurso"});
	}
});

FlowRouter.route("/sistemaBaneo",{
	action : function(params,queryParams) {
       BlazeLayout.render("sistemaBaneo",{banner:"banner",content:"sistemaBaneo"});
	}
});
