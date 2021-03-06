Images = new FilesCollection({
  storagePath: '/home/nataly/clonadoHH/imagenesOSTRIO',
  collectionName: 'Images',
  allowClientCode: false,
  cacheControl: 'public, max-age=31536000'
});


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
    	type:String
    },
    edit:{
    	type: Boolean
    }
});

ARTICLE.allow({
	update:function(){
       return true;
	},
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
	idUsuario: {
		type: String
	},
	idMaterial:{
		type: String
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
	imgId :{
        type  : String
	},
	id_US: {
		type : String
	}
});
CURSO.attachSchema(cursos);


MATERIAL = new Mongo.Collection("material");
var material = new SimpleSchema({
	material : {
		type : String
	},
	DescripcionM:{
		type : String
	},
	id_US: {
		type : String
	},
	id_Curso:{
		type: String
	}
});
MATERIAL.attachSchema(material);

ARCHIVO = new Mongo.Collection("archivo");
var archivo = new SimpleSchema({
	images:{
		type: String,
		label:"images"
	},
	DescripcionA:{
		type : String
	},
	id_US: {
		type : String
	}
});
ARCHIVO.attachSchema(archivo);


PREGUNTAS = new Mongo.Collection("preguntas");
var preguntas = new SimpleSchema({
	 texto : {
	 	type : String
	 },
    idCurso : {
    	type :String
    },
    id_US: {
		type : String
	},
	fecha : {
		type : Date,
		autoValue : function(){
			return new Date();
		}
	},	 
    puntaje : {
    	type : Number
    }
});
PREGUNTAS.attachSchema(preguntas);

RESPUESTAS = new Mongo.Collection("respuestas");
var respuestas = new SimpleSchema({
	 texto : {
	 	type : String
	 },
	 id_US: {
		type : String
	},
	id_preg :{
		type: String
	},
    idCurso : {
    	type :String
    },
	fecha : {
		type : Date,
		autoValue : function(){
			return new Date();
		}
	}
});
RESPUESTAS.attachSchema(respuestas);

//POSTS=new Mongo.Collection("news");

