myTemplates = new ReactiveVar();
myTemplates.set("logginForm");
Template.mainModuleLoggin.helpers({
	template : function (){
       return  myTemplates.get(); 
	}
});