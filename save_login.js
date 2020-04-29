

const MongoClient = require('mongodb').MongoClient; 

exports.connectMongo = function(user, pass) {


    const url = "mongodb+srv://yaqara_p:MBwY20CoMP@cluster0-3u09g.mongodb.net/test?retryWrites=true&w=majority";

	MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {  

		 	if(err) { return console.log(err); }  

		 	var dbo = db.db("groceryCart");
		 	var collection = dbo.collection('loginInfo');

		 	var name = user;
		 	var password = pass;
			 		

			var newData = {'username': name, 'password': password};
			 	
			console.log(newData);

			 	collection.insertOne(newData, function(err, res) {
			 	
			 	   if (err) {console.log("Error: " + err); return; }
			 			
			 	   console.log("new document inserted");
			 	
		 		});
		 
	 	console.log("Success!");
	 	
	    
	});
	//db.close();	 
}
