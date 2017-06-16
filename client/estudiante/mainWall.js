var comments = new ReactiveVar(false);
Template.mainwallform.events({
	"submit #mainform" : function(e){
      e.preventDefault();
      var message = e.target.message.value
      ARTICLE.insert({msn:message});
      e.target.message.value = ""
	}
});
 
Template.mainwallLoadMsn.helpers({
	isReady(){
       return FlowRouter.subsReady("loadWall");
	},
	items(){
       return ARTICLE.find();
	} 
});
Template.ArticlesView.events({
	"click #comentBtn": function(e){
		
		//e.preventDefault();
		comments.set(true);
	}
});
Template.mainWallCommentForm.events({
	"submit #mainCommentForm": function(e){
		e.preventDefault();
		var msn = e.target.comment.value;
		var idMsn = this._id;
		COMMENT.insert({msn:msn,idMsn:idMsn});
			e.target.comment.value="";
		}
});
Template.ArticlesView.helpers({
	showCommets(){
		return comments.get();
	}

});
Template.mainWallCommentForm.helpers({
	
	ready(){
		return FlowRouter.subsReady("loadComments");
	},
	listComments(){
		return COMMENT.find();
	}
});