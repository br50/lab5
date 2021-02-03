var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	// I had to look this up
	console.log(request.query.name);
	console.log(request.query.description);
	// JSON for new friend
	// create new temp js object
	var newFriendTemp =  new Object();
	// put name and description of obj using request.query.name
	newFriendTemp.name = request.query.name;
	newFriendTemp.description = request.query.description;
	newFriendTemp.imageURL = 'https://loremflickr.com/500/500/girl?lock=4242';

	var newFriend = JSON.stringify(newFriendTemp);
	console.log(newFriend);

	data.friends.push(JSON.parse(newFriend));

	console.log(data);

	response.render('index', data);
 }