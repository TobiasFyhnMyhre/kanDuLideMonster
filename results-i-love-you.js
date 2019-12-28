function fnILoveYou() {
    var name = localStorage.getItem("inputUser");
    var h1Response = document.getElementById("resultRespnseGood")
    h1Response.innerHTML = "" + name + ", you are a good person and i love you.";
}