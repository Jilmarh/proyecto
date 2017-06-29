PERFIL = new Mongo.Collection("perfil");

ARTICLE = new Mongo.Collection("articles",{
	transform:function(item){
		var list_likes=LIKES.find({idArt:item._id}).fetch();
		console.log(list_likes)
		/*for(var i=0;i<list_likes.length;i++)
		{
			concole.log(list_likes[i]);
		}*/
		return item;
	}
});

var articlesSchema =new SimpleSchema({
    msn: {
    	type :String
    },
    date: {
    	type:Date,
    	autoValue:function(){
    		return new Date(); 
    	}
    },
    user: {
    	type:String,
    	autoValue:function(){
    		return this.userId
    	}
    },
    mediaContent: {
    	type:String,
    	autoValue:function(){
    		return "";
    	}
    }
});

ARTICLE.allow({
	insert:function(userId,params){
		console.log("entra")
        return !!userId;
	}
});

ARTICLE.attachSchema(articlesSchema);



COMMENT = new Mongo.Collection("comment");

var commentSchema = new SimpleSchema({
	msn: {
		type : String,
	},
	date: {
		type: Date,
		autoValue: function(){
			return new Date();
		}
	},
	user: {
		type: String,
		autoValue: function(){
			return this.userId;
		}
	},
	idMsn: {
		type: String
	}
});

COMMENT.attachSchema(commentSchema);

COMMENT.allow({
	insert:function(userId,params){
        return !!userId;
	}
});

LIKES = new Mongo.Collection("likes");
var likesSchema =new SimpleSchema({
	idArt: {
		type:String
	},
	idUser : {
		type: String,
		autoValue : function(){
			return this.userId;
		}
	}
});

LIKES.attachSchema(likesSchema);


CHAT = new  Mongo.Collection("chat");
CONNECT = new Mongo.Collection("connect");
var chatSchema = new SimpleSchema({
	idSource: {
		type:String
	},
	idDestination: {
		type:String
	},
	date: {
		type:Date
	},
	message: {
		type:String
	}
});
CHAT.attachSchema(chatSchema);
var connectSchema = new SimpleSchema({
	idUs: {
		type:String
	},
	connectionDate: {
		type:Date
	},
	disconnectionDate: {
		type:Date
	},
	stade: {
		type:Boolean
	}
});
CONNECT.attachSchema(connectSchema);

CURSO = new Mongo.Collection("cursos");
var cursos = new SimpleSchema({
	Titulo : {
		type : String
	},
	Descripcion:{
		type : String
	},
	Inicio : {
		type : Date
	},
	Final : {
		type : Date
	},
	id_US: {
		type : String
	}
});
CURSO.attachSchema(cursos);


//POSTS=new Mongo.Collection("news");

