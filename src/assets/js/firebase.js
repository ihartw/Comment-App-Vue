import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCSeoG24_XT4tBH7epFaQinYiOyoEwvFck",
    authDomain: "simple-comment-9472f.firebaseapp.com",
    databaseURL: "https://simple-comment-9472f.firebaseio.com",
    projectId: "simple-comment-9472f",
    storageBucket: "simple-comment-9472f.appspot.com",
    messagingSenderId: "1056945087665"
};

// Initialize firebase
firebase.initializeApp(config);

var database = firebase.database();
export var postsRef = database.ref('posts');