function fnIHateYou() {
    var name = localStorage.getItem("inputUser");
    var h1Response = document.getElementById("resultRespnseGood")
    h1Response.innerHTML = "" + name + ", you are a terrible human being, and i want to toture you until you die.";
}