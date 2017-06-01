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
FlowRouter.route("/pages",{
	action : function(params,queryParams) {
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