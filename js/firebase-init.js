var firebaseConfig = {
    apiKey: "AIzaSyDRlCVBeKycug1rHB4goYb0al_nX7VehTM",
    authDomain: "phonemaison-bf850.firebaseapp.com",
    databaseURL: "https://phonemaison-bf850-default-rtdb.firebaseio.com",
    projectId: "phonemaison-bf850",
    storageBucket: "phonemaison-bf850.appspot.com",
    messagingSenderId: "67675006152",
    appId: "1:67675006152:web:f48480a6bdf474359d31fd"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    let index = window.location.pathname.lastIndexOf('/');
    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
       
        
        $('#dname').html(firebase.auth().currentUser.displayName);
       var dname=firebase.auth().currentUser.displayName;
        document.getElementById("login").innerHTML="Hi "+dname
        document.getElementById("signup").innerHTML = "Logout"
    } else {
        
        document.getElementById("login").href="login.html"
        document.getElementById("login").innerHTML = "Login"
        document.getElementById("signup").href="signup.html"
        document.getElementById("signup").innerHTML = "Signup"
    }
});
function logout() {
    var user = firebase.auth().currentUser;

    if (user) {
        firebase.auth().signOut();
        window.location.reload();
    }
    else{
        return;
    }
    
}
function Submit() {
    alert("Request Sent to Phone Masion executive");
  }