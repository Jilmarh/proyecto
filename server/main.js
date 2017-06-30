import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
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
	
	Meteor.publish("getMaterial",function(){
		return MATERIAL.find();
	});

	Meteor.publish("getArchivo",function(){
		return ARCHIVO.find();
	});

  // code to run on server at startup

Meteor.methods({
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
		"addmaterial": function(obj){
			MATERIAL.insert(obj);
			return true;
		},
		"addarchivo": function(obj){
			ARCHIVO.insert(obj);
			return true;
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

