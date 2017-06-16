ARTICLE = new Mongo.Collection("articles");

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

//CURSO = new Mongo.Collection("admicurso");
//var Schemas ={}
//Schemas.admicurso = new SimpleSchema({
//	Descripcion:{
//		type : String,
//		label : "Descripcion"
//	},
//	Titulo : {
//		type : String,
//		labe : "Titulo"
//	},
//	Inicio : {
//		type : Date,
//		label : "Inicio"
//	},
//	Final : {
//		type : Date,
//		label : "Final"
//	},
//	idUsuario : {
//		type : String
//	}
//});

