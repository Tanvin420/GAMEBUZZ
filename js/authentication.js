let v=0;
window.onload= () => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            v=0;
            var email = user.email;
            var user = firebase.auth().currentUser;
            document.getElementById("loginState").innerHTML = "person";
            document.getElementById("color").style.color = "green"; 
            if(user != null){
                var email_id = user.email;
                document.getElementById("user").innerHTML = "User : " + email_id;
                document.getElementById("loggedIn").innerHTML="Logged In";
            }
            
        }
        else{
            v=1;
            document.getElementById("SignedIn").style.display = "none";
            document.getElementById("loginState").innerHTML = "person_off";
            document.getElementById("color").style.color = "red";

           
        }
    });

}

function becomeAuth()
{   if(v==1)
    {
        document.getElementById("BecomeAuth").style.display="block";
    }
    else
    {  
        window.location.replace("./become_auth.html");
        document.getElementById("BecomeAuth").style.display="none";
    }
}

function signUp(){
    var email = document.getElementById("email_signup");
    var password = document.getElementById("password_signup");
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");

  }

  //signIN function
function  signIn(){
    var email = document.getElementById("email_signin");
    var password  = document.getElementById("password_signin");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert('LogIn Successfully');
  }

  //signOut

 function signOut()
  {
    auth.signOut();
    alert("SignOut Successfully from System");
    window.location.reload(true);
  }
  
   ;
  //active user to homepage
