var comments = new ReactiveVar(false);

Template.mainwallform.events({
	"submit #mainform" : function(e){
      e.preventDefault();
      var message = e.target.message.value
      ARTICLE.insert({msn:message,edit:false,mediaContent:"none"});
      e.target.message.value = ""
	}
});
 
Template.mainwallLoadMsn.helpers({
	isReady(){
       //return FlowRouter.subsReady("getLikes")&&FlowRouter.subsReady("loadWall");
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
	},
	"click #editBtn": function(e){
    	e.preventDefault();
    	ARTICLE.update({_id:this._id},{$set:{edit:true}}); 
	},
	"submit #editform":function(e){
       var msn= e.target.msn.value;
       ARTICLE.update({_id:this._id},{$set:{edit:false,msn:msn}});
       return false;
	},
		"click #removeBtn": function(e){
        Meteor.call('remove',this._id,function (error, result){
        	console.log("borra");
        });
	},
	"click #like_ui": function(e){
		e.preventDefault();
		Meteor.call("addlike",this._id,function(error,result){
			if(result){
				alert("like insertado");
			}
		});
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
	showComments(){
		return comments.get();
	},
	usuario: function(){
		return Meteor.user();
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
