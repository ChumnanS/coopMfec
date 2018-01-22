function saveOnClick() {

var email = document.getElementById('email');
var password = document.getElementById('pwd');

insertData(email.value,password.value);
//     var firebaseRef = firebase.database().ref("Admin");
//    firebaseRef.child("name/fname").set("Root");
//    firebaseRef.child("name/lname").set("Firename");
}

window.onload = function () {
showData();


    

}
function showData(){

    var firebaseRef = firebase.database().ref("User").orderByChild("Name");
    firebaseRef.once('value').then(function (dataSnapshot) {

        dataSnapshot.forEach(function(childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            console.log(childData);
            

        });
        
    });


}
function insertData(email,password){
    var firebaseRef = firebase.database().ref("User");
    firebaseRef.push({
        email : email ,
        password : password 
    });
    console.log("Insert Success");
}