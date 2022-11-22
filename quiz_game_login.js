function addUser()
{
    window.location= "quiz_game_page.html";
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
    purpose: "adding user"
    });
}