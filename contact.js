// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfpGKJe1kYuiwWS3bapq6YjO09OPVYEOU",
    authDomain: "agricultureguru-50f2f.firebaseapp.com",
    projectId: "agricultureguru-50f2f",
    storageBucket: "agricultureguru-50f2f.appspot.com",
    messagingSenderId: "447584018960",
    appId: "1:447584018960:web:a9f6e4dabcc1e9c0f16095",
    measurementId: "G-WVVWC2LWDJ"
  };




var messageref = firebase.database().ref('messages');


document.getElementById('contact-form').addEventListener('submit', submitform);

function submitform(e){
    e.preventDefault();
    
    var name = getinput('name');
    var email = getinput('email');
    var message = getinput('message');
    var phone = getinput('phone');

    saveMessage(name, email, message, phone); 

    //console.log(name);
}


function getinput(id){
    return document.getElementById(id).value;
}


function clearinput(name, email, message, phone){
    var newmessageref = messageref.push();
    newmessageref.set({
        name: name,
        email: email,
        message: message,
        phone: phone
    });
}