// export function getData(data) {
	// console.log('data init ran!');
	// When a new entry is added this refreshes the posts
    // var refreshPosts = document.querySelectorAll(".list-item");
    // for (var i = 0; i < refreshPosts.length; i++) {
    //     refreshPosts[i].remove();
    // }
    // Grabs all posts submitted from the database
    // var dataEntries = data.val();
    // var keys = Object.keys(dataEntries);

    // for (var i = 0; i < keys.length; i++) {
    //     var k = keys[i];
    //     var comment = dataEntries[k].comment;
    //     var user = dataEntries[k].user;
    //     var time = dataEntries[k].time;
    //     var totalComments = 'Total Comments: ' + keys.length;

    //     // Create text and elements
    //     var userNameText = document.createTextNode('@' + user);
    //     var commentText = document.createTextNode('"' + comment + '"');
    //     var timeText = document.createTextNode(time);
    //     var newListItem = document.createElement("li");
    //     var newUserName = document.createElement("p");
    //     var newComment = document.createElement("p");
    //     var newTimeStamp = document.createElement("small");
    //     var commentDisplay = document.getElementById("commentDisplay");

    //     // Append dom elements
    //     newUserName.appendChild(userNameText);
    //     newComment.appendChild(commentText);
    //     newTimeStamp.appendChild(timeText);
    //     newListItem.appendChild(newUserName);
    //     newListItem.appendChild(newComment);
    //     newListItem.appendChild(newTimeStamp);

    //     // Assign necessary class names
    //     newUserName.className = "user_name";
    //     newComment.className = "user_comment";
    //     newListItem.className = "list-group-item list-item animated flipInX";

    //     // Prepend new post
    //     commentDisplay.prepend(newListItem);
    //     commentDisplay.style.display = "block";
    // }
// }