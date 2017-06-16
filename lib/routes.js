FlowRouter.route("/",{
	action : function(params,queryParams) {
       BlazeLayout.render("mainpage",{banner:"banner",content:"contentMain"});
	}
});
FlowRouter.route("/soporte",{
	action : function(params,queryParams) {
       BlazeLayout.render("soporte",{content:"soporte"});
	}
});
FlowRouter.route("/cursos",{
	action : function(params,queryParams) {
       BlazeLayout.render("cursos",{banner:"banner",content:"cursos"});
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
