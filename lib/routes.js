FlowRouter.route("/",{
	action : function(params,queryParams) {
       BlazeLayout.render("mainpage",{banner:"banner",content:"contentMain"});
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

FlowRouter.route("/nuevocurso",{
	action : function(params,queryParams) {
       BlazeLayout.render("nuevocurso",{banner:"banner",content:"nuevocurso"});
	}
});
FlowRouter.route("/perfilE",{
	action : function(params,queryParams) {
       BlazeLayout.render("perfilE",{banner:"banner",content:"perfilE"});
	}
});
FlowRouter.route("/pages",{
	subscriptions:function(params, queryParams)
	{
		console.log(queryParams)
		//this.register("loadLikes",Meteor.subscribe(("getLikes"));
		this.register("loadComments",Meteor.subscribe("getComents",queryParams._id));
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
