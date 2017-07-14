import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    if (Meteor.isServer) {
	  Meteor.publish('imagen', function () {
	    return Images.find().cursor;
	  });
	}
	
	Meteor.publishComposite('listmateriales', function(idCurso){
		return {
			find(){
				//console.log(Clases.find({cursId:id}).fetch());
				return MATERIAL.find({id_Curso:idCurso});
			},
			children: [
				{
					find(clases){
						return CURSO.find({_id:clases.idCurso});
					}
				}
			]
		}
	});
	Meteor.publishComposite('listpreguntass', function(idCurso){
		return {
			find(){
				//console.log(Clases.find({cursId:id}).fetch());
				return PREGUNTAS.find({idCurso:idCurso});
			},
			children: [
				{
					find(clases){
						return Meteor.users.find({_id:clases.id_US});
					}
				}
			]
		}
	});
	Meteor.publishComposite('listrespuestas', function(idCurso){
		return {
			find(){
				//console.log(Clases.find({cursId:id}).fetch());
				return RESPUESTAS.find({idCurso:idCurso});
			},
			children: [
				{
					find(clases){
						//console.log(Meteor.users.find({_id:clases.id_US}));
						return Meteor.users.find({_id:clases.id_US});
					}
				}
			]
		}
	});

	UploadServer.init({
	    tmpDir: process.env.PWD + '/.tmp',
	    uploadDir: process.env.PWD + '/.uploads/',
	    checkCreateDirectories: true //create the directories for you
	});

	Meteor.publish("getArticles",function(id){

        return ARTICLE.find({user:id});
	});
	Meteor.publish("getLikes",function(){
        return LIKES.find();
	});
	Meteor.publish("getComents",function(idArticle){
		return COMMENT.find({idMsn:idArticle});
	});
	Meteor.publish("getListaCursos",function(){
		return CURSO.find();
	});
	Meteor.publish('listPendientes', function() {
	  
	  return Meteor.users.find();
	});
	/***********publicacion de los materiales con chat***********/
	
	publishComposite("getMaterial",function(idCurso){
		return {
			find(){
				return MATERIAL.find({id_Curso:idCurso});		
			},
			children:[
			{
				find(material){
					return CHAT.find({idMaterial:material._id});
				},
				children:[
				{
					find(chat, material){
						return Meteor.users.find({_id : chat.idUsuario});
					}
				}
				]
			}
			]
		}
	});

	Meteor.publish("getArchivo",function(){
		return ARCHIVO.find();
	});

  // code to run on server at startup

Meteor.methods({
		"deleteMaterial": function(msnObj){
			MATERIAL.remove(msnObj);
			return true;
		},
		"deleteCurso": function(msnObj){
			CURSO.remove(msnObj);
			return true;
		},
	    "delUsuario":function(id){
			//console.log(id);	
			Meteor.users.update(id,{ $set: {'profile.estado':false }});
		},
	    "addUsuario":function(id){
			//console.log(id);	
			Meteor.users.update(id,{ $set: {'profile.estado':true }});
		},
		"addEstu":function(id){
			//console.log(id);	
			Roles.addUsersToRoles(id,['soporte'],'estudiante');
		},
		"addFaci":function(id){
			//console.log(id);	
			Roles.addUsersToRoles(id,['soporte'],'profesor');
		},
		"addcurso": function(obj){
			CURSO.insert(obj);
			return true;
		},
		"respuesta" : function(obj){
            RESPUESTAS.insert(obj);
            return true;
		}, 
		"pregu": function(obj){
			PREGUNTAS.insert(obj);
			//console.log("saliiiiiii");
			return true;
		},
		"addmaterial": function(obj){
			MATERIAL.insert(obj);
			return true;
		},
		"addarchivo": function(obj){
			ARCHIVO.insert(obj);
			return true;
		},
		"remove": function(id){
            return ARTICLE.remove(id,function(err){
                if(err){
                	console.log("Error"+err);
                    return false;
                }
                return true;
            })
		},
		"checkConnection": function(id){
			// select * from connect where idus=id and stade = true
			var result = CONNECT.find({idUs:id,stade:true}).fetch();
			if(result.length>0){
				return {value:true,id:result[0]._id};
			}
			return {value:true};
		},
		"createConnection": function(idus){
			console.log(idus);
			var id = CONNECT.insert({idUs:idus,connectionDate:new Date(),disconnectionDate:new Date(),stade:true});
			return id;
		},
		"disconnection": function(id){
			CONNECT.update(id,{$set:{stade:false,disconnectionDate:new Date()}});
			return true;
		},
		"addlike" : function(id){
			var obj={"idArt":id}
			LIKES.insert(obj);
			return true;
		},
		/*******insertar chat*************/
		'insertarChat': function(mensaje){
			CHAT.insert(mensaje);
		},

		"updateperfil":function(id,obj){
			//console.log(id);	

			Meteor.users.update({_id:id},{$set:{
				'username':obj.username,
				//'services.password.bcrypt':obj.password,
				'emails.0.address':obj.email,
				'profile.tipodeusuario':obj.tipodeusuario,
			    'profile.lastname':obj.lastname
			}});
		}
	});
});

